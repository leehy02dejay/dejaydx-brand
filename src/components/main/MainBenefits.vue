<template>
	<div class="benefits-numbers-wrapper">
		<CountUp
			:start-val="0"
			:end-val="30"
			:duration="2"
			class="benefit-numbers"
			v-if="isCountVisible"
		></CountUp>
		<CountUp
			:end-val="43.5"
			:decimalPlaces="1"
			:duration="3"
			class="benefit-numbers"
			v-if="isCountVisible"
		></CountUp>
		<CountUp
			:end-val="7.7"
			:decimalPlaces="1"
			:duration="1"
			class="benefit-numbers"
			v-if="isCountVisible"
		></CountUp>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import CountUp from 'vue-countup-v3';

const scrollTop = ref(0);
const isCountVisible = ref(false);

function handleScroll() {
	scrollTop.value = document.documentElement.scrollTop;

	if (scrollTop.value > 1158) {
		isCountVisible.value = true;
	}
}

window.addEventListener('scroll', handleScroll, { passive: true });
</script>

<style>
.benefits-numbers-wrapper {
	display: flex;
	justify-content: center;
	min-height: 100%;
}

.benefit-numbers {
	font-weight: bold;
	font-size: 45px;
	text-align: center;
	margin: 20px;
}
</style>
