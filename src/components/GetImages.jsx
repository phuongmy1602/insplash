import { useState, useEffect } from "react";
import axios from "axios";

import Article from "./Article";

function GetImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/photos?client_id=dGQW3GmLHf7erXuRLChVXH1C-MWMgYYIHlugEwcSMt4&page=3&per_page=30`
      )
      .then((res) => {
        setImages([...images, ...res.data]);
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <>
      <div className="container mx-auto px-5 2xl:px-0">
        <p className="text-slate-800 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14">
          Recommended For You
        </p>

        {!images ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
            {images.map((image) => (
              <Article key={image.id} {...image} />
            ))}
          </section>
        )}
      </div>
    </>
  );
}
export default GetImages;
