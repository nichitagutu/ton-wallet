function Input({ type, value, onChange, outerClass, innerClass, placeholder}) {
    return (
        <div className={outerClass}>
            <input type={type} value={value} onChange={onChange} className={innerClass} placeholder={placeholder} />
        </div>
    )
}
