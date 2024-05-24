<template>
	<div class="contact_container">
		<ContactForm></ContactForm>
		<!-- <ContactMoreBanner></ContactMoreBanner> -->
	</div>
</template>

<script setup>
import ContactForm from '@/components/menus/ContactForm.vue';
</script>

<style>
.contact_container {
	display: flex;
	flex-direction: column;
	padding: 50px;
}
</style>
