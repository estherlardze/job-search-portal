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
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="rounded shadow-xl bg-white p-8"
          >
            <div className='text-center flex flex-col justify-center'>
              <div className="mx-auto">
                <img src={review.Avatar} alt="" className='bg-gray/20 p-3'/>
              </div>
              <h1 className="pt-4 font-['Sora'] text-[1.5rem] font-bold">
                {review.name}
              </h1>
              <p className="my-3 text-blue font-bold text-lg">{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ContactSlide;
