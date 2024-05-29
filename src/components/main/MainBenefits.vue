<template>
	<div id="main_con02_warp">
		<div class="main_con01_title">
			<p
				v-if="!isMiniMobile"
				class="main_con01_text01"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				BUSINSESS BENEFIT
			</p>
			<p v-if="isMiniMobile" class="main_con01_text01">BUSINSESS BENEFIT</p>
			<p
				v-if="!isMiniMobile"
				class="main_con01_text02"
				data-aos="fade-up"
				data-aos-delay="500"
				data-aos-duration="1000"
			>
				스마트팩토리 도입 시
				<span style="font-weight: bold">관리 사각지대 감소</span>로<br />
				<span style="font-weight: bold">효율적인 업무관리</span>가 가능합니다.
			</p>

			<p v-if="isMiniMobile" class="main_con01_text02">
				스마트팩토리 도입 시
				<span style="font-weight: bold">관리 사각지대 감소</span>로<br />
				<span style="font-weight: bold">효율적인 업무관리</span>가 가능합니다.
			</p>
		</div>

		<div class="main_con02">
			<ul id="main_con02_list">
				<li>
					<img :src="require('@/assets/image/main_con02-1.png')" />
					<p class="main_con02_text01">생산성 향상</p>
					<div class="main_con02_data" v-if="!isMiniMobile">
						<CountUp
							:start-val="0"
							:end-val="30"
							:duration="3"
							v-if="isCountVisible"
							class="main_con02_text02"
						>
						</CountUp>
						<span class="main_con02_text03">%</span>
					</div>

					<div class="main_con02_data" v-if="isMiniMobile">
						<div
							:start-val="0"
							:end-val="30"
							:duration="3"
							v-if="isCountVisible"
							class="main_con02_text02"
						></div>
						<span class="main_con02_text03">%</span>
					</div>
				</li>
				<li>
					<img :src="require('@/assets/image/main_con02-2.png')" />
					<p class="main_con02_text01">품질 향상</p>
					<div class="main_con02_data">
						<CountUp
							:start-val="0"
							:decimalPlaces="1"
							:end-val="43.5"
							:duration="3"
							v-if="isCountVisible"
							class="main_con02_text02"
						></CountUp>
						<span class="main_con02_text03">%</span>
					</div>
				</li>
				<li>
					<img :src="require('@/assets/image/main_con02-3.png')" />
					<p class="main_con02_text01">매출액 증가</p>
					<div class="main_con02_data">
						<CountUp
							:start-val="0"
							:decimalPlaces="1"
							:end-val="7.7"
							:duration="3"
							class="main_con02_text02"
							v-if="isCountVisible"
						></CountUp>
						<span class="main_con02_text03">%</span>
					</div>
				</li>
				<li>
					<img :src="require('@/assets/image/main_con02-4.png')" />
					<p class="main_con02_text01">원가 감소</p>
					<div class="main_con02_data">
						<CountUp
							:start-val="0"
							:decimalPlaces="1"
							:end-val="-15.9"
							:duration="3"
							class="main_con02_text02"
							v-if="isCountVisible"
						></CountUp>
						<span class="main_con02_text03">%</span>
					</div>
				</li>
				<li>
					<img :src="require('@/assets/image/main_con02-5.png')" />
					<p class="main_con02_text01">납기 준수율</p>
					<div class="main_con02_data">
						<CountUp
							:start-val="0"
							:decimalPlaces="1"
							:end-val="15.5"
							:duration="3"
							class="main_con02_text02"
							v-if="isCountVisible"
							>15.5</CountUp
						>
						<span class="main_con02_text03">%</span>
					</div>
				</li>
				<li>
					<img :src="require('@/assets/image/main_con02-6.png')" />
					<p class="main_con02_text01">산업재해감소</p>
					<div class="main_con02_data">
						<CountUp
							:start-val="0"
							:decimalPlaces="1"
							:end-val="-18.3"
							:duration="3"
							class="main_con02_text02"
							v-if="isCountVisible"
						>
							-18.3</CountUp
						>
						<span class="main_con02_text03">%</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import CountUp from 'vue-countup-v3';

