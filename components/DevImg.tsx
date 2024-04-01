import Image from "next/image";
import React from "react";

// added typing
interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
}

const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} width={400} height={400} priority alt="" />
    </div>
  );
};

export default DevImg;
