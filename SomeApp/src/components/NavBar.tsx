import { Link } from "react-router-dom"

export const NavBar = () => {
   return(
    <nav className="navbar">
    <Link to={"/"} className="logo">MangaFlow</Link>
    <ul className="nav-links">
      <li><Link to={"/"}>Каталог</Link></li>
      <li><Link to={"/"}>Топ</Link></li>
      <li><input type="text" placeholder="Поиск манги..."/></li>
    </ul>
  </nav>
   )
}