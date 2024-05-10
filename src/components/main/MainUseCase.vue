<template>
	<div id="main_con03_warp">
		<div class="main_con03_title">
			<p class="main_con03_text01">도입사례</p>
			<p class="main_con03_text02">
				드제이DX의 스마트팩토리 도입사례를 확인해보세요.
			</p>
		</div>
		<div class="main_con03_text">
			<img src="/image/main_con03_text.png" />
		</div>
		<Carousel ref="carousel" :wrap-around="true" :breakpoints="breakpoints">
			<Slide
				class="main_con03"
				v-for="item in useCaseContents"
				:key="item.enTItle"
			>
				<div class="main_con03_left">
					<img :src="'/image/' + item.image" />
				</div>
				<div class="main_con03_right">
					<p class="main_con03_text03">{{ item.krTitle }}</p>
					<p class="main_con03_text04">{{ item.enTitle }}</p>
					<p v-html="item.contents" class="main_con03_text05"></p>
					<p class="main_con03_text06">
						More view &nbsp;&nbsp;<img src="/image/main_con03_btn.png" />
					</p>
				</div>
				<div class="main_con03_arrow_left" @click="prevSlideChange">
					<img src="/image/main_con03_arrow_left.png" />
				</div>
				<div class="main_con03_arrow_right" @click="nextSlideChange">
					<img src="/image/main_con03_arrow_right.png" />
				</div>
			</Slide>
		</Carousel>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';

const carousel = ref(null);

const prevSlideChange = () => {
	carousel.value.prev();
};

const nextSlideChange = () => {
	carousel.value.next();
};

const useCaseContents = [
	{
		krTitle: '제조 관리 시스템',
		enTitle: 'Manufacturing Execution System',
		contents: `- 입고/출고/Kitting 등 자재 관리<br>
				- 생산공정 모바일화 및 설비 제어<br>
				- 공정 별 Batch 매칭 및 W/O 지정<br>
				- 팔레트 및 박스 관리 및 Tracking<br>
				- 자재 바코드 및 Lot card 조회`,
		image: 'main_con03-1.png',
	},
	{
		krTitle: '설비 관리시스템',
		enTitle: 'Environmental Management System',
		contents: `- 사용자 기준정보 관리 및 권한 관리<br>
				- 단말기 관리 및 접속이력 추적<br>
				- 사용자 작업시간 Tracking <br>
				- 실시간 작업현황 및 사용자 작업상태 관리<br>
				- W/O 생성 및 설비 점검내용 EMS 공유`,
		image: 'main_con03-2.png',
	},
	{
		krTitle: '생산 관리시스템',
		enTitle: 'Manufacturing Execution System',
		contents: `- 공정 / 부서 / 설비 별 점검 현황<br>
				- 점검 결재 현황<br>
				- 활성 / 비활성 시트 관리<br>
				- BATCH HISTORY 관리<br>
				- 사전 비가동 예약기능`,
		image: 'main_con03-3.png',
	},
];
</script>

<style>
.carousel {
	height: 100%;
}

.carousel__viewport {
	overflow: hidden;
	height: 100%;
}

.carousel__track {
	height: 100%;
}
#main_con03_warp {
	position: relative;
	width: 100%;
	min-height: 950px;
	background: url('../../assets/image/main_con03_bg.png') center top;
	background-size: cover;
	overflow: hidden;
}

.main_con03_title {
	position: absolute;
	width: 100%;
	text-align: center;
	left: 0%;
	z-index: 99;
	top: 100px;
}

.main_con03 {
	position: relative;
	clear: both;
	width: 100%;
	margin: 0 auto;
	padding-top: 330px;
	overflow: hidden;
}

.main_con03_left {
	width: 960px;
	z-index: 9999;
}

.main_con03_left img {
	position: relative;
	right: 150px;
	width: 100%;
}

.main_con03_right {
	position: absolute;
	width: 380px;
	height: 400px;
	border: 1px solid #dcdcdc;
	background: #fff;
	z-index: 99999;
	left: 50%;
	margin-left: 240px;
	top: 386px;
}

