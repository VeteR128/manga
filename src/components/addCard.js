import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
class Addcard extends React.Component {
  render() {
    let url = "https://anilist.co/anime/";
    let count = 0;
    if (this.props.item.length > 0) {
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
          scrollbar={{ draggable: true }}
        >
          {this.props.item.map((el) => (
            <SwiperSlide className="card" key={(count += 1)}>
              <img className="card__img" src={el.image} alt="anime" />
              <a className="card__link" target="_blank" href={url + el.anilist}>
                Anilist
              </a>
              <h3 className="card__text">{el.filename}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    } else {
      return <h3 className="card__subtitle">Результат поиска будет тут</h3>;
    }
  }
}
export default Addcard;
