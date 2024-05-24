import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutUsView from '@/views/AboutUsView.vue';
import NotFound from '@/layout/NotFound.vue';
import UseCaseView from '@/views/UseCaseView.vue';
import SmartFactoryView from '@/views/SmartFactoryView.vue';
import UseCaseEMSDetail from '@/components/menus/useCase/UseCaseEMSDetail.vue';
import UseCaseNextMESDetail from '@/components/menus/useCase/UseCaseNextMESDetail.vue';
import UseCaseMESDetail from '@/components/menus/useCase/UseCaseMESDetail.vue';
import UseCaseMMESDetail from '@/components/menus/useCase/UseCaseM-MESDetail.vue';
import UseCaseDetailHome from '@/components/menus/useCase/UseCaseDetailHome.vue';
import ContactView from '@/views/ContactView.vue';
import UseCaseMCADetail from '@/components/menus/useCase/UseCaseMCADetail.vue';

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
			{
				path: 'nextmes',
				name: 'UseCaseNextMESDetail',
				component: UseCaseNextMESDetail,
			},
			{
				path: 'mes',
				name: 'UseCaseMESDetail',
				component: UseCaseMESDetail,
			},

			{
				path: 'mmes',
				name: 'UseCaseM-MESDetail',
				component: UseCaseMMESDetail,
			},

			{
				path: 'mca',
				name: 'UseCaseMCADetail',
				component: UseCaseMCADetail,
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
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		return { top: 0 };
	},
});

export default router;
