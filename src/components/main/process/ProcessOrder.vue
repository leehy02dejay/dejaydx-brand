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
			<img src="../../../assets/image/main_con01-1.png" />
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Aos from 'aos';
const hasScrolled = ref(false);
const scrollTop = ref(0);

function handleScroll() {
	scrollTop.value = document.documentElement.scrollTop;

	if (scrollTop.value > 0) {
		if (!hasScrolled.value) {
			hasScrolled.value = true;

			window.scrollTo({
				top: window.innerHeight + 3,
				behavior: 'smooth',
			});

			setTimeout(() => {
				Aos.init({
					once: true,
					offset: 500,
				});
			}, 1000);
		}
	}
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
	background: url('../../../assets/image/main_con01_bg.png') center top;
	background-size: cover;
}

.main_con01_title {
	width: 1400px;
	margin: 0 auto;
	text-align: center;
	padding-top: 80px;
}

.main_con01 {
	width: 100%; /* 부모 요소의 크기를 100%로 설정하여 반응형으로 만듭니다. */
	display: flex; /* Flexbox를 사용하여 수직 및 수평 중앙 정렬을 쉽게 할 수 있습니다. */
	justify-content: center; /* 수평 가운데 정렬 */
	align-items: center; /* 수직 가운데 정렬 */
}

.main_con01 img {
	max-width: 75%; /* 이미지의 최대 너비를 부모 요소의 크기에 맞게 설정하여 반응형으로 만듭니다. */
	height: auto; /* 이미지의 높이를 자동으로 조정하여 비율을 유지합니다. */
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
		background: url('../../../assets/image/main_con01_bg.png') center top;
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
		background: url('../../../assets/image/main_con01_bg.png') center top;
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
		background: url('../../../assets/image/main_con01_bg.png') center top;
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
