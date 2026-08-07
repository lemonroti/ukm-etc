import { router } from './router-feature.js';
import { SiteFooter, BackToTop } from './components.js';
import { SiteHeaderFeature } from './components/SiteHeaderFeature.js';

const App = {
  components: { SiteHeaderFeature, SiteFooter, BackToTop },
  mounted() { this.$nextTick(() => window.lucide?.createIcons()); },
  updated() { this.$nextTick(() => window.lucide?.createIcons()); },
  template: `<div class="min-h-screen bg-cream text-ink"><SiteHeaderFeature /><router-view /><SiteFooter /><BackToTop /></div>`,
};

const app = Vue.createApp(App);
app.config.globalProperties.scrollTo = window.scrollTo.bind(window);
app.use(router);
app.mount('#app');
