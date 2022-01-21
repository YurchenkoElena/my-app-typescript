import React from "react";
import './Banner.css'
import {Sizes, Title} from "../Title/Title";

interface IBannerProps {
    src: string
    isFront: boolean
}

export const Banner: React.FC<IBannerProps> = (props) => {

    return (
        <div className="banner" style={{
            backgroundImage: "url(" + props.src + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className={'container'}>
                <Title color={'white'} main={true} size={Sizes.fifty}>Everything You Love About Coffee</Title>
                <p>sdvdsvdc</p>
                <button>Edd</button>
            </div>
        </div>
    )
}