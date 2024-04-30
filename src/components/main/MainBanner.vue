<template>
	<div class="banner-container" id="section1">
		<div class="scroll-ui">
			<ScrollTwinkle></ScrollTwinkle>
		</div>
	</div>
</template>

<script setup>
import ScrollTwinkle from '@/components/atoms/ScrollTwinkle.vue';
</script>

<style>
.banner-container {
	/* background: url('../../assets/image/bannerImage01.png') no-repeat; */
	background-size: cover;
	color: white;
	text-align: center;
	margin: 0;
	padding: 0;
	min-height: 100%;
	z-index: -1;
}
.scroll-ui {
	display: flex;
	justify-content: end;
	background-color: rgba(133, 133, 133, 0.6);
	min-height: 100vh;
}
</style>
