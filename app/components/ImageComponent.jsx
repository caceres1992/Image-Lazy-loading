import Image from "next/image";
import React from "react";

const ImageComponent = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      objectFit="cover"
      className={"rounded-md"}
    />
  );
};

export default ImageComponent;
