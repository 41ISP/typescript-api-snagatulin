import { Link } from "react-router-dom"
import "./ListOfManga.css"

export const ListOfManga = () => {
    return (
<header>
  <div className="manga-card">
    <img src="cover.jpg" alt="Manga Cover"/>
    <div className="manga-info">
      <h3>Название Манги</h3>
      <span>Глава 142</span>
      <Link to={"/manga/:id"}>Перейти</Link>
    </div>

  </div>
</header>
    )
}