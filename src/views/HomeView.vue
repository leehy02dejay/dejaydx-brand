<template>
	<div class="mainHome">
		<MainBanner bannerImage="/image/main_visual01.jpg"></MainBanner>
		<ProcessOrder></ProcessOrder>
		<MainBenefits></MainBenefits>
		<MainUseCase></MainUseCase>
		<MainClients></MainClients>
	</div>
</template>

<script setup>
import MainBanner from '@/components/main/MainBanner.vue';
import MainBenefits from '@/components/main/MainBenefits.vue';
import MainClients from '@/components/main/MainClients.vue';
import MainUseCase from '@/components/main/MainUseCase.vue';
import ProcessOrder from '@/components/main/process/ProcessOrder.vue';
</script>

<style scoped>
.mainHome {
	width: 100%;
	height: 100%;
}
</style>
