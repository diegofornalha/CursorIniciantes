import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression('folder:uploads/*')
      .sort_by('created_at', 'desc')
      .execute();

    return NextResponse.json(result.resources);
  } catch (error) {
    console.error('Erro ao listar imagens:', error);
    return NextResponse.json(
      { error: 'Falha ao listar imagens' },
      { status: 500 }
    );
  }
} 