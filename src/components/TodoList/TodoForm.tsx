import React from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {

    //const [title, setTitle] = React.useState<string>('');
    const ref = React.useRef<HTMLInputElement>(null)

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            onAdd(ref.current!.value)
            ref.current!.value = ''
        }
        //setTitle(event.target.value)
    }

    return (
        <div className="input-field mt2">
            <input ref={ref}
                   //onChange={changeHandler}
                   onKeyPress={keyPressHandler}
                   type="text"
                   id="title"/>
            <label htmlFor="title" className="active" placeholder="Введите что нужно сделать">Введите что нужно сделать</label>
        </div>
    )
}