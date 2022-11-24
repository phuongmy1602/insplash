import { useState, useEffect } from "react"
import Article from "./Article"

export default function GetImages() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos?client_id=dGQW3GmLHf7erXuRLChVXH1C-MWMgYYIHlugEwcSMt4`
      )
      const data = await response.json()
      console.log(data)
      setImages(data)
    }

    fetchImages()
  }, [])

  return (
    <>
      <div>
        <h2>
          Recommended For You
        </h2>

        {!images ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <section>
            {images.map((image) => (
              <Article key={image.id} {...image} />
            ))}
          </section>
        )}
      </div>
    </>
  )
}
