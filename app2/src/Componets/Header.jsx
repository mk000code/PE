function Header({ title, menu1, menu2, menu3 }) {
  return (
    <header>
      <h1>{title}</h1>

      <nav>
        <a href="#">{menu1}</a>
        <a href="#">{menu2}</a>
        <a href="#">{menu3}</a>
      </nav>
    </header>
  );
}

export default Header;

