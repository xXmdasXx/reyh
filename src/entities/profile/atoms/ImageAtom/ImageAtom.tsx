// global/atoms/Image/ImageAtom.tsx
import React from "react";

interface ImageAtomProps {
  src: string;
  alt?: string;
  className?: string;
}

const ImageAtom: React.FC<ImageAtomProps> = ({ src, alt = "", className }) => {
  return <img src={src} alt={alt} className={`object-contain ${className}`} />;
};

export default ImageAtom;
