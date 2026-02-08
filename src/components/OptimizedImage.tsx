import React from 'react';
import { getPublicImageVariantUrl } from '@/lib/images';

type OptimizedImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string;
};

const OptimizedImage = ({ src, decoding = 'async', loading = 'lazy', ...imgProps }: OptimizedImageProps) => {
  const fallback = getPublicImageVariantUrl(src, 'fallback') ?? src;
  const webp = getPublicImageVariantUrl(src, 'webp');
  const avif = getPublicImageVariantUrl(src, 'avif');

  return (
    <picture className="contents">
      {avif && <source srcSet={avif} type="image/avif" />}
      {webp && <source srcSet={webp} type="image/webp" />}
      <img src={fallback} decoding={decoding} loading={loading} {...imgProps} />
    </picture>
  );
};

export default OptimizedImage;
