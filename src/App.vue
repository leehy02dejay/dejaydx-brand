<template>
	<AppHeader @open="handleMenuOpen"></AppHeader>
	<AppMenu v-if="isOpenMenu" @close="handleMenuClose"></AppMenu>
	<AppMain> </AppMain>
	<AppFooter></AppFooter>
</template>

<script setup>
import AppMenu from '@/layout/AppMenu.vue';
import AppHeader from '@/layout/AppHeader.vue';
import AppMain from '@/layout/AppMain.vue';
import AppFooter from '@/layout/AppFooter.vue';
import { ref } from 'vue';

const isOpenMenu = ref(false);

function handleMenuOpen() {
	isOpenMenu.value = true;
}

function handleMenuClose() {
	isOpenMenu.value = false;
}
</script>

<style></style>
