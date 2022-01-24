import React from "react";
import './Banner.css'
import {IconImage} from "../IconsImage/IconImage";
import {Colors, SizesText, SizesTitle} from "../../enums/enum";
import {Title} from "../Title/Title";
import {Text} from "../Text/Text";
import {Button} from "../Buttons/Button/Button";

interface IBannerProps {
    src: string
    isFront: boolean
    onlyTitle: boolean
    text: string
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
                {props.onlyTitle ? <Title
                        color={Colors.white}
                        mainPage={true}
                        size={SizesTitle.fifty}
                        title={props.text}/>
                    :
                    <>
                        <Title
                            color={Colors.white}
                            mainPage={true}
                            size={SizesTitle.fifty}
                            title={'Everything You Love About Coffee'}/>
                        <IconImage color={'white'}/>
                        <Text
                            size={SizesText.big}
                            color={Colors.white}
                            text={'We makes every day full of energy and taste\n' + '<br/>\n' + 'Want to try our beans?'}/>
                        <Button isTransparent={'transparent'}>More</Button>
                    </>
                }

            </div>
        </div>
    )
}