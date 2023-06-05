import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
const Addcard = ({ arr }) => {
  let url = "https://anilist.co/anime/";
  let count = 0;
  let swiper = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      swiper,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2 }
    );
  }, [arr.length]);
  {
    if (arr.length > 0) {
      return (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          effect={"cube"}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          scrollbar={{ draggable: true, hide: true }}
        >
          {arr.map((el) => (
            <SwiperSlide className="card" key={(count += 1)}>
              <img className="card__img" src={el.image} alt={el.filename} />

              <a className="card__link" target="_blank" href={url + el.anilist}>
                Anilist
              </a>
              <h3 className="card__text">{el.filename}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    } else {
      return (
        <h3
          ref={(el) => {
            swiper = el;
          }}
          className="card__subtitle"
        >
          Результаты поиска будут тут
        </h3>
      );
    }
  }
};

export default Addcard;
