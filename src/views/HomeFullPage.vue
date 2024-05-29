<template>
	<div class="section">
		<MainBanner bannerImage="/image/main_visual01.jpg"></MainBanner>
	</div>
	<div class="section">
		<ProcessOrder></ProcessOrder>
	</div>
</template>

<script setup>
import MainBanner from '@/components/main/MainBanner.vue';
import ProcessOrder from '@/components/main/process/ProcessOrder.vue';
</script>

<style scoped>
.mainHomeFullPage {
	width: 100%;
	height: 100%;
}
</style>
