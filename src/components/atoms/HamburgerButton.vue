<template>
	<button @click="toggleActive" :class="isActive ? 'is-active' : 'hamburger'">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
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
.hamburger {
	border: none;
	background: none;
	margin: 0;
	width: 15px;
	height: 24px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	width: 160px;
}

.line {
	width: 3px;
	background-color: #fff;
	width: 100%;
	height: 4px;
	transition: all 0.3s ease;
}

.is-active .line:nth-child(1) {
	transform: translateY(10px) rotate(45deg);
}

.is-active .line:nth-child(2) {
	opacity: 0;
}

.is-active .line:nth-child(3) {
	transform: translateY(-10px) rotate(-45deg);
}
</style>
