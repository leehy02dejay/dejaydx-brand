<template>
	<button @click="toggleActive" :class="McButton">
		<b class="line"></b>
		<b class="line"></b>
		<b class="line"></b>
	</button>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false);

const toggleActive = () => {
	isActive.value = !isActive.value;
};
</script>

<style>
.McButton {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: 2px;
	margin-top: 3px;
	width: 50px;
	height: 100px;
	cursor: pointer;

	b {
		position: absolute;
		left: 0;
		width: 50px;
		height: 100px;
		background-color: #fff;

		b:nth-child(1) {
			top: 0;
		}
		b:nth-child(2) {
			top: 50%;
		}
		b:nth-child(3) {
			top: 100%;
		}
	}
}
</style>