const scrollTop = ref(0);
const isCountVisible = ref(false);

const isMiniMobile = ref(window.innerWidth <= 435);

const onResize = () => {
	isMiniMobile.value = window.innerWidth <= 435;
};

function handleCountUpStart() {
	scrollTop.value = document.documentElement.scrollTop;

	if (scrollTop.value > 300) {
		isCountVisible.value = true;
	}
}

function handleCountUpEnd() {
	scrollTop.value = document.documentElement.scrollTop;

	isCountVisible.value = false;
}

onMounted(() => {
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					handleCountUpStart(); // 요소가 보일 때 handleCountUpStart 실행
				} else {
					handleCountUpEnd(); // 요소가 보이지 않을 때 handleCountUpEnd 실행
				}
			});
		},
		{ threshold: 0.1 },
	);

	const targetElement = document.querySelector('.main_con02_text01');
	observer.observe(targetElement);

	window.addEventListener('resize', onResize);
});

onUnmounted(() => {
	window.removeEventListener('resize', onResize);
});
</script>

<style>
#main_con02_warp {
	position: relative;
	width: 100%;
	height: 100vh;
	background: url('/public/image/main_con02_bg.png') center top;
	background-size: cover;
}

.main_con02 {
	width: 100%;
	margin: 0 auto;
	padding-top: 50px;
}

.main_con02_data {
	display: flex;
	width: 200px;
	margin: 0 auto;
	justify-content: center;
	text-align: center;
	padding-top: 10px;
}
#main_con02_list {
	width: 100%;
	display: flex;
	text-align: center;
	margin: 0 auto;
	justify-content: center;
}

.main_con02 ul li {
	width: 14.5%;
	height: 10%;
	border-left: 1px solid #019495;
	text-align: center;
	padding-top: 50px;
}

.main_con02 ul li:first-child {
	border-left: 0px;
}

.main_con02_text01 {
	font-size: 1.2rem;
	margin-top: 5px;
	color: #fff;
}

.main_con02_text02 {
	font-size: 4rem;
	font-weight: bold;
	color: #24d2dc;
	text-align: center;
}

.main_con02_text03 {
	position: relative;
	left: 15px;
	font-size: 23px;
	color: #24d2dc;
	padding-top: 30px;
	text-align: center;
	padding-left: 1px;
}

.benefits-numbers-wrapper {
	display: flex;
	justify-content: center;
}

.benefit-numbers {
	font-weight: bold;
	font-size: 45px;
	text-align: center;
	margin: 20px;
}

@media (max-width: 1024px) and (min-width: 768px) {
	.main_con02_text01 {
		font-size: 1rem;
		margin-top: 5px;
		color: #fff;
	}

	.main_con02_text02 {
		font-size: 2rem;
		font-weight: bold;
		color: #24d2dc;
		text-align: center;
	}

	.main_con02 ul li {
		width: 13%;
		height: 10%;
		border-left: 1px solid #019495;
		text-align: center;
		padding-top: 50px;
	}
}

@media screen and (max-width: 768px) {
	.main_con02_text01 {
		font-size: 0.6rem;
		margin-top: 5px;
		color: #fff;
	}

	.main_con02_text02 {
		font-size: 1rem;
		font-weight: bold;
		color: #24d2dc;
		text-align: center;
	}
}

@media (max-width: 1024px) and (min-width: 768px) {
	#main_con02_warp {
		width: 100%;
		height: 100vh;
		background: url('/public/image/main_con02_bg.png') center top;
		background-size: cover;
	}
}

@media screen and (max-width: 435px) {
	.main_con02 ul li {
		margin-right: 5px;
		border: none;
	}

	.main_con02 ul li img {
		width: 45px;
	}
}
</style>
