import "./testimonials.css";
import { Data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section_title">Unlocking Wisdom</h2>
      <span className="section_subtitle"> Inspiring Words Await.</span>

      <Swiper
        className="testimonial_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id,author ,quote}) => {
          return (
            <SwiperSlide className="testimonial_card" key={id}>
              <h3 className="testimonial_author">{author}</h3>
              <p className="testimonial_quote" >{quote}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
