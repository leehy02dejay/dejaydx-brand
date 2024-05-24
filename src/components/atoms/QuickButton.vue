<template>
	<div class="quick_btn">
		<RouterLink to="/contact"
			><img
				class="quick_btn_img"
				:src="require('@/assets/image/quick_btn.png')"
		/></RouterLink>
	</div>
</template>

<script setup></script>

<style>
.quick_btn {
	position: fixed;
	z-index: 9999999;
	right: 10px;
	bottom: 3%;
}

.quick_btn_img {
	width: 60px;
}
</style>
