import React from 'react';

function Content() {
    return (
    <section className="hero">
    <div className="hero-container">
      <div className="hero-content">
        <h1>Insplash</h1>
        <p>
          The internet’s source of freely useable images.
          <br/>
          Powered by creators everywhere.
        </p>
        <div className="hero-search-form">
          <form>
            <input type="text" placeholder="Search free high-resolution photos" />
          </form>
        </div>
        <div className="trending-search-tags">
          <p>Trending searches: <a href="#">flower</a>, <a href="#">wallpaper</a>, <a href="#">sad</a>, <a href="#">love</a></p>
        </div>
      </div>
    </div>
    <div className="hero-overlay"></div>
  </section>
  )
}

export default Content;