function HeaderWrapper(props) {
  const children = props.children;
  console.log(children);
  return (
    <div>
      <div className='header'></div>
      {children}
    </div>
  );
}

export default HeaderWrapper;
