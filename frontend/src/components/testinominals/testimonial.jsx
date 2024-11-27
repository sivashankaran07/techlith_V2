import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/testimonial.css";
import testimonials from "../data/testimonial";

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        style={{ color: index < rating ? "gold" : "gray", fontSize: "1.2rem" }}
      >
        ★
      </span>
    ));
  };
  

  return (
    <div className="clients-testimonials">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-8 col-md-12">            
            <div className="section-title">
            <h3 style={{color:"hsl(293,100%,50%)"}}>Client Testimonials</h3>
            <h2 style={{color:"#fff"}}>Our customers love us.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">            
            <Swiper
              modules={[Pagination, Autoplay]} 
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000, 
                disableOnInteraction: false, 
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-item">
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="testimonial-content">
                      <p>{testimonial.content}</p>
                    </div>
                    <div className="testimonial-body">
                      <div className="testimonial-author-title">
                        <h2>{testimonial.name}</h2>
                        <p>{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
