<template>
	<div>
		<QuickButton></QuickButton>
		<div class="header">
			<div class="main_top">
				<div class="logo">
					<a href="/"><img src="../assets/image/logo.png" /></a>
				</div>
				<div class="menu">
					<ul>
						<li><a href="/">ABOUT US</a></li>
						<li><a href="/">SMART FACTORY</a></li>
						<li><a href="/">USE CASE</a></li>
						<li><a href="/">CONTACT</a></li>
					</ul>
				</div>
				<div class="allmenu_btn">
					<a href="/"><img src="../assets/image/menu_btn.png" /></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import QuickButton from '@/components/atoms/QuickButton.vue';
</script>

<style>
.header {
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1000000000;
	height: 110px;
	line-height: 55px;
	-webkit-transition: height 0.3s;
	-moz-transition: height 0.3s;
	transition: height 0.3s;
}
.header a {
	color: #000;
}

.header.roll {
	height: 110px;
	line-height: 55px;
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
}
.header.roll .logo a img {
	filter: none;
}

.header .allmenu_btn a img {
	filter: grayscale(100%) invert(100%) brightness(200%);
}
.header.roll .allmenu_btn a img {
	filter: none;
}

.main_top {
	width: 1400px;
	height: 80px;
	margin: 0 auto;
	padding-top: 20px;
}

.logo {
	width: 214px;
	float: left;
	padding-top: 5px;
}

.menu {
	width: 900px;
	float: left;
	padding-top: 10px;
	margin-left: 100px;
}

.menu ul li {
	font-family: 'GmarketSansMedium', dotum, sans-serif;
	font-size: 17px;
	font-weight: bold;
	color: #3d4c2a;
	float: left;
	width: 25%;
	text-align: center;
}

.menu ul li a {
	color: #fff;
}
.menu ul li a:hover {
	color: #24d2dc;
}

.allmenu_btn {
	float: right;
	padding-top: 10px;
}
</style>
