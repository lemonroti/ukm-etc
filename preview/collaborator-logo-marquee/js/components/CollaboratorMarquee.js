import { collaboratorLogos, splitCollaborators } from '../data/collaborators.js';

const LogoCard = {
  props: ['item', 'duplicate'],
  template: `
    <article class="partner-logo-card" :aria-hidden="duplicate ? 'true' : undefined" :title="item.name" tabindex="0">
      <img :src="item.logo" :alt="duplicate ? '' : item.name" class="partner-logo-image">
      <span class="sr-only">{{ item.name }} — {{ item.note }}</span>
    </article>
  `,
};

const MarqueeRow = {
  components: { LogoCard },
  props: ['items', 'reverse', 'label'],
  computed: { repeatedItems() { return [...this.items, ...this.items, ...this.items, ...this.items]; } },
  template: `
    <div class="partner-marquee" :aria-label="label">
      <div class="partner-marquee-track" :class="{ 'partner-marquee-track--reverse': reverse }">
        <LogoCard v-for="(item, index) in repeatedItems" :key="item.shortName + '-' + index" :item="item" :duplicate="index >= items.length" />
      </div>
    </div>
  `,
};

export const CollaboratorMarquee = {
  components: { MarqueeRow },
  setup() {
    const [rowOne, rowTwo] = splitCollaborators(collaboratorLogos);
    return { rowOne, rowTwo };
  },
  template: `
    <section class="partner-section" aria-labelledby="research-partners-title">
      <div class="mx-auto max-w-7xl px-5">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-xs font-bold uppercase tracking-[.2em] text-coastal">Partnerships</p>
          <h2 id="research-partners-title" class="mt-3 text-3xl font-bold text-ink md:text-4xl">Our Research Partners</h2>
          <p class="mt-4 text-muted">Collaborating universities, research centres and international organisations supporting the Mangrove Conservation for Planetary Health project.</p>
        </div>
      </div>
      <div class="partner-marquee-shell mt-10">
        <MarqueeRow :items="rowOne" label="Research partners, first row" />
        <MarqueeRow :items="rowTwo" :reverse="true" label="Research partners, second row" />
      </div>
    </section>
  `,
};
