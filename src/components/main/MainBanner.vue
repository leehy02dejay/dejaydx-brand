<template>
	<div class="carousel-container">
		<Carousel
			ref="carousel"
			:breakpoints="breakpoints"
			:autoplay="3000"
			id="section1"
			:wrap-around="true"
		>
			<Slide
				v-for="slide in slides"
				:key="slide"
				:class="'zoom-background'"
				:style="{
					backgroundImage: 'url(' + slide.image + ')',
					backgroundSize: 'cover',
					height: '100vh',
				}"
			>
			</Slide>
		</Carousel>
		<div v-if="!isMiniMobile" id="main_text_warp">
			<div class="main_text" data-aos="fade-right" data-aos-duration="1000">
				최적화된 스마트팩토리 분석부터 구축까지<br />
				<span style="font-weight: bold">드제이DX와 함께하세요.</span>
			</div>
			<div class="main_text2" data-aos="fade-zoom-in" data-aos-duration="1000">
				<span>스마트팩토리 도입은 올바른 프로세스</span>
				<span>분석 설계가 가장 중요합니다.</span>
			</div>

			<RouterLink to="/contact"
				><div class="main_text_btn">CONTACT US</div></RouterLink
			>
		</div>

		<div v-if="isMiniMobile" id="main_text_warp">
			<div class="main_text" data-aos="fade-right" data-aos-duration="1000">
				<span>최적화된 스마트팩토리 </span> <span>분석부터 구축까지</span>
				<span>드제이DX와 함께하세요.</span>
			</div>
			<div class="main_text2" data-aos="fade-zoom-in" data-aos-duration="1000">
				<span>스마트팩토리 도입은 올바른 프로세스</span>
				<span>분석 설계가 가장 중요합니다.</span>
			</div>

			<RouterLink to="/contact"
				><div class="main_text_btn">CONTACT US</div></RouterLink
			>
		</div>
		<ScrollTwinkle></ScrollTwinkle>
		<div class="arrow_left" @click="prevSlideChange">
			<img :src="require('@/assets/image/arrow_left.png')" />
		</div>
		<div class="arrow_right" @click="nextSlideChange">
			<img :src="require('@/assets/image/arrow_right.png')" />
		</div>
	</div>
</template>

<script setup>
import ScrollTwinkle from '@/components/atoms/ScrollTwinkle.vue';
import { Carousel, Slide } from 'vue3-carousel';
import { ref, onMounted, onUnmounted } from 'vue';

const carousel = ref(null);
const isMiniMobile = ref(window.innerWidth <= 435);

const onResize = () => {
	isMiniMobile.value = window.innerWidth <= 435;
};

onMounted(() => {
	window.addEventListener('resize', onResize);
});

onUnmounted(() => {
	window.removeEventListener('resize', onResize);
});

const slides = [
	{
		title: 'BannerImage1',
		image: require('@/assets/image/main_visual01.jpg'),
		// image: isMiniMobile.value
		// 	? require('@/assets/image/m_main_visual01.jpg')
		// 	: require('@/assets/image/main_visual01.jpg'),
	},
	{
		title: 'BannerImage2',
		image: require('@/assets/image/main_visual02.jpg'),
		// image: isMiniMobile.value
		// 	? require('@/assets/image/m_main_visual02.jpg')
		// 	: require('@/assets/image/main_visual02.jpg'),
	},
	{
		title: 'BannerImage3',
		image: require('@/assets/image/main_visual03.jpg'),
		// image: isMiniMobile.value
		// 	? require('@/assets/image/m_main_visual03.jpg')
		// 	: require('@/assets/image/main_visual03.jpg'),
	},
];

const prevSlideChange = () => {
	carousel.value.prev();
};

const nextSlideChange = () => {
	carousel.value.next();
};
</script>

<style>
.carousel-container {
	overflow: hidden;
	width: 100%;
	position: relative;
	height: 100vh;
	animation: zoomAnimation infinite 10s ease-in-out;
}

.carousel__viewport {
	overflow-x: hidden;
	width: 100%;
	/* height: 100vh; */
	animation: zoomAnimation infinite 10s ease-in-out;
}

