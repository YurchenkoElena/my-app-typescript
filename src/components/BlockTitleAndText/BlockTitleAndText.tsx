import React from "react";
import './BlockTitleAndText.css'
import {Colors, SizesText, SizesTitle} from "../../enums/enum";
import {Title} from "../Title/Title";
import {Text} from "../Text/Text";
import {IconImage} from "../IconsImage/IconImage";

interface ITitleProps {
    title: string
    text: string
    hasImage: boolean
    srcImage?:string
}

export const BlockTitleAndText: React.FC<ITitleProps> = (props) => {

    return (
        <div className="title-text container">
            {
                props.hasImage ?
                    <div className={'with-image'}>
                        <div className={'left-image'}>
                            <img src={props.srcImage} alt={'image'}/>
                        </div>
                        <Title mainPage={false} color={Colors.black} size={SizesTitle.thirty} title={props.title}/>
                        <IconImage color={Colors.black}/>
                        <Text size={SizesText.normal} color={Colors.black} text={props.text}/>
                    </div>

                    :
                    <>
                        <Title mainPage={false} color={Colors.black} size={SizesTitle.thirty} title={props.title}/>
                        <IconImage color={Colors.black}/>
                        <Text size={SizesText.normal} color={Colors.black} text={props.text}/>
                    </>
            }

        </div>
    )
}