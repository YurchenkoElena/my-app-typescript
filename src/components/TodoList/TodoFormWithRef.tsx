import React from "react";

export const TodoFormWithRef: React.FC = () => {

    const refInput = React.useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            console.log(refInput.current!.value)
            refInput.current!.value = ''
        }
    }

    return (
        <div className="input-field mt2">
            <input ref={refInput}
                   onKeyPress={keyPressHandler}
                   type="text"
                   id="title"/>
            <label htmlFor="title" className="active" placeholder="Введите что нужно сделать">Введите что нужно сделать</label>
        </div>
    )
}