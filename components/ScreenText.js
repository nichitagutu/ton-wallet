export function ScreenText({text, extraClassNames}) {
  const classNames = joinClasses('screen-text', extraClassNames);
  return (
    <div className={classNames}>
        {text}
    </div>
  );
}
