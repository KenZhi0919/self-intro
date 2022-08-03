// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper"

const Carousel = ({type}) => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{width: '800px', height:'700px'}}
      >
        {
          type === 'barbell' &&
          <>
            <SwiperSlide><img src={require('../../static/Bench.jpg')} style={{objectFit: 'contain'}}/></SwiperSlide>
            <SwiperSlide><img src={require('../../static/leg.jpg')} style={{objectFit: 'contain'}}/></SwiperSlide>
            <SwiperSlide><img src={require('../../static/back.jpg')} style={{objectFit: 'contain'}} /></SwiperSlide>
          </>
        }
        {
          type === 'skate' &&
          <>
            <SwiperSlide> 
              <iframe width="1200" height="600" src="https://www.youtube.com/embed/M8Wo5_yiGu0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </SwiperSlide>
            <SwiperSlide><img src={require('../../static/ig.jpg')} style={{objectFit: 'contain'}}/></SwiperSlide>
          </>
        }
        {
          type === 'ball' &&
          <>
            <SwiperSlide><img src={require('../../static/attack.jpg')} style={{objectFit: 'contain'}}/></SwiperSlide>
            <SwiperSlide><img src={require('../../static/defense.jpg')} style={{objectFit: 'contain'}}/></SwiperSlide>
          </>
        }
        {
          type === 'doll' &&
          <>
            <SwiperSlide><img src={require('../../static/doll1.jpg')} style={{objectFit: 'contain'}}/></SwiperSlide>
            <SwiperSlide><img src={require('../../static/doll2.jpg')} style={{objectFit: 'contain'}}/></SwiperSlide>
            <SwiperSlide><img src={require('../../static/doll3.jpg')} style={{objectFit: 'contain'}}/></SwiperSlide>
            <SwiperSlide><img src={require('../../static/doll4.jpg')} style={{objectFit: 'contain'}}/></SwiperSlide>
          </>
        }
      </Swiper>
    </>
  )
}

export default Carousel