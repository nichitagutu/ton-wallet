export function WrappedButton({ text, outerClassName, innerClassName, id }) {
    const className = joinClasses('', outerClassName);
    return (
        <div className={className}>
            <Button id={id} text={text} className={innerClassName} />
        </div>
    )
}

export function Button({id, text, classNames}) {
    const className = joinClasses('', classNames);
    return (
        <button id={id} className={className}>
            {text}
        </button>
    )
}
