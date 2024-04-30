<template>
	<div class="scroll-line-container">
		<div class="scroll-text">
			<div>Scroll</div>
			<div>down</div>
		</div>
		<div>
			<div class="scroll-line"></div>
		</div>
	</div>
</template>

<script setup></script>

<style>
.scroll-line-container {
	margin-top: 11rem;
	color: white;
	position: relative;
	right: 25px;
	display: flex;
	flex-direction: column;
	z-index: 10;
	overflow-y: hidden;
}

.scroll-text {
	width: 100px;
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 20px;
}

.scroll-line {
	position: absolute;
	left: 50%;
	height: 100%;
	border-left: 2px solid rgba(255, 255, 255, 0.2);
}

.scroll-line::before {
	content: '';
	position: absolute;
	left: -2px;
	top: 0;
	bottom: 0;
	width: 3px; /* 테두리 두께 */
	height: 300px;
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
		top: calc(100% - 400px);
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
