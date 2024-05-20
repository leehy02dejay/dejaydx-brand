<template>
	<div class="quick_btn">
		<RouterLink to="/contact"
			><img :src="require('@/assets/image/quick_btn.png')"
		/></RouterLink>
	</div>
</template>

<script setup></script>

<style>
.quick_btn {
	position: fixed;
	z-index: 9999999;
	right: 20px;
	bottom: 10%;
}
</style>
