import React from 'react';
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from 'react-router';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// *** 2. Import styles for the modules you are using ***
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Home = () => {
    const gameData = useLoaderData();
    const top_3app=gameData.sort((a,b)=>b.ratings-a.ratings).slice(0,3)
    console.log(top_3app)
    return (
        <div>
            <header >
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
                    top_3app.map(app=><SwiperSlide key={app.id} >
                        <Link className='flex justify-center'><img className='h-92 lg:h-[500px]' src={app.coverPhoto} alt={app.title} /></Link>
                    </SwiperSlide>)
                   }
                </Swiper>
            </header>
            <main>

            </main>
        </div>
    );
};

export default Home;