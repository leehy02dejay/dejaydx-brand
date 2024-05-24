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
				:style="{
					backgroundImage: 'url(' + slide.image + ')',
					backgroundSize: 'cover',
					height: '100vh',
				}"
			>
			</Slide>
		</Carousel>
		<div id="main_text_warp">
			<div class="main_text">
				최적화된 스마트팩토리 분석부터 구축까지<br />
				<span style="font-weight: bold">드제이DX와 함께하세요.</span>
			</div>
			<div class="main_text2">
				스마트팩토리 도입은 올바른 프로세스<span class="br_mobile"></span>
				분석 설계가 가장 중요합니다.
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
import { ref } from 'vue';

const carousel = ref(null);

const slides = [
	{
		title: 'BannerImage1',
		image: require('@/assets/image/main_visual01.jpg'),
	},
	{
		title: 'BannerImage2',
		image: require('@/assets/image/main_visual02.jpg'),
	},
	{
		title: 'BannerImage3',
		image: require('@/assets/image/main_visual03.jpg'),
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
#section1 {
	height: 100vh;
	overflow-x: hidden;
}

#main_text_warp {
	position: absolute;
	top: 20px;
	left: 16rem;
	max-width: 70%;
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

@media (max-width: 1400px) and (min-width: 1024px) {
	#main_text_warp {
		position: absolute;
		top: 0;
		left: 7rem;
	}

	.main_text2 {
		font-size: 19px;
	}
}

@media (max-width: 1024px) and (min-width: 768px) {
	#main_text_warp {
		position: absolute;
		top: 0;
	}
	.main_text {
		font-size: 32px;
	}

	.main_text2 {
		font-size: 15px;
	}
}

@media screen and (max-width: 768px) {
	#main_text_warp {
		position: absolute;
		top: 0;
		max-width: 60%;
	}
	.main_text {
		font-size: 25px;
	}
	.main_text2 {
		font-size: 13px;
	}
}
</style>
