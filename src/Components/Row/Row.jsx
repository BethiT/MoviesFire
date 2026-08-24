import Slider from "../Slider/Slider";
import styles from "./Row.module.css";

function Row({ title, movies }) {
  return (
    <section className={styles.row}>
      <h2 className={styles.title}>{title}</h2>

      <Slider movies={movies} />
    </section>
  );
}

export default Row;
