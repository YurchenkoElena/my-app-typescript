import React from "react";
import './Banner.css'
import {IconImage} from "../IconsImage/IconImage";
import {Colors, SizesText, SizesTitle} from "../../enums/enum";
import {Title} from "../Title/Title";
import {Text} from "../Text/Text";
import {ButtonCustom} from "../Buttons/Button/Button";
import {useNavigate} from "react-router-dom";

interface IBannerProps {
    src: string
    isFront: boolean
    onlyTitle: boolean
    text: string
}

export const Banner: React.FC<IBannerProps> = (props) => {


    const history = useNavigate()

    const handleClick = () => {
        history('/your-pleasure')
    }

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
                            text={'We make every day full of energy and taste. Want to try our beans?'}/>
                        <ButtonCustom isTransparent={'transparent'} onClick={handleClick}>More</ButtonCustom>
                    </>
                }
            </div>
        </div>
    )
}