import React, { useEffect, useState } from "react";
import styles from "./Gallery.module.scss";
import clsx from "clsx";

function Gallery({ name, data }) {
  const [mediaData, setMediaData] = useState([]);
  const [activeMedia, setActiveMedia] = useState({});

  const DEFAULT_MEDIA = {
    id: 1,
    type: "image",
    source: "/assets/images/edvin-johansson.jpg",
    description: name
  };

  useEffect(() => {
    if(!data.length) {
      data.push(DEFAULT_MEDIA);
    }
    setMediaData(data);
  }, [data]);

  useEffect(() => {
    setActiveMedia({ ...mediaData[0] });
  }, [mediaData]);

  const handleClick = (e) => {
    e.preventDefault();
    let index = (e.currentTarget.getAttribute("data-item"));
    setActiveMedia({ ...mediaData[index] });
  };

  const makeThumb = (source, description) => {
    return <img className={styles.image} src={source} alt={description}/>;
  };

  const setMedia = (media, thumb) => {
    const { type, source, description } = media;

    if(type === "image") {
      return makeThumb(source, description);
    } else if(type === "video") {
      if(thumb) {
        const thmb = source.split("/").pop();
        let newSource = `https://img.youtube.com/vi/${thmb}/sddefault.jpg`;
        return makeThumb(newSource, description);
      }
      return <iframe width="100%" height="400" src={source} title={description} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
    }
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.item}>
        {setMedia(activeMedia, false)}
        <div className={styles.description}>
          {activeMedia.description}
        </div>
      </div>
      <div>
        <div className={styles.thumbs}>
          {
          mediaData.map((media, index) => (
            <div
            className={clsx(styles.thumb, media.id === activeMedia.id ? styles.active : "")}
            key={index}
            onClick={handleClick}
            data-item={index}>
              {setMedia(media, true)}
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default Gallery;