import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import fd1 from "../assets/camarones_cachanilla.jpg";
import fd2 from "../assets/camarones_culichi.jpg";
import fd3 from "../assets/camarones_diabla.jpg";
import fd4 from "../assets/camarones_empanizado.jpg";
import fd5 from "../assets/aguachile.jpg";
import fd6 from "../assets/filete.jpg";
import fd7 from "../assets/filete_reyeno.jpg";
import fd8 from "../assets/molcajete.jpg";
import fd9 from "../assets/tacos_birria.jpg";
import fd10 from "../assets/torre_mariscos.jpg";
import fd11 from "../assets/tostadas_aguachile.jpg";
import fd12 from "../assets/unamed.jpg";

let food = [fd1, fd2, fd3, fd4, fd5, fd6, fd7, fd8, fd9, fd10, fd11, fd12];

register();

const createSlides = (foodList) => {
	foodList = foodList.map((item, key) => {
		return (
			<SwiperSlide key={key}>
				<img
					src={item}
					alt="food pic"
					className="w-[400px] rounded-full border-0 border-gray-400"
				></img>
			</SwiperSlide>
		);
	});
	return foodList;
};

const Carousel = () => {
	return (
		<div className="w-full mb-5 px-10">
			<Swiper
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				spaceBetween={10}
				loop={true}
				breakpoints={{
					1000: {
						slidesPerView: 6,
					},
					600: {
						slidesPerView: 3,
					},
				}}
			>
				{createSlides(food)}
			</Swiper>
		</div>
	);
};

export default Carousel;