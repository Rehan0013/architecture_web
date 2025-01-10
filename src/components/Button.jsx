const Button = ({children, className}) => {
  return (
    <div>
        <button className={className}>{children}</button>
    </div>
  )
};

const IconBtn = ({children, onClick}) => {
  return (
    <div>
        <button className="nav_Icnbtn" onClick={onClick}>{children}</button>
    </div>
  )
};

export {Button ,IconBtn};