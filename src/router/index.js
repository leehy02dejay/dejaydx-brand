import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import NotFound from '@/layout/NotFound.vue';

const routes = [
	{
		path: '/',
		component: HomeView,
	},
	{
		path: '/aboutUs',
		component: AboutView,
	},
	{
		path: '/smartFactory',
		component: AboutView,
	},
	{
		path: '/useCase',
		component: AboutView,
	},
	{
		path: '/contact',
		component: AboutView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
