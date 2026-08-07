const { ref } = Vue;

export const SiteHeaderFeature = {
  setup() {
    const open = ref(false);
    const links = [
      ['Home','/'],
      ['About','/about'],
      ['Mangroves','/mangroves'],
      ['Research','/research'],
      ['Media','/media'],
      ['Publications & Resources','/publications'],
      ['FAQ','/faq'],
      ['Contact Us','/contact'],
    ];
    return { open, links };
  },
  template: `
    <header class="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <router-link to="/" class="flex items-center gap-3" @click="open=false">
          <span class="grid h-11 w-11 place-items-center rounded-full bg-mangrove text-sm font-bold text-white">MPH</span>
          <span>
            <strong class="block text-sm text-ink">Mangrove Conservation</strong>
            <span class="text-xs text-muted">for Planetary Health</span>
          </span>
        </router-link>
        <nav class="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          <router-link
            v-for="l in links"
            :key="l[1]"
            :to="l[1]"
            class="text-sm font-medium text-ink transition hover:text-coastal"
          >{{l[0]}}</router-link>
        </nav>
        <button class="rounded-lg border border-line p-2 lg:hidden" @click="open=!open" :aria-expanded="open" aria-label="Toggle menu">
          <i data-lucide="menu"></i>
        </button>
      </div>
      <nav v-if="open" class="border-t border-line bg-cream px-5 py-4 lg:hidden" aria-label="Mobile navigation">
        <router-link
          v-for="l in links"
          :key="l[1]"
          :to="l[1]"
          class="block border-b border-line py-3 text-sm font-medium"
          @click="open=false"
        >{{l[0]}}</router-link>
      </nav>
    </header>
  `,
};
