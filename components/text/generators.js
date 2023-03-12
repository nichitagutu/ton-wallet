function joinClasses(initClass, classes) {
  let classNames = initClass;
  if (classes) {
    if (Array.isArray(classes)) {
      classNames += ' ' + classes.join(' ');
    } else {
      classNames += ' ' + classes;
    }
  }

  return classNames;
}
