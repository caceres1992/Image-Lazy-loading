import Image from "next/image";
import React from "react";
import { getPlaiceholder } from "plaiceholder";

const ImageBlur = async ({ src,alt }) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      blurDataURL={base64}
      fill
      alt={alt}
      objectFit="cover"
      placeholder={"blur"}
      className={"rounded-md"}
    />
  );
};

export default ImageBlur;
