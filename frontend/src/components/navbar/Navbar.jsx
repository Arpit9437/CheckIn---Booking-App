import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">
                CheckIn
            </span>
            <div className="navItem">
                <button className="navButton">
                    Register
                </button>
                <button className="navButton">
                    Login
                </button>
            </div>
        </div>
    </div>
  )
}
