export function ScreenTitle({text, extraClassNames}) {
    const classNames = joinClasses('screen-title', extraClassNames);
    return (
        <div className={classNames}>
            {text}
        </div>
    )
}
