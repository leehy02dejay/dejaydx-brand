<template>
	<div>
		<QuickButton></QuickButton>
		<AppMobileHeader></AppMobileHeader>
		<div class="header" :class="{ roll: isScrolled }">
			<div class="main_top">
				<div class="logo">
					<a href="/"><img src="/image/logo.png" /></a>
				</div>
				<div class="menu">
					<ul>
						<li><a href="/aboutUs">ABOUT US</a></li>
						<li><a href="/smartFactory">SMART FACTORY</a></li>
						<li><a href="/useCase">USE CASE</a></li>
						<li><a href="/contact">CONTACT</a></li>
					</ul>
				</div>
				<div class="allmenu_btn" @click="handleOpenMenu">
					<img src="/image/menu_btn.png" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import QuickButton from '@/components/atoms/QuickButton.vue';
import AppMobileHeader from './AppMobileHeader.vue';
import { ref, onMounted, onUnmounted, defineEmits } from 'vue';

const emit = defineEmits(['open']);

const isScrolled = ref(false);

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
	const scrollY = window.scrollY;
	isScrolled.value = scrollY > 0;
}

function handleOpenMenu() {
	emit('open');
}
</script>

<style>
.header {
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1000000000;
	height: 85px;
	line-height: 48px;
	-webkit-transition: height 0.3s;
	-moz-transition: height 0.3s;
	transition: height 0.3s;
}
.header a {
	color: #000;
}

.header.roll {
	height: 85px;
	line-height: 48px;
	background: #fff;
	border-bottom: 1px solid #eaeaea;
}

.header.roll a {
	color: #000;
}
.header .navi {
	width: 100%;
	margin: 0 auto;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}

.header.roll .navi {
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}

.header h1 {
	float: left;
}

.header .roll .navi ul li a {
	height: 85px;
}

.header .logo a img {
	filter: grayscale(100%) invert(100%) brightness(200%);
	width: 160px;
}
.header.roll .logo a img {
	filter: none;
	width: 160px;
}

.header .allmenu_btn img {
	cursor: pointer;
	filter: grayscale(100%) invert(100%) brightness(200%);
}
.header.roll .allmenu_btn img {
	filter: none;
	cursor: pointer;
}

.main_top {
	/* padding-top: 10px; */
	display: flex;
	margin: 0 auto;
	flex-direction: row;
	justify-content: space-around;
	width: 1400px;
}

.logo {
	padding-top: 15px;
	width: 214px;
}

.menu {
	padding-top: 20px;
	padding-left: 100px;
	min-width: 980px;
}

.menu ul li {
	font-family: 'GmarketSansMedium', dotum, sans-serif;
	font-size: 17px;
	font-weight: bold;
	color: #3d4c2a;
	float: left;
}

.menu ul li a {
	margin-right: 90px;
	color: #fff;
}
.menu ul li a:hover {
	color: #24d2dc;
}

.allmenu_btn {
	padding-top: 15px;
}

@media (max-width: 1400px) and (min-width: 1024px) {
	.logo a img {
		width: 150px;
	}
	.menu ul li {
		font-size: 0.9rem;
	}

	.menu ul li a {
		margin-right: 35px;
		color: #fff;
	}
}

@media (max-width: 1024px) and (min-width: 768px) {
	.logo a img {
		width: 120px;
	}
	.menu ul li {
		font-size: 0.7em;
	}

	.menu ul li a {
		margin-right: 30px;
		color: #fff;
	}
}

@media screen and (max-width: 768px) {
	.header {
		display: none;
	}
}
</style>
