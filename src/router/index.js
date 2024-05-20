import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutUsView from '@/views/AboutUsView.vue';
import NotFound from '@/layout/NotFound.vue';
import UseCaseView from '@/views/UseCaseView.vue';
import SmartFactoryView from '@/views/SmartFactoryView.vue';
import UseCaseEMSDetail from '@/components/menus/useCase/UseCaseEMSDetail.vue';
import UseCaseDetailHome from '@/components/menus/useCase/UseCaseDetailHome.vue';
import ContactView from '@/views/ContactView.vue';

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
		path: '/useCaseDetail',
		name: 'UseCaseDetailHome',
		component: UseCaseDetailHome,
		children: [
			{
				path: 'ems',
				name: 'UseCaseEMSDetail',
				component: UseCaseEMSDetail,
			},
		],
	},
	{
		path: '/contact',
		component: ContactView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
