import { ResearchPage, WorkPackageDetailPage, MediaPage, MediaDetailPage, PublicationsPage, PublicationDetailPage, FaqPage, ContactPage } from './components.js';
import { HomePageFeature } from './pages/HomePageFeature.js';
import { AboutPageFeature } from './pages/AboutPageFeature.js';
import { MangrovesPage } from './pages/MangrovesPage.js';

const routes = [
  { path: '/', component: HomePageFeature, meta: { title: 'Home' } },
  { path: '/about', component: AboutPageFeature, meta: { title: 'About' } },
  { path: '/mangroves', component: MangrovesPage, meta: { title: 'Mangroves' } },
  { path: '/research', component: ResearchPage, meta: { title: 'Research' } },
  { path: '/research/:slug', component: WorkPackageDetailPage, meta: { title: 'Work Package' } },
  { path: '/media', component: MediaPage, meta: { title: 'Media' } },
  { path: '/media/:slug', component: MediaDetailPage, meta: { title: 'Project Update' } },
  { path: '/publications', component: PublicationsPage, meta: { title: 'Publications & Resources' } },
  { path: '/publications/:slug', component: PublicationDetailPage, meta: { title: 'Publication' } },
  { path: '/faq', component: FaqPage, meta: { title: 'FAQ' } },
  { path: '/contact', component: ContactPage, meta: { title: 'Contact Us' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.afterEach((to) => {
  document.title = `${to.meta.title ?? 'Website'} | UKM Mangrove Project`;
  Vue.nextTick(() => window.lucide?.createIcons());
});
