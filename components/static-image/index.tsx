import Image, { StaticImageData } from 'next/image';
import { CSSProperties, FC } from 'react';

type Props = {
  src: StaticImageData | string;
  alt: string;
  className?: string;
  imageClassName?: string;
  style?: CSSProperties;
  fill?: boolean;
  blurDataURL?: string;
};

export const StaticImage: FC<Props> = ({
  src,
  alt,
  className,
  style,
  imageClassName,
  blurDataURL,
  fill = true,
  ...rest
}) => (
  <div className={`relative !overflow-hidden ${className}`} {...rest}>
    <Image
      fill={fill}
      src={src}
      alt={alt}
      className={`${imageClassName}`}
      blurDataURL={typeof src === 'string' ? blurDataURL : undefined}
      placeholder={typeof src === 'string' ? 'empty' : 'blur'}
      style={style}
    />
  </div>
);
