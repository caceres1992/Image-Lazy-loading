import Image from "next/image";
import React from "react";

const ImageComponent = ({ src, width, height, alt, className }) => {
  return (
    <Image
      src={src}
      fill
      objectFit='cover'

      className={'rounded-md'}
    />
  );
};

export default ImageComponent;
