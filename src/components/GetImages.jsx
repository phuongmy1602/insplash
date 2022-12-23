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
        `https://api.unsplash.com/photos?client_id=dGQW3GmLHf7erXuRLChVXH1C-MWMgYYIHlugEwcSMt4&per_page=30`
      )
      .then((res) => {
        if (res.status !== 200) {
          return false;
        }
        if (Array.isArray(res.data) === true) {
          setImages([...images, ...res.data]);
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      <div className="container mx-auto px-6 2xl:px-0">
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
