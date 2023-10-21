/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { call } from '../../assets';
import { message } from '../../assets';
import { visit } from '../../assets';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    id: 1,
    name: 'Sent Us a Message',
    comment: 'contact@careari.com',
    Avatar: message,
  },
  {
    id: 2,
    name: 'Give us a Call',
    comment: '+00 123 456 789',
    Avatar: call,
  },
  {
    id: 3,
    name: 'Visit our Office',
    comment: '2/12 Georgia, Atlanta UK.',
    Avatar: visit,
  },
];

const ContactSlide = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="rounded border-white bg-white  p-8 lg:p-0"
          >
            <div className="inline-flex flex-col items-center lg:flex-row">
              <div className="flex h-[13vh] w-[13vw] items-center justify-center gap-4 rounded-lg bg-slate-200 lg:mr-4 lg:w-[9vw]">
                <img src={review.Avatar} alt="" className="h-10" />
              </div>
              <div className="lg:flex-col">
                <h1 className="pt-4 text-[1.5rem] font-bold lg:w-10/12">
                  {review.name}
                </h1>
                <p className="my-5 w-full font-semibold text-blue">
                  {review.comment}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ContactSlide;
