<template>
	<div class="mainHome">
		<MainBanner></MainBanner>
		<MainUseCase></MainUseCase>
		<ProcessOrder></ProcessOrder>
		<MainBenefits></MainBenefits>
		<MainClients></MainClients>
	</div>
</template>

<script setup>
import MainBenefits from '@/components/main/MainBenefits.vue';
import MainClients from '@/components/main/MainClients.vue';
import MainUseCase from '@/components/main/MainUseCase.vue';
import MainBanner from '@/components/main/MainBanner.vue';
import ProcessOrder from '@/components/main/process/ProcessOrder.vue';
</script>

<style scoped>
.mainHome {
	width: 100%;
	height: 100%;
}
</style>
