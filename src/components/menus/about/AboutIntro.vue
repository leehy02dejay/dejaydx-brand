<template>
	<div>
		<div class="scroll-container">
			<div data-aos="fade-up" class="sub11_con_title" data-aos-duration="1000">
				<span style="font-weight: bold">드제이DX는 올바른 프로세스로</span
				><br />
				최적의 시스템을 만들어갑니다
			</div>

			<div
				class="sub11-1_img"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="500"
			>
				<img
					:src="require('@/assets/image/sub11-1.png')"
					width="100%"
					ref="panel"
					class="scroll-event-image"
				/>
			</div>
		</div>
		<div class="sub11_text_warp" data-aos="fade-up" data-aos-duration="700">
			<p class="sub11_text01">ABOUT DEJAY DX</p>
			<p class="sub11_text02">제조 현장의 디지털 전환 기술의 리더</p>
			<p class="sub11_text03">
				드제이디엑스는 스마트 팩토리 솔루션과 서비스를 제공하는 기업입니다.
				<br />
				20년간의 시스템 공급 경험과 국내외 다양한 제조환경에<br />
				스마트팩토리 공급, 운영 노하우를 바탕으로<br />
				제조 현장에 스마트 팩토리 도입의 모든 과정을 함께 하겠습니다.
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const panel = ref(null);

const initializeAnimation = () => {
	gsap.set(panel.value, { y: 100, opacity: 1, scale: 0.8 });

	gsap.fromTo(
		panel.value,
		{ y: 100, opacity: 1, scale: 0.8 },
		{
			y: -200,
			opacity: 0,
			scale: 1,
			scrollTrigger: {
				trigger: panel.value,
				start: 'top center',
				end: 'bottom center',
				scrub: true,
			},
		},
	);
};

onMounted(() => {
	if (panel.value.complete) {
		initializeAnimation();
	} else {
		panel.value.addEventListener('load', initializeAnimation);
	}
});
</script>

<style>
.scroll-container {
	position: relative;
	height: 800px;
}
.sub11_con_title {
	width: 100%;
	text-align: center;
	margin-top: 180px;
	font-size: 60px;
	letter-spacing: -1px;
	position: relative;
	top: 150px;
	height: 100px;
	z-index: 20;
}

.sub11-1_img {
	width: 100%;
	margin: 0 auto;
	position: relative;
	bottom: 20px;
}

.sub11_text_warp {
	width: 100%;
	text-align: center;
	margin-top: 150px;
}

.sub11_text01 {
	font-size: 60px;
	font-weight: bold;
	letter-spacing: -1px;
}

.sub11_text02 {
	font-size: 42px;
	padding-top: 20px;
}

.sub11_text03 {
	font-size: 20px;
	line-height: 30px;
	color: #878787;
	padding-top: 10px;
}
</style>
