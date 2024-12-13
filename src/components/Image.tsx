"use client";

import { CldImage } from 'next-cloudinary';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function Image({ src, alt, width = 400, height = 300 }: ImageProps) {
  return (
    <CldImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      format="auto"
      quality="auto"
    />
  );
} 