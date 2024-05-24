<template>
	<div id="main_con04_warp">
		<div class="main_con04_title">
			<p class="main_con04_text01">OUR PARTNER</p>
			<p class="main_con04_text02">우리의 고객사</p>
			<p class="main_con04_text03">
				DEJAY DX는 스마트 팩토리 전문 기업으로<span class="br_mobile"></span>
				고객사와 미래를 함께 만들어 나갑니다.
			</p>
		</div>
		<div class="main_con04">
			<div class="logosWrapper">
				<ul class="main_con04_logos" id="roller1">
					<li><img :src="require('@/assets/image/main_con04-1.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-2.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-3.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-4.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-5.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-6.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-7.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-8.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-9.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-10.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-11.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-12.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-13.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-14.png')" /></li>
					<li><img :src="require('@/assets/image/main_con04-15.png')" /></li>
				</ul>
			</div>
		</div>
		<!-- <div class="main_con04_dot">
			<ul>
				<li><img :src="require('@/assets/image/main_con04_slide.png')" /></li>
				<li><img :src="require('@/assets/image/main_con04_slide2.png')" /></li>
				<li><img :src="require('@/assets/image/main_con04_slide2.png')" /></li>
			</ul>
		</div> -->
	</div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
	const list = document.querySelector('.main_con04_logos');
	const clone = list.cloneNode(true);
	clone.id = 'roller2';
	document.querySelector('.logosWrapper').appendChild(clone);

	const roller1 = document.querySelector('#roller1');
	const roller2 = document.querySelector('#roller2');

	roller1.style.left = '0px';
	roller2.style.left = `100%`;
});
</script>

<style>
#main_con04_warp {
	width: 100%;
	height: 600px;
	background: url('/public/image/main_con04_bg.png') center top;
	background-size: cover;
}

.main_con04 {
	width: 100%;
	margin: 0 auto;
	padding-top: 60px;
	overflow: hidden;
}

.main_con04_logos {
	width: 200%;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.logosWrapper {
	display: flex;
	overflow: hidden;
	width: 200%;
}

#roller1 {
	display: flex;
	animation: rollingleft 25s linear infinite;
}

#roller2 {
	display: flex;
	animation: rollingleft 25s linear infinite;
}

@keyframes rollingleft {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-100%);
	}
}

.main_con04 ul li {
	width: 265px;
	margin: 7px 7px;
}

.main_con04_logos img {
	width: 265px;
	height: auto;
}

.main_con04_dot {
	clear: both;
	width: 400px;
	margin: 0 auto;
	padding-top: 30px;
}

.main_con04_dot ul li {
	float: left;
	margin: 0 9px;
}

.main_con04_title {
	width: 100%;
	margin: 0 auto;
	text-align: center;
	padding-top: 100px;
}

.main_con04_text01 {
	font-size: 20px;
	font-weight: bold;
}

.main_con04_text02 {
	font-size: 50px;
	font-weight: bold;
	line-height: 62px;
	padding-top: 30px;
}

.main_con04_text03 {
	font-size: 22px;
	line-height: 34px;
	color: #7d7d7d;
	padding-top: 30px;
}

@media (max-width: 1400px) and (min-width: 1024px) {
	#main_con04_warp {
		width: 100%;
		height: 740px;
	}

	.main_con04 {
		padding-top: 40px;
	}

	.main_con04 ul li {
		width: 220px;
		margin: 7px 7px;
	}

	.main_con04 ul li img {
		width: 100%;
	}

	.main_con04_dot {
		clear: both;
		width: 340px;
		margin: 0 auto;
		padding-top: 30px;
	}

	.main_con04_dot ul li {
		width: 33.333%;
		margin: 0 0px;
	}

	.main_con04_dot ul li img {
		width: 80%;
	}

	.main_con04_title {
		width: 1024px;
		margin: 0 auto;
		text-align: center;
		padding-top: 70px;
	}

	.main_con04_text01 {
		font-size: 20px;
		font-weight: bold;
	}

	.main_con04_text02 {
		font-size: 40px;
		font-weight: bold;
		line-height: 62px;
		padding-top: 10px;
	}

	.main_con04_text03 {
		font-size: 20px;
		line-height: 32px;
		color: #7d7d7d;
		padding-top: 50px;
	}
}

@media (max-width: 1024px) and (min-width: 768px) {
	#main_con04_warp {
		width: 100%;
		height: 450px;
	}

	.main_con04 {
		padding-top: 30px;
	}

	.main_con04 ul li {
		width: 200px;
		margin: 2px 2px;
	}

	.main_con04 ul li img {
		width: 100%;
	}

	.main_con04_dot {
		clear: both;
		width: 240px;
		margin: 0 auto;
		padding-top: 30px;
	}

	.main_con04_dot ul li {
		float: left;
		width: 33.333%;
		margin: 0 0px;
	}

	.main_con04_dot ul li img {
		width: 80%;
	}

	.main_con04_title {
		width: 768px;
		margin: 0 auto;
		text-align: center;
		padding-top: 40px;
	}

	.main_con04_text01 {
		font-size: 20px;
		font-weight: bold;
	}

	.main_con04_text02 {
		font-size: 30px;
		font-weight: bold;
		line-height: 42px;
		padding-top: 55px;
	}

	.main_con04_text03 {
		font-size: 18px;
		line-height: 28px;
		color: #7d7d7d;
		padding-top: 20px;
	}
}

@media screen and (max-width: 768px) {
	#main_con04_warp {
		width: 100%;
		height: 400px;
	}

	.main_con04 {
		padding-top: 20px;
	}

	.main_con04_logos {
		width: 100%;
		/* max-width: 500px; */
		margin: 0 auto;
		/* display: flex; */
	}

	.main_con04 ul li {
		width: 18%;
		margin: 2px 2px;
	}

	.main_con04 ul li img {
		width: 100%;
	}

	.main_con04_dot {
		clear: both;
		width: 140px;
		margin: 0 auto;
		padding-top: 10px;
	}

	.main_con04_dot ul li {
		float: left;
		width: 33.333%;
		margin: 0 0px;
	}

	.main_con04_dot ul li img {
		width: 80%;
	}

	.main_con04_title {
		width: 100%;
		margin: 0 auto;
		text-align: center;
		padding-top: 30px;
	}

	.main_con04_text01 {
		font-size: 12px;
		font-weight: bold;
	}

	.main_con04_text02 {
		font-size: 18px;
		font-weight: bold;
		line-height: 16px;
		padding-top: 10px;
	}

	.main_con04_text03 {
		font-size: 12px;
		line-height: 16px;
		color: #7d7d7d;
		padding-top: 10px;
	}
}
</style>
