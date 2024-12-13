"use client";

import { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';

interface CloudinaryImage {
  public_id: string;
  created_at: string;
}

export function ImageList() {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const response = await fetch('/api/upload/list');
      if (!response.ok) throw new Error('Falha ao carregar imagens');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Erro ao carregar imagens:', error);
    }
  };

  const handleDelete = async (publicId: string) => {
    if (!confirm('Tem certeza que deseja deletar esta imagem?')) return;
    
    try {
      setDeleting(publicId);
      const response = await fetch(`/api/upload/delete?publicId=${publicId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Falha ao deletar imagem');
      
      setImages(images.filter(img => img.public_id !== publicId));
    } catch (error) {
      console.error('Erro ao deletar:', error);
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.public_id} className="flex flex-col items-center gap-2">
          <CldImage
            src={image.public_id}
            alt="Imagem do Cloudinary"
            width={150}
            height={150}
            crop="fill"
          />
          <button
            onClick={() => handleDelete(image.public_id)}
            disabled={deleting === image.public_id}
            className="text-red-500 hover:text-red-700"
          >
            {deleting === image.public_id ? "Deletando..." : "Deletar"}
          </button>
          <p className="text-sm text-gray-500">
            {new Date(image.created_at).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
} 