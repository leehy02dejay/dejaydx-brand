<template>
	<div class="contact_container">
		<ContactForm></ContactForm>
		<AboutMoreBanner></AboutMoreBanner>
	</div>
</template>

<script setup>
import ContactForm from '@/components/menus/ContactForm.vue';
import AboutMoreBanner from '@/components/menus/about/AboutMoreBanner.vue';
</script>

<style>
.contact_container {
	display: flex;
	flex-direction: column;
}
</style>