.main_con03_text {
	position: absolute;
	width: 900px;
	top: 40px;
	z-index: 1;
	left: 50%;
	margin-left: -480px;
}

.main_con03_text01 {
	font-size: 50px;
	font-weight: bold;
	line-height: 62px;
	padding-top: 30px;
}

.main_con03_text02 {
	font-size: 20px;
	padding-top: 30px;
	color: #7d7d7d;
}

.main_con03_text03 {
	font-size: 34px;
	font-weight: bold;
	padding-top: 40px;
}

.main_con03_text04 {
	font-size: 16px;
	padding-top: 10px;
}

.main_con03_text05 {
	font-size: 17px;
	line-height: 32px;
	padding-top: 30px;
	color: #a7a7a7;
}

.main_con03_text06 {
	font-size: 17px;
	padding-top: 30px;
}

.main_con03_arrow_left {
	position: absolute;
	left: 1%;
	top: 530px;
	z-index: 99999;
}

.main_con03_arrow_right {
	position: absolute;
	right: 1%;
	top: 530px;
	z-index: 99999;
}

@media (max-width: 1400px) and (min-width: 1024px) {
	#main_con03_warp {
		position: relative;
		width: 100%;
		height: 740px;
		background: url('../../assets/image/main_con03_bg.png') center top;
		background-size: cover;
		overflow-y: hidden;
	}

	.main_con03_title {
		position: absolute;
		width: 100%;
		text-align: center;
		left: 0%;
		z-index: 99;
		top: 60px;
	}

	.main_con03 {
		position: relative;
		clear: both;
		width: 1024px;
		margin: 0 auto;
		padding-top: 230px;
	}

	.main_con03_left {
		position: absolute;
		bottom: 30%;
		width: 820px;
		z-index: 9999;
	}

	.main_con03_left img {
		right: 0;
	}

	.main_con03_right {
		position: absolute;
		width: 280px;
		height: 340px;
		border: 1px solid #dcdcdc;
		background: #fff;
		z-index: 99999;
		left: 50%;
		margin-left: 150px;
		top: 280px;
		padding-left: 30px;
	}

	.main_con03_right p {
		position: relative;
		right: 20px;
	}

	.main_con03_text {
		position: absolute;
		width: 600px;
		top: 40px;
		z-index: 1;
		left: 50%;
		margin-left: -300px;
		text-align: center;
	}

	.main_con03_text img {
		width: 100%;
	}

	.main_con03_text01 {
		font-size: 40px;
		font-weight: bold;
		line-height: 62px;
		padding-top: 30px;
	}

	.main_con03_text02 {
		font-size: 20px;
		padding-top: 20px;
		color: #7d7d7d;
	}

	.main_con03_text03 {
		font-size: 30px;
		font-weight: bold;
		padding-top: 30px;
	}

	.main_con03_text04 {
		font-size: 14px;
		padding-top: 10px;
	}

	.main_con03_text05 {
		font-size: 15px;
		line-height: 28px;
		padding-top: 30px;
		color: #a7a7a7;
	}

	.main_con03_text06 {
		font-size: 17px;
		padding-top: 20px;
	}

	.main_con03_arrow_left {
		position: absolute;
		left: 0%;
		top: 400px;
		z-index: 99999;
	}

	.main_con03_arrow_left img {
		width: 80%;
	}

	.main_con03_arrow_right {
		position: absolute;
		right: 0%;
		top: 400px;
		z-index: 99999;
	}

	.main_con03_arrow_right img {
		width: 80%;
	}
}

