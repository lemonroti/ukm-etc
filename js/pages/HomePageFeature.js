import { workPackages, mediaItems, publications } from '../mock-data.js';
import { CollaboratorMarquee } from '../components/CollaboratorMarquee.js';

const SectionHeading = {
  props: ['eyebrow', 'title', 'description'],
  template: `<div class="max-w-3xl"><p class="text-xs font-bold uppercase tracking-[.2em] text-coastal">{{eyebrow}}</p><h2 class="mt-3 text-3xl font-bold text-ink md:text-4xl">{{title}}</h2><p v-if="description" class="mt-4 text-muted">{{description}}</p></div>`,
};

const WorkCard = {
  props: ['item'],
  template: `<router-link :to="'/research/'+item.slug" class="group rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><span class="text-sm font-bold text-coastal">{{item.number}}</span><h3 class="mt-3 text-xl font-bold text-ink">{{item.title}}</h3><p class="mt-3 text-sm text-muted">{{item.summary}}</p><span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mangrove">Explore work package <i data-lucide="arrow-right" class="h-4 w-4"></i></span></router-link>`,
};

const MediaCard = {
  props: ['item'],
  template: `<router-link :to="'/media/'+item.slug" class="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm"><img :src="item.image" :alt="item.title" class="h-52 w-full object-cover transition duration-500 group-hover:scale-105"><div class="p-5"><div class="flex gap-3 text-xs font-semibold text-coastal"><span>{{item.category}}</span><span>{{item.date}}</span></div><h3 class="mt-3 text-xl font-bold text-ink">{{item.title}}</h3><p class="mt-3 text-sm text-muted">{{item.summary}}</p></div></router-link>`,
};

const PubCard = {
  props: ['item'],
  template: `<router-link :to="'/publications/'+item.slug" class="block rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><span class="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-coastal">{{item.category}}</span><h3 class="mt-4 text-xl font-bold text-ink">{{item.title}}</h3><p class="mt-3 text-sm text-muted">{{item.authors}} · {{item.year}}</p></router-link>`,
};

export const HomePageFeature = {
  components: { SectionHeading, WorkCard, MediaCard, PubCard, CollaboratorMarquee },
  setup() {
    return { workPackages, mediaItems, publications };
  },
  template: `
    <main>
      <section class="relative min-h-[82vh] overflow-hidden bg-ink text-white">
        <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=85" alt="Mangrove forest" class="absolute inset-0 h-full w-full object-cover opacity-45">
        <div class="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent"></div>
        <div class="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 py-20">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[.22em] text-sand">International Research Project · 2026–2029</p>
            <h1 class="mt-5 text-5xl font-bold leading-[1.05] md:text-7xl">Mangrove Conservation for Planetary Health</h1>
            <p class="mt-6 max-w-2xl text-lg text-white/80">Connecting healthy coastal ecosystems with climate resilience, community well-being and human health through interdisciplinary research and collaboration.</p>
            <div class="mt-8 flex flex-wrap gap-4">
              <router-link to="/research" class="rounded-full bg-sand px-6 py-3 font-semibold text-ink">Explore the Research</router-link>
              <router-link to="/about" class="rounded-full border border-white/40 px-6 py-3 font-semibold">About the Project</router-link>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-5 py-20">
        <div class="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Purpose" title="Conserving mangroves means protecting connected systems" description="The project examines mangroves not as isolated habitats, but as living infrastructure that supports biodiversity, climate stability, livelihoods and public health." />
            <div class="mt-8 grid grid-cols-2 gap-3"><span v-for="x in ['Biodiversity','Climate Resilience','Community Well-being','Human Health']" :key="x" class="rounded-xl bg-mist p-4 text-sm font-semibold text-mangrove">{{x}}</span></div>
          </div>
          <img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=80" alt="Green coastal ecosystem" class="h-full min-h-80 w-full rounded-3xl object-cover">
        </div>
      </section>

      <section class="bg-mist py-20"><div class="mx-auto max-w-7xl px-5"><SectionHeading eyebrow="Research Framework" title="Five connected work packages" description="Each work package addresses a major part of the programme while contributing to shared outcomes." /><div class="mt-10 grid gap-5 md:grid-cols-3"><WorkCard v-for="w in workPackages.slice(0,3)" :key="w.slug" :item="w" /></div></div></section>
      <section class="mx-auto max-w-7xl px-5 py-20"><SectionHeading eyebrow="Latest" title="Project updates" /><div class="mt-10 grid gap-6 md:grid-cols-3"><MediaCard v-for="m in mediaItems.slice(0,3)" :key="m.slug" :item="m" /></div></section>
      <section class="bg-cream py-20"><div class="mx-auto max-w-7xl px-5"><SectionHeading eyebrow="Knowledge" title="Featured publications and resources" /><div class="mt-10 grid gap-5 md:grid-cols-3"><PubCard v-for="p in publications.slice(0,3)" :key="p.slug" :item="p" /></div></div></section>
      <CollaboratorMarquee />
      <section class="bg-coastal px-5 py-16 text-white"><div class="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><h2 class="text-3xl font-bold">Interested in collaboration?</h2><p class="mt-2 text-white/75">Connect with the project team and explore shared research opportunities.</p></div><router-link to="/contact" class="rounded-full bg-sand px-6 py-3 font-semibold text-ink">Contact the Project</router-link></div></section>
    </main>
  `,
};
