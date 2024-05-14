import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutUsView from '@/views/AboutUsView.vue';
import NotFound from '@/layout/NotFound.vue';
import UseCaseView from '@/views/UseCaseView.vue';
import SmartFactoryView from '@/views/SmartFactoryView.vue';

const routes = [
	{
		path: '/',
		component: HomeView,
	},
	{
		path: '/aboutUs',
		component: AboutUsView,
	},
	{
		path: '/smartFactory',
		component: SmartFactoryView,
	},
	{
		path: '/useCase',
		component: UseCaseView,
	},
	{
		path: '/contact',
		component: AboutUsView,
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
