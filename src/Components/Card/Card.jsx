import { FaPlay, FaPlus, FaThumbsUp, FaChevronDown } from "react-icons/fa";

import styles from "./Card.module.css";

function Card({ movie }) {
  return (
    <article className={styles.card}>
      {/* Normal Image */}
      <img src={movie.poster_path} alt={movie.title} className={styles.image} />

      {/* Hover Card */}
      <div className={styles.hoverCard}>
        <img
          src={movie.poster_path}
          alt={movie.title}
          className={styles.hoverImage}
        />

        <div className={styles.content}>
          <div className={styles.actions}>
            <div className={styles.leftActions}>
              <button
                className={`${styles.button} ${styles.playButton}`}
                aria-label="Play"
              >
                <FaPlay />
              </button>

              <button className={styles.button} aria-label="Add to list">
                <FaPlus />
              </button>

              <button className={styles.button} aria-label="Like">
                <FaThumbsUp />
              </button>
            </div>

            <button className={styles.button} aria-label="More information">
              <FaChevronDown />
            </button>
          </div>
          <span className={styles.badge}>{movie.badge}</span>

          <h3 className={styles.movieTitle}>{movie.title}</h3>

          <div className={styles.movieInfo}>
            <span className={styles.match}>98% Match</span>

            <span>{movie.matureRating}</span>
            <span>{movie.category}</span>
            <span>{movie.quality}</span>
          </div>

          <div className={styles.genres}>
            {movie.genres.map((genre, index) => (
              <span key={genre}>
                {genre}

                {index < movie.genres.length - 1 && <b>•</b>}
              </span>
            ))}
          </div>

          {/* <span className={styles.badge}>{movie.badge}</span> */}
        </div>
      </div>
    </article>
  );
}

export default Card;
