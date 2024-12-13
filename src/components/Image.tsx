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
      src={src}
      alt={alt}
      width={width}
      height={height}
      crop="fill"
      gravity="auto"
      quality="auto"
      format="auto"
      effects={[{ grayscale: true }]}
    />
  );
} 