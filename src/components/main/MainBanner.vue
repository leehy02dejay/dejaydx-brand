<template>
	<swiper-slide class="banner-container" id="section1">
		<div
			id="main_visual_warp"
			:style="{ backgroundImage: 'url(' + props.bannerImage + ')' }"
		>
			<div id="main_text_warp">
				<div class="main_text">
					최적화된 스마트팩토리 분석부터 구축까지<br />
					<span style="font-weight: bold">드제이DX와 함께하세요.</span>
				</div>
				<div class="main_text2">
					스마트팩토리 도입은 올바른 프로세스<span class="br_mobile"></span>
					분석 설계가 가장 중요합니다.
				</div>
				<div class="main_text_btn">CONTACT US</div>
			</div>
			<!-- <div class="scroll">
				<img src="../../assets/image/scroll.png" />
			</div> -->
			<ScrollTwinkle></ScrollTwinkle>
			<div class="arrow_left">
				<img src="../../assets/image/arrow_left.png" />
			</div>
			<div class="arrow_right">
				<img src="../../assets/image/arrow_right.png" />
			</div>
		</div>
	</swiper-slide>
</template>

<script setup>
import ScrollTwinkle from '@/components/atoms/ScrollTwinkle.vue';
import { defineProps } from 'vue';
import { SwiperSlide } from 'swiper/vue';
const props = defineProps({
	bannerImage: String,
});
</script>

<style>
#main_visual_warp {
	position: relative;
	width: 100%;
	min-height: 100vh;
	background: center top;
	background-size: cover;
}

#main_text_warp {
	width: 100%;
	margin: 0 auto;
	padding-left: 150px;
}

/* #main_visual_warp {
	position: relative;
	width: 100%;
	height: 740px;
	background: url('../../assets/image/main_visual01.jpg') center top;
	background-size: cover;
} */

.main_text {
	width: 100%;
	font-size: 44px;
	line-height: 56px;
	margin: 0 auto;
	padding-top: 250px;
	color: #fff;
}

.main_text2 {
	width: 100%;
	font-size: 22px;
	margin: 0 auto;
	padding-top: 20px;
	color: #d0d0d0;
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

.scroll {
	width: 100%;
	text-align: center;
	padding-top: 100px;
}

.scroll img {
	width: 5%;
}

.arrow_left {
	position: absolute;
	top: 45%;
	left: 5%;
}

.arrow_left img {
	width: 80%;
}

.arrow_right {
	position: absolute;
	top: 45%;
	right: 5%;
}

.arrow_right img {
	width: 80%;
}

@media (max-width: 1400px) and (min-width: 1024px) {
	#main_text_warp {
		width: 1024px;
		margin: 0 auto;
		padding-left: 60px;
	}

	.main_text {
		padding-top: 210px;
	}
}

@media (max-width: 1024px) and (min-width: 768px) {
	#main_text_warp {
		width: 768px;
		margin: 0 auto;
		padding-left: 55px;
	}
	.main_text {
		font-size: 35px;
		padding-top: 200px;
	}
}

@media screen and (max-width: 768px) {
	#main_text_warp {
		width: 100%;
		margin: 0 auto;
		padding-left: 20px;
	}

	.main_text {
		font-size: 30px;
		padding-top: 145px;
	}

	.arrow_left {
		display: none;
	}

	.arrow_right {
		display: none;
	}
}
</style>
