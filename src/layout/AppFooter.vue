<template>
	<div id="fot_warp">
		<div class="fot_top">
			<div>
				<p class="fot_text01">
					고민 하시는 게 무엇이든 DEJAY DX 에게 믿고 맡겨주세요.
				</p>
				<p class="fot_text02">최적의 스마트팩토리를 구현해드립니다.</p>
			</div>
			<div class="fot_btn">
				<a href="/"><img src="/image/fot_btn.png" /></a>
			</div>
		</div>
		<div class="fot">
			<div class="fot_logo">
				<a href="/"><img src="/image/logo.png" /></a>
			</div>
			<div class="fot_text03">
				회사명 : 드제이디엑스 ｜ 대표명 : 안희찬 <br />
				주소 : 서울시 구로구 디지털로 300 , 12층 (1202호)｜ 이메일 :
				dejaydx@dejayadx.co.kr
			</div>
			<div class="fot_text04">
				Copyright ⓒ 2024 DEJAY DX All rights reserved.
			</div>
		</div>
		<div class="fot_top_btn">
			<a href="/"><img src="/image/fot_top_btn.png" /></a>
		</div>
	</div>
</template>

<script setup></script>

<style>
#fot_warp {
	position: relative;
	width: 100%;
	height: 600px;
	background: #000;
}

.fot_top {
	width: 100%;
	height: 320px;
	margin: 0 auto;
	padding-top: 60px;
	color: #fff;
}

.fot {
	width: 100%;
	border-top: 1px solid #656565;
	margin: 0 auto;
	padding-top: 30px;
	color: #656565;
}

.fot_text01 {
	font-size: 40px;
}

.fot_text02 {
	font-size: 50px;
	font-weight: bold;
	padding-top: 10px;
}

.fot_text03 {
	font-size: 20px;
	line-height: 32px;
	color: #656565;
	padding-top: 30px;
}

.fot_text04 {
	font-size: 14px;
	color: #656565;
	padding-top: 10px;
}

.fot_btn {
	padding-top: 40px;
}

.fot_logo {
	padding-top: 20px;
}

.fot_logo a img {
	filter: grayscale(100%) invert(100%) brightness(200%);
}

.fot_top_btn {
	position: absolute;
	right: 8%;
	top: 60px;
}
</style>
