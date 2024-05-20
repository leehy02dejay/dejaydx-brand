<template>
	<div id="all_menu_warp">
		<div class="all_menu">
			<div class="all_menu_top">
				<div class="all_menu_logo">
					<RouterLink to="/"
						><img :src="require('@/assets/image/logo.png')"
					/></RouterLink>
				</div>
				<div class="all_menu_close">
					<img
						:src="require('@/assets/image/all_menu_close.png')"
						@click="clickedCloseMenu"
					/>
				</div>
			</div>
			<div class="all_menu_bottom">
				<div class="all_menu_data">
					<div class="all_menu_text01">
						회사소개서 &nbsp;<RouterLink to="/"
							><img :src="require('@/assets/image/all_menu_download.png')"
						/></RouterLink>
					</div>

					<div class="all_menu_data01">
						<p class="all_menu_text02">Address</p>
						<p class="all_menu_text03">
							서울시 구로구 디지털로 300 , 12층 (1202호)
						</p>

						<p class="all_menu_text02">Tel</p>
						<p class="all_menu_text03">02-1234-1234</p>

						<p class="all_menu_text02">E-mail</p>
						<p class="all_menu_text03">contact@dejayalpha.co.kr</p>
					</div>
				</div>
				<div class="all_menu_list">
					<ul>
						<li><RouterLink to="/aboutUs">ABOUT US</RouterLink></li>
						<li><RouterLink to="/smartFactory">SMART FACTORY</RouterLink></li>
						<li><RouterLink to="/useCase">USE CASE</RouterLink></li>
						<li><RouterLink to="/contact">CONTACT</RouterLink></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['close']);

function clickedCloseMenu() {
	emit('close');
}
</script>

<style>
#all_menu_warp {
	position: fixed;
	width: 100%;
	height: 100vh;
	background: #000;
	z-index: 9999999999;
	overflow: hidden;
}

.all_menu {
	width: 1400px;
	margin: 0 auto;
	padding-top: 40px;
}

.all_menu_top {
	width: 100%;
}

.all_menu_logo {
	float: left;
}

.all_menu_close {
	float: right;
}

.all_menu_close img {
	cursor: pointer;
}

.all_menu_bottom {
	clear: both;
	width: 100%;
}

.all_menu_data {
	width: 45%;
	float: left;
}

.all_menu_list {
	width: 55%;
	float: left;
}

.all_menu_list ul li {
	font-family: 'GmarketSansMedium', dotum, sans-serif;
	font-size: 70px;
	font-weight: bold;
	color: #fff;
	padding-top: 40px;
}

.all_menu_list ul li:nth-child(1) {
	padding-top: 0px;
}

.all_menu_list ul li a {
	color: #fff;
}

.all_menu_list ul li a:hover {
	color: #24d2dc;
}

.all_menu_data01 {
	padding-top: 240px;
}

.all_menu_text01 {
	font-size: 22px;
	color: #fff;
	padding-top: 20px;
}

.all_menu_text02 {
	font-size: 17px;
	color: #656565;
	padding-top: 20px;
}

.all_menu_text03 {
	font-size: 17px;
	color: #fff;
	padding-top: 10px;
}

.all_menu_logo a img {
	filter: grayscale(100%) invert(100%) brightness(200%);
}
</style>
