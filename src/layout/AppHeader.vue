<template>
	<div>
		<QuickButton></QuickButton>
		<AppMobileHeader @open="handleOpenMenu"></AppMobileHeader>
		<div class="header" :class="{ roll: isScrolled }">
			<div class="main_top">
				<div class="logo">
					<RouterLink to="/"
						><img :src="require('@/assets/image/logo.png')"
					/></RouterLink>
				</div>
				<div class="menu">
					<ul>
						<li>
							<RouterLink to="/aboutUs">ABOUT US</RouterLink>
						</li>
						<li>
							<RouterLink to="/smartFactory"> FACTORY</RouterLink>
						</li>
						<li>
							<RouterLink to="/useCase">USE CASE</RouterLink>
						</li>
						<li>
							<RouterLink to="/contact">CONTACT</RouterLink>
						</li>
					</ul>
				</div>
				<div class="allmenu_btn" @click="handleOpenMenu">
					<img :src="require('@/assets/image/menu_btn.png')" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import QuickButton from '@/components/atoms/QuickButton.vue';
import AppMobileHeader from './AppMobileHeader.vue';
import { ref, onMounted, onUnmounted, defineEmits, watch } from 'vue';
import { useRoute } from 'vue-router';

const emit = defineEmits(['open']);

const isScrolled = ref(false);
const route = useRoute();

onMounted(() => {
	if (route.path === '/') {
		window.addEventListener('scroll', handleScroll);
	}
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
	const scrollY = window.scrollY;
	isScrolled.value = scrollY > 0;
}

watch(
	() => route.path,
	newPath => {
		if (newPath === '/') {
			window.addEventListener('scroll', handleScroll);
			handleScroll(); // 초기화 시 스크롤 위치에 따른 isScrolled 상태 업데이트
		} else {
			window.removeEventListener('scroll', handleScroll);
			isScrolled.value = true; // 기본값 true로 설정
		}
	},
);

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
	flex-direction: row;
	justify-content: space-around;
}

.logo {
	padding-top: 15px;
	width: 214px;
}

.menu {
	padding-top: 20px;
	padding-left: 100px;
}

.menu ul li {
	font-family: 'GmarketSansMedium', dotum, sans-serif;
	font-size: 17px;
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
