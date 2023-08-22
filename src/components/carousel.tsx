import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Carousels = () => {
    
    return(
        <div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
                <img src="../../src/assets/images/hero.jpg"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="../../src/assets/images/hero.jpg"/>    
            </SwiperSlide>
            <SwiperSlide>
                <img src="../../src/assets/images/hero.jpg"/>
            </SwiperSlide>
        </Swiper>
        </div>
    )
}

export default Carousels;