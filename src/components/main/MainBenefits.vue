<template>
	<div id="main_con02_warp">
		<div class="main_con01_title">
			<p class="main_con01_text01">BUSINSESS BENEFIT</p>
			<p class="main_con01_text02">
				스마트팩토리 도입 시
				<span style="font-weight: bold">관리 사각지대 감소</span>로<br />
				<span style="font-weight: bold">효율적인 업무관리</span>가 가능합니다.
			</p>
		</div>
		<div class="main_con02">
			<ul id="main_con02_list">
				<li>
					<img src="../../assets/image/main_con02-1.png" />
					<p class="main_con02_text01">생산성 향상</p>
					<div class="main_con02_data">
						<span class="main_con02_text02">30</span>
						<span class="main_con02_text03">%</span>
					</div>
				</li>
				<li>
					<img src="../../assets/image/main_con02-2.png" />
					<p class="main_con02_text01">품질 향상</p>
					<div class="main_con02_data">
						<span class="main_con02_text02">43.5</span>
						<span class="main_con02_text03">%</span>
					</div>
				</li>
				<li>
					<img src="../../assets/image/main_con02-3.png" />
					<p class="main_con02_text01">매출액 증가</p>
					<div class="main_con02_data">
						<span class="main_con02_text02">7.7</span>
						<span class="main_con02_text03">%</span>
					</div>
				</li>
				<li>
					<img src="../../assets/image/main_con02-4.png" />
					<p class="main_con02_text01">원가 감소</p>
					<div class="main_con02_data">
						<span class="main_con02_text02">-15.9</span>
						<span class="main_con02_text03">%</span>
					</div>
				</li>
				<li>
					<img src="../../assets/image/main_con02-5.png" />
					<p class="main_con02_text01">납기 준수율</p>
					<div class="main_con02_data">
						<span class="main_con02_text02">15.5</span>
						<span class="main_con02_text03">%</span>
					</div>
				</li>
				<li>
					<img src="../../assets/image/main_con02-6.png" />
					<p class="main_con02_text01">산업재해감소</p>
					<div class="main_con02_data">
						<span class="main_con02_text02">-18.3</span>
						<span class="main_con02_text03">%</span>
					</div>
				</li>
			</ul>
		</div>

		<!-- <div class="benefits-numbers-wrapper">
			<CountUp
				:start-val="0"
				:end-val="30"
				:duration="2"
				class="benefit-numbers"
				v-if="isCountVisible"
			></CountUp>
			<CountUp
				:end-val="43.5"
				:decimalPlaces="1"
				:duration="3"
				class="benefit-numbers"
				v-if="isCountVisible"
			></CountUp>
			<CountUp
				:end-val="7.7"
				:decimalPlaces="1"
				:duration="1"
				class="benefit-numbers"
				v-if="isCountVisible"
			></CountUp>
		</div> -->
	</div>
</template>

<script setup>
import { ref } from 'vue';
// import CountUp from 'vue-countup-v3';

const scrollTop = ref(0);
const isCountVisible = ref(false);

function handleScroll() {
	scrollTop.value = document.documentElement.scrollTop;

	if (scrollTop.value > 1158) {
		isCountVisible.value = true;
	}
}

window.addEventListener('scroll', handleScroll, { passive: true });
</script>

<style>
#main_con02_warp {
	clear: both;
	width: 100%;
	height: 100vh;
	background: url('../../assets/image/main_con02_bg.png') center top;
	background-size: cover;
}

.main_con02 {
	width: 100%;
	margin: 0 auto;
	padding-top: 50px;
}

.main_con02_data {
	width: 100%;
	text-align: center;
	padding-top: 10px;
}
#main_con02_list {
	width: 100%;
	display: flex;
	text-align: center;
	margin: 0 auto;
}

.main_con02 ul li {
	width: 16.6666%;
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
	margin-toptop: 5px;
	color: #fff;
}

.main_con02_text02 {
	font-size: 4rem;
	font-weight: bold;
	color: #24d2dc;
	text-align: center;
}

.main_con02_text03 {
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
</style>
