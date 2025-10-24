import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const Banner = ({ top_3app }) => {
    return (
        <Swiper
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={
                {
                    delay: 3000,
                    disableOnInteraction: false,

                }
            }
            loop={true}
            centeredSlides={true}
            className="mySwiper flex justify-center items-center"
        >
            {
                top_3app.map(app => <SwiperSlide key={app.id} >
                    <Link to={`/app-details/${app.id}`} className='flex justify-center'><img className='h-92 lg:h-[500px]' src={app.coverPhoto} alt={app.title} /></Link>
                </SwiperSlide>)
            }
        </Swiper>
    );
};

export default Banner;