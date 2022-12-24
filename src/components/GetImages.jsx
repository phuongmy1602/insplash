import { useState, useEffect } from "react";
import axios from "axios";

import Gallery from "./Gallery";

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
      <div>
        {!images ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="gallery">
            {images.map((image) => (
              <Gallery key={image.id} {...image} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default GetImages;
