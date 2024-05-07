<template>
	<full-page id="fullpage">
		<MainBanner
			:options="options"
			class="section"
			bannerImage="/image/main_visual02.jpg"
		></MainBanner>
		<ProcessOrder class="section"></ProcessOrder>
	</full-page>
</template>

<script setup>
import MainBanner from '@/components/main/MainBanner.vue';
import ProcessOrder from '@/components/main/process/ProcessOrder.vue';

const options = {
	anchors: ['firstPage', 'secondPage'],
};
</script>

<style>
#fullpage {
	height: 100%;
}
</style>
