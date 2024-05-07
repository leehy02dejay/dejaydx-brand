<template>
	<div class="mainHome">
		<MainFullPageScroll></MainFullPageScroll>
		<MainBenefits></MainBenefits>
	</div>
</template>

<script setup>
import MainFullPageScroll from '@/components/main/MainFullPageScroll.vue';
// import MainBenefits from '@/components/main/MainBenefits.vue';
</script>

<style scoped>
.mainHome {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	overflow-y: scroll;
}
</style>
