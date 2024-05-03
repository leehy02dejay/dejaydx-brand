<template>
	<div class="mainHome">
		<MainBanner bannerImage="/image/main_visual02.jpg"></MainBanner>
		<ProcessOrder></ProcessOrder>
		<MainBenefits></MainBenefits>
	</div>
</template>

<script setup>
import MainBanner from '@/components/main/MainBanner.vue';
import MainBenefits from '@/components/main/MainBenefits.vue';
import ProcessOrder from '@/components/main/process/ProcessOrder.vue';
</script>

<style scoped>
.mainHome {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
</style>
