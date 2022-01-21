import React from "react";
import './Banner.css'
import {IconImage} from "../IconsImage/IconImage";
import {Colors, SizesText, SizesTitle} from "../../enums/enum";
import {Title} from "../Title/Title";
import {Text} from "../Text/Text";

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
                <Title color={Colors.white} mainPage={true} size={SizesTitle.fifty}>Everything You Love About
                    Coffee</Title>
                <IconImage color={'white'}/>
                <Text size={SizesText.big} color={Colors.white}>We makes every day full of energy and taste
                    <br/>
                    Want to try our beans?
                </Text>
                <button>Edd</button>
            </div>
        </div>
    )
}