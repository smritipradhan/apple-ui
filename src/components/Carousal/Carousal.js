import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousal.scss";
// import required modules
const Carousal = () => {
  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={true}
      >
        <SwiperSlide className="swiperItem"></SwiperSlide>
        <SwiperSlide className="swiperItemSecond">Slide 2</SwiperSlide>
        <SwiperSlide className="swiperItem">Slide 3</SwiperSlide>
        <SwiperSlide className="swiperItemSecond">Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousal;
