"use client";

import { useState } from "react";
import { CldImage } from "next-cloudinary";

export function Upload() {
  const [uploading, setUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = e.target.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch('/api/upload', {
        method: "POST",
        headers: {},
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Response data:", data);
      setUploadedImage(data.public_id);
    } catch (error) {
      console.error("Erro no upload:", error instanceof Error ? error.message : 'Erro desconhecido');
      alert("Falha ao fazer upload da imagem. Por favor, tente novamente.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!uploadedImage) return;
    try {
      setDeleting(true);
      const response = await fetch(`/api/upload/delete?publicId=${uploadedImage}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Falha ao deletar imagem');
      }
      
      setUploadedImage(null);
    } catch (error) {
      console.error('Erro ao deletar:', error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {uploading ? "Enviando..." : "Selecionar Imagem"}
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading}
        />
      </label>

      {uploadedImage && (
        <div className="flex flex-col items-center gap-2">
          <CldImage
            src={uploadedImage}
            alt="Imagem enviada"
            width={180}
            height={38}
            crop="fill"
          />
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="text-red-500 hover:text-red-700"
          >
            {deleting ? "Deletando..." : "Deletar"}
          </button>
        </div>
      )}
    </div>
  );
} 