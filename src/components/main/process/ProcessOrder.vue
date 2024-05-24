<template>
	<div id="main_con01_warp">
		<div class="main_con01_title">
			<p class="main_con01_text01">SERVICE PROCESS</p>
			<p class="main_con01_text02">
				<span style="font-weight: bold">스마트팩토리 도입</span>은 <br />
				올바른 프로세스 분석 설계가 가장 중요합니다.
			</p>
			<p class="main_con01_text03">
				체계화된 구축 진행 프로세스를 활용하여 해당 공장의 공정에 필요한 기능 및
				구현 범위를<span class="br_pc"></span>
				컨설팅을 통해 확정한 후, 이에 맞는 최적의 시스템 구현을 제공합니다.
			</p>
		</div>
		<div class="main_con01">
			<img :src="require('@/assets/image/main_con01-1.png')" />
		</div>
		<div class="background-circle" data-aos="zoom-in"></div>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
const hasScrolled = ref(false);
const scrollTop = ref(0);

function handleScroll() {
	let scrollY = document.documentElement.scrollTop > 0;
	const main_con01 = document.querySelector('.background-circle');

	if (scrollY > 0) {
		scrollTop.value = document.documentElement.scrollTop;
		if (!hasScrolled.value) {
			hasScrolled.value = true;
			window.scrollTo({
				top: window.innerHeight,
				behavior: 'smooth',
			});
		}
		if (main_con01) {
			setTimeout(() => {
				main_con01.classList.add('active');
			}, 200);
		}
	}
}
if (scrollY === 0) {
	hasScrolled.value = false;
}
onMounted(() => {
	window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
#main_con01_warp {
	width: 100%;
	height: 100vh;
	background-size: cover;
	position: relative; /* 상대적 위치 설정 */
	overflow: hidden;
	background: url('/public/image/main_con01_bg.png') no-repeat center center;
	background-size: cover;
}

/* .background-circle {
	position: absolute;
	top: 80%;
	left: 50%;
	transform: translate(-50%, -50%) scale(0.5); 
	height: 100%;
	background: url('/public/image/main_con01_bg.png') no-repeat center center;
	background-size: cover;
	border-radius: 100%; 
	z-index: -2;
	transform-origin: center bottom; 

.background-circle.active {
	animation: growCircle 0.5s ease-in-out forwards;
} */

/* @keyframes growCircle {
	0% {
		transform: translate(-50%, -50%) scale(1);
	}
	99% {
		transform: translate(-50%, -50%) scale(1.5);
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 100%;
	}
	100% {
		transform: translate(-50%, -50%) scale(1.5);
		position: absolute;
		width: 100%;
		height: 100vh;
		border-radius: 0;
	}
} */
.main_con01_title {
	width: 100%;
	margin: 0 auto;
	text-align: center;
	padding-top: 10%;
}

.main_con01 {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.main_con01 img {
	max-width: 75%;
	height: auto;
}

.main_con01_text01 {
	font-size: 18px;
	font-weight: bold;
	color: #fff;
}

.main_con01_text02 {
	font-size: 45px;
	line-height: 62px;
	color: #fff;
	padding-top: 30px;
}

.main_con01_text03 {
	font-size: 18px;
	line-height: 34px;
	color: #d0d0d0;
	padding-top: 30px;
}

@media (max-width: 1400px) and (min-width: 1024px) {
	#main_con01_warp {
		width: 100%;
		/* height: 740px; */
		background: url('/public/image/main_con01_bg.png') center top;
		background-size: cover;
	}

	.main_con01_title {
		width: 1024px;
		margin: 0 auto;
		text-align: center;
		padding-top: 80px;
	}

	.main_con01 {
		width: 1024px;
		margin: 0 auto;
		/* margin-top: 60px; */
	}

	.main_con01 img {
		width: 800px;
		margin-top: 0 !important;
	}

	.main_con01_text01 {
		font-size: 18px;
		font-weight: bold;
		color: #fff;
	}

	.main_con01_text02 {
		font-size: 40px;
		line-height: 52px;
		color: #fff;
		padding-top: 30px;
	}

	.main_con01_text03 {
		font-size: 20px;
		line-height: 32px;
		color: #d0d0d0;
		padding-top: 30px;
	}
}

@media (max-width: 1024px) and (min-width: 768px) {
	#main_con01_warp {
		width: 100%;
		/* height: 540px; */
		background: url('/public/image/main_con01_bg.png') center top;
		background-size: cover;
	}

	.main_con01_title {
		width: 768px;
		margin: 0 auto;
		text-align: center;
		padding-top: 50px;
	}

	.main_con01 {
		width: 768px;
		margin: 0 auto;
		/* margin-top: 30px; */
	}

	.main_con01 img {
		width: 400px;
	}

	.main_con01_text01 {
		font-size: 16px;
		font-weight: bold;
		color: #fff;
	}

	.main_con01_text02 {
		font-size: 30px;
		line-height: 42px;
		color: #fff;
		padding-top: 30px;
	}

	.main_con01_text03 {
		font-size: 18px;
		line-height: 28px;
		color: #d0d0d0;
		padding-top: 20px;
	}
}

@media screen and (max-width: 768px) {
	#main_con01_warp {
		width: 100%;
		/* height: 340px; */
		background: url('/public/image/main_con01_bg.png') center top;
		background-size: cover;
	}

	.main_con01_title {
		width: 90%;
		margin: 0 auto;
		text-align: center;
		padding-top: 40px;
	}

	.main_con01 {
		width: 100%;
		margin: 0 auto;
		/* margin-top: 16px; */
	}

	.main_con01 img {
		width: 100%;
	}

	.main_con01_text01 {
		font-size: 12px;
		font-weight: bold;
		color: #fff;
	}

	.main_con01_text02 {
		font-size: 17px;
		line-height: 24px;
		color: #fff;
		padding-top: 10px;
	}

	.main_con01_text03 {
		font-size: 12px;
		line-height: 17px;
		color: #d0d0d0;
		padding-top: 10px;
	}
}
</style>
