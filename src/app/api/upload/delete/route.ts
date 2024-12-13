import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const publicId = searchParams.get('publicId');

    if (!publicId) {
      return NextResponse.json(
        { error: 'Public ID não fornecido' },
        { status: 400 }
      );
    }

    const result = await cloudinary.uploader.destroy(publicId);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Erro ao deletar imagem:', error);
    return NextResponse.json(
      { error: 'Falha ao deletar imagem' },
      { status: 500 }
    );
  }
} 