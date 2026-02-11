import "./ListOfManga.css"

export const ListOfManga = () => {
    return (
<header>
  <nav className="navbar">
    <div className="logo">MangaFlow</div>
    <ul className="nav-links">
      <li><a href="#">Каталог</a></li>
      <li><a href="#">Топ</a></li>
      <li><input type="text" placeholder="Поиск манги..."/></li>
    </ul>
  </nav>

  <div className="manga-card">
    <img src="cover.jpg" alt="Manga Cover"/>
    <div className="manga-info">
      <h3>Название Манги</h3>
      <span>Глава 142</span>
    </div>
  </div>
</header>
    )
}