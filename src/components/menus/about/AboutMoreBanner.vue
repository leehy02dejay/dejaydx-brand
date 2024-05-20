<template>
	<div>
		<div class="fot_ban_warp">
			<div class="fot_ban01">
				<RouterLink to="/smartFactory"
					><img :src="require('@/assets/image/fot_ban01.png')"
				/></RouterLink>
			</div>
			<div class="fot_ban02">
				<RouterLink to="/contactUs"
					><img :src="require('@/assets/image/fot_ban02.png')"
				/></RouterLink>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style>
.fot_ban_warp {
	width: 1400px;
	height: 360px;
	margin: 0 auto;
	padding-top: 60px;
}

.fot_ban01 {
	width: 690px;
	float: left;
}

.fot_ban02 {
	width: 690px;
	float: right;
}
</style>
