interface CustomTextAreaProps{
    label?: string,
    id?: string,
    placeholder?: string,
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}

export default function CustomTextArea({
    label, id, placeholder, onChange
}:CustomTextAreaProps){
    return(
        <div className="flex flex-col gap-1">
            { label && <label htmlFor={ id }>{ label }</label>}
            <div className={`custom-gradient rounded-lg p-[2px]`}>
                <textarea className={`rounded-[6px] p-2 text-slate-100 placeholder-slate-400 bg-slate-600 w-full outline-none resize-none`} id={ id }  placeholder={ placeholder } rows={6} onChange={onChange} />
            </div>
        </div>
    )
}