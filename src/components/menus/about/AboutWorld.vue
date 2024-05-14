<template>
	<div>
		<div id="sub11_con02_warp">
			<div class="sub11_con02_left">
				<p class="sub11_text04">
					세계로 뻗어나가는<br />
					<span style="font-weight: bold">DEJAY DX</span>
				</p>
				<p class="sub11_text05">
					현지 셋업 및 스마트팩토리 시스템 구축<br />
					거점 별 환경 반영 및 고도화 프로젝트 완료<br />
					현지 시스템 국내 모니터링 및 운영중 <br />
					(말레이시아, 천진, 서안, 울산, 헝가리)
				</p>
			</div>
			<div class="sub11_con02_right">
				<img src="/image/sub11-2.png" width="100%" />
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style>
.sub11_text04 {
	font-size: 50px;
	line-height: 60px;
	padding-top: 10px;
}

.sub11_text05 {
	font-size: 22px;
	line-height: 34px;
	padding-top: 20px;
	color: #7c7c7c;
}

#sub11_con02_warp {
	position: relative;
	width: 100%;
	height: 640px;
	background: url('/public/image/sub11_con02_bg.png') center top;
	margin-top: 80px;
	padding-top: 0px;
}

.sub11_con02_left {
	position: absolute;
	left: 10%;
	float: left;
	top: 160px;
	z-index: 99999;
}

.sub11_con02_right {
	position: absolute;
	left: 50%;
	float: left;
	margin-left: -260px;
}
</style>
