const Button = ({children}) => {
  return (
    <div>
        <button className="nav_button">{children}</button>
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