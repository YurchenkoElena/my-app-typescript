import React from "react";

interface IBannerProps {
  src: string
}

export const Banner: React.FC<IBannerProps> = (props) => {

    return (
        <div className="banner">
          <img src={props.src}></img>
        </div>
    )
}