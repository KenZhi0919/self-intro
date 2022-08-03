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
        style={{width: '600px', height:'700px'}}
      >
        {
          type === 'barbell' &&
          <>
            <SwiperSlide><img src={require('../../static/Bench.jpg')} /></SwiperSlide>
            <SwiperSlide><img src={require('../../static/leg.jpg')} /></SwiperSlide>
            <SwiperSlide><img src={require('../../static/back.jpg')} /></SwiperSlide>
          </>
        }
      </Swiper>
    </>
  )
}

export default Carousel