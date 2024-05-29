<template>
	<div class="factory_main_container">
		<div
			class="sub21_con_title"
			data-aos="fade-down"
			data-aos-easing="linear"
			data-aos-offset="300"
			data-aos-duration="800"
		>
			<p class="sub21_text01">스마트팩토리</p>
			<p class="sub21_text02">
				올바른 프로세스 분석과 최적화된 구축 시작부터 끝까지<span
					class="br_mobile"
				></span>
				드제이DX가 함께 하겠습니다.
			</p>
		</div>

		<div id="sub21_con01_warp">
			<div class="sub21_con01">
				<div class="sub21_con01_left">
					<img
						data-aos="fade-right"
						data-aos-offset="300"
						data-aos-duration="800"
						data-aos-easing="ease-in-sine"
						:src="require('@/assets/image/sub21-1.png')"
					/>
				</div>
				<div
					class="sub21_con01_right"
					data-aos="fade-up"
					data-aos-offset="600"
					data-aos-anchor="#example-anchor"
					data-aos-duration="800"
					data-aos-delay="500"
				>
					<div class="sub21_con01_right01">
						<p class="sub21_text03">Smart Factory</p>
						<p class="sub21_text04">
							스마트공장은 제품의 기획, 설계, 생산, 유통, 판매 등 <br />
							전 생산과정을 ICT (정보통신기술) 로 통합하여<br />
							자동화 및 디지털화를 통해 최소의 비용과 시간으로<br />
							고객 만족도를 향상시키는 지능형 생산공장입니다.
						</p>
					</div>
					<div class="sub21_con01_right02">
						<p class="sub21_text03">DEJAY DX</p>
						<p class="sub21_text04">
							최적의 스마트팩토리 구현에 모든 진행 과정을 함께 하고 있습니다.
						</p>
						<p class="sub21_text05">
							<img :src="require('@/assets/image/sub21-2.png')" />
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style>
.factory_main_container {
	overflow: hidden;
	height: 1000px;
}
.sub21_con_title {
	width: 100%;
	text-align: center;
}

.sub21_text01 {
	margin-top: 180px;
	font-size: 60px;
	letter-spacing: -1px;
	font-weight: bold;
}

.sub21_text02 {
	font-size: 22px;
	line-height: 30px;
	padding-top: 20px;
}

.sub21_text03 {
	font-size: 40px;
	font-weight: bold;
	line-height: 52px;
	padding-top: 20px;
}

.sub21_text04 {
	font-size: 20px;
	line-height: 30px;
	padding-top: 20px;
}

.sub21_text05 {
	padding-top: 20px;
}

#sub21_con01_warp {
	position: relative;
	width: 100%;
	height: 600px;
}

.sub21_con01 {
	width: 100%;
	padding-top: 80px;
	display: flex;
}

.sub21_con01_left {
	width: 45%;
}

.sub21_con01_left img {
	width: 100%;
}

.sub21_con01_right {
	width: 55%;
	left: 40%;
	padding-left: 60px;
}

.sub21_con01_right01 {
	width: 100%;
	padding-top: 20px;
}

.sub21_con01_right02 {
	width: 100%;
	padding-top: 30px;
}
</style>
