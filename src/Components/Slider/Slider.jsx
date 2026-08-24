import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Card from "../Card/Card";
import styles from "./Slider.module.css";

function Slider({ movies }) {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 3,
          },

          1024: {
            slidesPerView: 4,
          },

          1200: {
            slidesPerView: 5,
          },

          1500: {
            slidesPerView: 6,
          },
        }}
        className={styles.swiper}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className={styles.slide}>
            <Card movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
