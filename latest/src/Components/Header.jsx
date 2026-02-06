 import './Header.css'

 function Header(){
return (
    <>
    <h1>This is my First React App</h1>
    <nav className="navigation">
    <ul style={{listStyle:"none",display:"flex", gap:"10px"}}>
    <li><a href="/">Home</a></li>
    <li><a href="/">Contact Us</a></li>
    <li><a href="/">About</a></li>
    </ul>
    </nav>
    </>
)
}

export default Header
