import "./InfoAboutManga.css"

export const InfoAboutManga = () => {
    return( 
    <div className="manga-page-container">
      <div 
        className="manga-hero" 
        style={{ backgroundImage: "url('cover.jpg')" }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="manga-content">
        <aside className="manga-sidebar">
          <div className="manga-cover-large">
            <img src="cover.jpg" alt="Manga Cover" />
            <button className="btn-read">Читать первую главу</button>
          </div>
        </aside>

        <section className="manga-main-info">
          <h1 className="manga-title">Название Манги</h1>
          
          <div className="manga-meta">
            <span className="status">Выходит</span>
            <span className="year">2023</span>
            <span className="author">Автор: Имя Фамилия</span>
          </div>
          
          <div className="manga-description">
            <h3>Описание</h3>
            <p>
              Здесь будет находиться подробное описание сюжета манги. 
              Текст должен быть читабельным и иметь приятный межстрочный 
              интервал для комфорта пользователя.
            </p>
          </div>

          <div className="chapters-section">
            <h3>Список глав</h3>
            <div className="chapters-list">
              <div className="chapter-item">
                <span className="chapter-name">Глава 142 — Финал битвы</span>
                <span className="date">2 дня назад</span>
              </div>
              <div className="chapter-item">
                <span className="chapter-name">Глава 141 — Начало конца</span>
                <span className="date">1 неделю назад</span>
              </div>
            </div>
          </div>
        </section> 
      </div>
    </div>
    )
}