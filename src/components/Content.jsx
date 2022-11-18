import React from 'react';

function Content() {
    return (
    <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1>Insplash</h1>
        <p>
          The internet’s source of freely useable images.
          <br/>
          Powered by creators everywhere.
        </p>
        <div class="hero-search-form">
          <form>
            <input type="text" placeholder="Search free high-resolution photos" />
          </form>
        </div>
        <div class="trending-search-tags">
          <p>Trending searches: <a href="#">flower</a>, <a href="#">wallpaper</a>, <a href="#">sad</a>, <a href="#">love</a></p>
        </div>
      </div>
    </div>
    <div class="hero-overlay"></div>
  </section>
  )
}

export default Content;