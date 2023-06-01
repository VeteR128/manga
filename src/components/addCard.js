import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
class Addcard extends React.Component {
  render() {
    let url = "https://anilist.co/anime/";
    let count = 0;
    if (this.props.item.length > 0) {
      return (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {this.props.item.map((el) => (
            <SwiperSlide key={(count += 1)}>
              <img src={el.image} alt="anime" />
              <a href={url + el.anilist}>ссылка на аниме</a>
              <h3>{el.filename}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    } else {
      return <h3>добавь</h3>;
    }
  }
}
export default Addcard;
