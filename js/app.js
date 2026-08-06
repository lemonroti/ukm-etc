import { router } from './router.js';
import { SiteHeader, SiteFooter, BackToTop } from './components.js';

const App = {
  components: { SiteHeader, SiteFooter, BackToTop },
  mounted() { this.$nextTick(() => window.lucide?.createIcons()); },
  updated() { this.$nextTick(() => window.lucide?.createIcons()); },
  template: `
    <div class="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <router-view />
      <SiteFooter />
      <BackToTop />
    </div>
  `
};

const app = Vue.createApp(App);
app.config.globalProperties.scrollTo = window.scrollTo.bind(window);
app.use(router);
app.mount('#app');