/* .carousel__track li {
	height: 100vh;
} */
.carousel__slide--active.zoom-background {
	overflow-x: hidden;
	width: 100%;
	height: 100vh;
	/* position: absolute; */
	animation: zoomAnimation infinite 10s ease-in-out;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
}

@keyframes zoomAnimation {
	0% {
		background-size: 100%;
	}

	100% {
		background-size: 200%;
	}
}

#section1 {
	overflow-x: hidden;
	height: 100vh;
	width: 100%;
	overflow-x: hidden;
}

#main_text_warp {
	overflow-x: hidden;
	position: absolute;
	left: 12rem;
	top: 6%;
}

/* #main_visual_warp {
	position: relative;
	width: 100%;
	height: 740px;
	background: url('/public/image/main_visual01.jpg') center top;
	background-size: cover;
} */

.main_text {
	font-size: 44px;
	line-height: 56px;
	padding-top: 250px;
	color: #fff;
	z-index: 9999;
}

.main_text2 {
	font-size: 22px;
	/* margin: 0 auto; */
	color: #d0d0d0;
	z-index: 9999;
}

.main_text_btn {
	width: 140px;
	height: 34px;
	font-size: 16px;
	color: #fff;
	padding-top: 6px;
	border: 1px solid #ccc;
	border-radius: 30px;
	text-align: center;
	margin-top: 40px;
}

.scroll img {
	width: 5%;
}

.arrow_left {
	position: absolute;
	top: 45%;
	left: 5%;
	cursor: pointer;
}

.arrow_left img {
	width: 80%;
}

.arrow_right {
	position: absolute;
	top: 45%;
	right: 5%;
	cursor: pointer;
}

.arrow_right img {
	width: 80%;
}

@media (max-width: 2580px) and (min-width: 1900px) {
	#main_text_warp {
		overflow-x: hidden;
		position: absolute;
		left: 11rem;
		top: 9.3rem;
	}
}

@media (max-width: 1900px) and (min-width: 1440px) {
	#main_text_warp {
		overflow-x: hidden;
		position: absolute;
		left: 9rem;
		top: 3rem;
	}
}

@media (max-width: 1440px) and (min-width: 1280px) {
	#main_text_warp {
		overflow-x: hidden;
		position: absolute;
		left: 9rem;
		top: 12rem;
	}
}

@media (max-width: 1280px) and (min-width: 768px) {
	#main_text_warp {
		overflow-x: hidden;
		position: absolute;
		left: 12rem;
		top: 1rem;
	}
}

@media screen and (max-width: 435px) {
	.carousel__viewport {
		height: 100vh;
	}

	.carousel__track {
		width: 0;
		height: 100vh;
	}
	.carousel-container {
		height: 100vh;
		width: 100%;
		overflow: hidden;
	}

	.carousel {
		/* position: absolute; */
		height: 100vh;
	}
	#section1 {
		overflow: hidden;
		height: 100vh;
		width: 100%;
	}

	.carousel__slide {
		height: 100vh !important;
	}

	.carousel__slide--active.zoom-background {
		height: 100vh;
		width: 100%;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		animation: none;
		background-size: center;
	}

	#main_text_warp {
		position: absolute;
		top: 40%;
		left: 30px;
		display: flex;
		width: 100%;
		flex-direction: column;
		margin: 0 auto;
		height: 100%;
	}

	.main_text {
		display: flex;
		flex-direction: column;
		gap: 1px;
		width: 100%;
		font-size: 20px;
		padding: 0;
		margin: 0 auto;
		white-space: nowrap; /* 텍스트를 한 줄로 표시 */
	}
	.main_text > span {
		height: 30px;
	}
	.main_text > span:nth-child(3) {
		height: 25px;
		font-weight: 600;
		font-size: 28px;
	}

	.main_text2 {
		font-size: 15px;
		display: flex;
		flex-direction: column;
		white-space: wrap; /* 텍스트를 한 줄로 표시 */
		margin-top: 45px;
	}

	.main_text2 {
		font-size: 15px;
		display: flex;
		flex-direction: column;
		white-space: wrap; /* 텍스트를 한 줄로 표시 */
	}

	.arrow_left img,
	.arrow_right img {
		display: none;
	}

	.main_text_btn {
		width: 120px;
		height: 30px;
		font-size: 12px;
		text-align: 10px;
		margin-top: 20px;
	}
}
</style>
