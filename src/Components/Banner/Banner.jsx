import React from "react";
import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        {/*netflix image */}
        <img
          className={styles.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix Banner"
        />

        {/* title */}
        <h1 className={styles.title}>Bridgerton</h1>

        {/* description */}
        <h1 className={styles.description}>
          shondland's Emmy-winning series brings julia Quinn's novels to life,
          as eight siblings seek their pefect matchamid london's acandals and
          soirees.
        </h1>

        {/* play button */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={50} />
            Play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            My list
          </button>
        </div>
      </div>
      {/* feding effect */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
}

export default Banner;
