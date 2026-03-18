interface CustomInputProps{
    label?: string,
    id?: string,
    placeholder?: string,
    type?: React.HTMLInputTypeAttribute,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default function CustomInput({
    label, id, placeholder, type, onChange
}:CustomInputProps){
    return(
        <div className="flex flex-col gap-1">
            { label && <label htmlFor={ id }>{ label }</label>}
            <div className={`custom-gradient rounded-lg p-0.5`}>
                <input type={ type } className={`rounded-md p-2 text-slate-100 placeholder-slate-400 bg-slate-600 w-full outline-hidden`} id={ id }  placeholder={ placeholder } onChange={onChange}/>
            </div>
        </div>
    )
}