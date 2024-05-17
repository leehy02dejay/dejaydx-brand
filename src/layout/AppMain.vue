<template>
	<main>
		<div class="main-container">
			<RouterView></RouterView>
		</div>
	</main>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style>
main {
	margin: 0;
	padding: 0;
	height: 100%;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.main-container {
	flex-grow: 1;
}
</style>
