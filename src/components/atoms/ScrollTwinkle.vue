<template>
	<div class="scroll-line-container">
		<ul class="scroll-down-ui">
			<li class="scroll-line"></li>
			<li class="scroll-down-text">
				<div>Scroll</div>
				<div>down</div>
			</li>
		</ul>
		<div></div>
	</div>
</template>

<script setup></script>

<style>
.scroll-line-container {
	color: white;
	position: absolute;
	left: 5%;
	bottom: 5%;
	display: flex;
	flex-direction: column;
	z-index: 10;
	overflow-y: hidden;
	width: 200px;
}

.scroll-down-ui {
	width: 100px;
	font-weight: bold;
	font-size: 15px;
	margin-bottom: 20px;
	display: flex;
}

.scroll-down-text {
	margin-top: 5px;
}

.scroll-line {
	position: relative;
	padding-right: 10px;
	height: 45px;
	border-left: 2px solid rgba(255, 255, 255, 0.2);
}

.scroll-line::before {
	content: '';
	position: absolute;
	left: -2px;
	top: 0;
	bottom: 0;
	width: 2px; /* 테두리 두께 */
	height: 20px;

	background: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 0),
		rgba(255, 255, 255, 1),
		rgba(255, 255, 255, 0)
	);
	background-size: 2px 100%;
	animation:
		flow 2s infinite ease-in-out,
		shimmer 1.5s infinite linear;
}

@keyframes flow {
	0% {
		top: 0;
	}
	100% {
		top: 55%;
	}
}

@keyframes shimmer {
	0% {
		background-position: top;
	}
	100% {
		background-position: bottom;
	}
}
</style>
