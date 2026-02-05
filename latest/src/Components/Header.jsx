//  function Header(){
// return (
//     <>
//     <h1>This is my First React App</h1>
//     <ul style={{listStyle:"none",display:"flex", gap:"10px"}}>
//     <li><a href="/">Home</a></li>
//     <li><a href="/">Contact Us</a></li>
//     <li><a href="/">About</a></li>
//     </ul>
//     </>
// )
// }

// export default Header
function Header() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyApp</h2>

      <ul style={styles.menu}>
        <li style={styles.item}>Home</li>
        <li style={styles.item}>About</li>
        <li style={styles.item}>Contact</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#282c34",
    color: "white"
  },
  logo: {
    margin: 0
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0
  },
  item: {
    cursor: "pointer"
  }
};

export default Header;
