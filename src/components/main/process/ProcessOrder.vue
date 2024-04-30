<template>
	<div class="process-order-wrapper" id="section2">
		<div
			class="order-desc"
			data-aos="fade-up"
			data-aos-anchor-placement="top-center"
		>
			스마트팩토리 도입은 올바른 프로세스 분석 설계가 가장 중요합니다.
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Aos from 'aos';
const hasScrolled = ref(false);
const scrollTop = ref(0);

function handleScroll() {
	scrollTop.value = document.documentElement.scrollTop;

	if (scrollTop.value > 0) {
		if (!hasScrolled.value) {
			hasScrolled.value = true;

			window.scrollTo({
				top: window.innerHeight + 3,
				behavior: 'smooth',
			});

			setTimeout(() => {
				Aos.init({
					once: true,
					offset: 500,
				});
			}, 1000);
		}
	}
}
onMounted(() => {
	window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.order-desc {
	height: 101vh;
	background-color: cadetblue;
}
</style>
