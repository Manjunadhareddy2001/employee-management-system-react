import "./Navbar.css"

function Navbar(props){
    return(
        <nav className="navbar">
            <h2>{props.title}</h2>
            <h2>{props.company}</h2>
            <h2>{props.year}</h2>
        </nav>
    )
}

export default Navbar;