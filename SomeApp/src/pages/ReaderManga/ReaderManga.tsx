import "./ReaderManga.css"

export const ReadManga = () => {
    return(
     <div className="reader-container">
      <header className="reader-header">
        <div className="reader-nav">
          <button className="back-btn">←</button>
          <div className="reader-info">
            <h2>Название Манги</h2>
            <span>Глава 142 — Финал битвы</span>
          </div>
        </div>
        
        <div className="reader-settings">
          <select className="chapter-select">
            <option>Глава 142</option>
            <option>Глава 141</option>
          </select>
          <button className="settings-btn">⚙️</button>
        </div>
      </header>

      {/* Сама лента манги */}
      <main className="reader-view">
        <div className="pages-list">
          
          {/* Страница 1 */}
          <div className="manga-page-wrapper">
            <img 
              src="https://via.placeholder.com" 
              alt="Страница 1" 
              className="manga-page-img" 
            />
            <div className="page-number">Страница 1</div>
          </div>

          {/* Страница 2 */}
          <div className="manga-page-wrapper">
            <img 
              src="https://via.placeholder.com" 
              alt="Страница 2" 
              className="manga-page-img" 
            />
            <div className="page-number">Страница 2</div>
          </div>

          {/* Страница 3 */}
          <div className="manga-page-wrapper">
            <img 
              src="https://via.placeholder.com" 
              alt="Страница 3" 
              className="manga-page-img" 
            />
            <div className="page-number">Страница 3</div>
          </div>

        </div>
      </main>

      {/* Нижняя навигация */}
      <footer className="reader-footer">
        <button className="nav-btn">Предыдущая глава</button>
        <button className="nav-btn accent">Следующая глава</button>
      </footer>
    </div>
    )
}