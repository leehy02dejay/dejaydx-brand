<template>
	<div id="fot_warp">
		<div class="fot_content">
			<div class="fot_top">
				<div>
					<p class="fot_text01">
						고민 하시는 게 무엇이든 DEJAY DX 에게 믿고 맡겨주세요.
					</p>
					<p class="fot_text02">최적의 스마트팩토리를 구현해드립니다.</p>
				</div>
				<div class="fot_btn">
					<RouterLink to="/contact"
						><img :src="require('@/assets/image/fot_btn.png')"
					/></RouterLink>
				</div>
			</div>
			<div class="fot">
				<div class="fot_logo">
					<RouterLink to="/"
						><img :src="require('@/assets/image/logo.png')"
					/></RouterLink>
				</div>
				<div class="fot_text03">
					회사명 : 드제이 ｜ 대표명 : 이용훈 <br />
					주소 : 서울특별시 마포구 월드컵북로 5길 12 2층｜ 이메일 :
					hcan@dejay.co.kr
				</div>
				<div class="fot_text04">
					Copyright ⓒ 2024 DEJAY DX All rights reserved.
				</div>
			</div>
			<div class="fot_top_btn" @click="moveScrollTop">
				<img :src="require('@/assets/image/fot_top_btn.png')" />
			</div>
		</div>
	</div>
</template>

<script setup>
function moveScrollTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
</script>

<style>
#fot_warp {
	position: relative;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000;
	padding-bottom: 20px;
}

.fot_content {
	max-width: 1400px;
	margin: 0 auto;
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
	height: 100%;
}

.fot_text01 {
	font-size: 25px;
}

.fot_text02 {
	font-size: 30px;
	font-weight: bold;
	padding-top: 10px;
}

.fot_text03 {
	font-size: 14px;
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
	right: 4%;
	top: 60px;
	cursor: pointer;
}

@media screen and (max-width: 435px) {
	.fot_text01 {
		font-size: 15px;
	}

	.fot_text02 {
		font-size: 20px;
		font-weight: bold;
		padding-top: 10px;
	}

	.fot_text03 {
		font-size: 10px;
		line-height: 32px;
		color: #656565;
		padding-top: 30px;
	}

	.fot_text04 {
		font-size: 10px;
		color: #656565;
		padding-top: 10px;
	}

	.fot_content {
		max-width: 80%;
		margin: 0 auto;
	}

	.fot_top_btn {
		position: absolute;
		right: 3%;
		top: 60px;
		cursor: pointer;
	}

	.fot_btn a img {
		width: 10rem;
		padding-top: 0.5rem;
	}
}
</style>
