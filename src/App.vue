<template>
	<AppHeader @open="handleOpenMenu"></AppHeader>
	<AppMenu v-if="isOpenMenu"></AppMenu>
	<AppMain></AppMain>
	<AppFooter></AppFooter>
</template>

<script setup>
import AppMenu from '@/layout/AppMenu.vue';
import AppHeader from '@/layout/AppHeader.vue';
import AppMain from '@/layout/AppMain.vue';
import AppFooter from '@/layout/AppFooter.vue';
import { ref } from 'vue';

const isOpenMenu = ref(false);

function handleOpenMenu(isClickButton) {
	isOpenMenu.value = isClickButton;
}
</script>

<style></style>