@media (max-width: 1024px) and (min-width: 768px) {
	#main_con03_warp {
		position: relative;
		width: 100%;
		height: 500px;
		background-size: cover;
		top: 80px;
	}

	.main_con03_title {
		position: absolute;
		width: 100%;
		text-align: center;
		left: 0%;
		z-index: 99;
		top: 20px;
	}

	.main_con03 {
		width: 100%;
		position: relative;
		padding-top: 180px;
		text-align: center;
		height: 100%;
	}

	.main_con03_left {
		width: 550px;
		z-index: 9999;
		margin-left: 100px;
		position: absolute;
		top: 20%;
	}

	.main_con03_left img {
		width: 100%;
		height: 100%;
		min-width: 400px;
	}

	.main_con03_right {
		position: absolute;
		width: 240px;
		height: 270px;
		border: 1px solid #dcdcdc;
		background: #fff;
		z-index: 99999;
		left: 55%;
		margin-left: 72px;
		top: 200px;
	}

	.main_con03_text {
		position: absolute;
		width: 400px;
		top: 20px;
		z-index: 1;
		left: 50%;
		margin-left: -200px;
	}

	.main_con03_text img {
		width: 100%;
	}

	.main_con03_text01 {
		font-size: 30px;
		font-weight: bold;
		line-height: 62px;
		padding-top: 30px;
	}

	.main_con03_text02 {
		font-size: 18px;
		padding-top: 10px;
		color: #7d7d7d;
	}

	.main_con03_text03 {
		font-size: 22px;
		font-weight: bold;
		padding-top: 30px;
	}

	.main_con03_text04 {
		font-size: 14px;
		padding-top: 10px;
	}

	.main_con03_text05 {
		font-size: 14px;
		line-height: 24px;
		padding-top: 10px;
		color: #a7a7a7;
	}

	.main_con03_text06 {
		font-size: 14px;
		padding-top: 10px;
	}

	.main_con03_arrow_left {
		position: absolute;
		left: 0%;
		top: 310px;
		z-index: 99999;
	}

	.main_con03_arrow_left img {
		width: 60%;
	}

	.main_con03_arrow_right {
		position: absolute;
		right: 0%;
		top: 310px;
		z-index: 99999;
	}

	.main_con03_arrow_right img {
		width: 60%;
	}
}

@media screen and (max-width: 768px) {
	#main_con03_warp {
		position: relative;
		width: 100%;
		height: 200px;
		background-size: cover;
	}

	.main_con03_title {
		position: absolute;
		width: 100%;
		text-align: center;
		left: 0%;
		z-index: 99;
		top: 20px;
	}

	.main_con03 {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		padding-top: 0px;
		overflow: hidden;
	}

	.main_con03_left {
		position: relative;
		left: 150px;
		z-index: 9999;
		width: 100%;
		margin: 0 auto;
	}

	.main_con03_left img {
		width: 500px;
	}

	.main_con03_right {
		position: static;
		width: 500px;
		border: 1px solid #dcdcdc;
		background: #fff;
		z-index: 0;
		margin: 0;
	}

	.main_con03_text {
		position: absolute;
		width: 100%;
		top: 20px;
		z-index: 1;
		left: 0%;
		margin-left: 0px;
		text-align: center;
	}

	.main_con03_text img {
		width: 60%;
	}

	.main_con03_text01 {
		font-size: 18px;
		font-weight: bold;
		line-height: 22px;
		padding-top: 20px;
	}

	.main_con03_text02 {
		font-size: 12px;
		padding-top: 10px;
		color: #7d7d7d;
	}

	.main_con03_text03 {
		font-size: 18px;
		font-weight: bold;
		padding-top: 20px;
	}

	.main_con03_text04 {
		font-size: 12px;
		padding-top: 10px;
	}

	.main_con03_text05 {
		font-size: 12px;
		line-height: 20px;
		padding-top: 10px;
		color: #a7a7a7;
	}

	.main_con03_text06 {
		font-size: 14px;
		padding-top: 10px;
	}

	.main_con03_arrow_left {
		position: absolute;
		width: 34px;
		left: 0%;
		top: 36%;
		z-index: 99999;
	}

	.main_con03_arrow_left img {
		width: 100%;
	}

	.main_con03_arrow_right {
		position: absolute;
		width: 34px;
		right: 0%;
		top: 36%;
		z-index: 99999;
	}

	.main_con03_arrow_right img {
		width: 100%;
	}
}
</style>
