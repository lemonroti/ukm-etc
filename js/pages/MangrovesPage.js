const { onMounted, nextTick } = Vue;

const sectionLinks = [
  ['Top', 'top'],
  ['Mangroves', 'meaning'],
  ['Value', 'value'],
  ['Health', 'health'],
  ['Stats', 'stats'],
  ['Malaysia', 'malaysia'],
  ['Threats', 'threats'],
  ['Conservation', 'conservation'],
  ['Research', 'research'],
];

const marqueeImages = [
  {
    src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85',
    alt: 'Dense mangrove forest reflected in calm water',
  },
  {
    src: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85',
    alt: 'Tropical forest roots and wetland vegetation',
  },
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85',
    alt: 'Aerial coastal landscape with water and vegetation',
  },
  {
    src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=900&q=85',
    alt: 'Wildlife resting in dense green habitat',
  },
  {
    src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85',
    alt: 'Calm blue-green water beside a natural landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85',
    alt: 'Rich green vegetation representing coastal biodiversity',
  },
];

const valueItems = [
  { icon: 'shield', title: 'Coastal Protection', text: 'Mangrove roots help reduce wave energy and support shorelines exposed to storms and erosion.' },
  { icon: 'cloud-sun', title: 'Climate Resilience', text: 'Healthy mangrove systems contribute to climate adaptation while storing carbon in biomass and sediments.' },
  { icon: 'fish', title: 'Biodiversity', text: 'Mangrove habitats support fish, birds, invertebrates and many other species across connected coastal ecosystems.' },
  { icon: 'users', title: 'Communities', text: 'Coastal communities depend on mangroves for livelihoods, food security, cultural value and protection.' },
];

const threats = [
  'Coastal development and land conversion',
  'Pollution and declining water quality',
  'Unsustainable resource use',
  'Sea-level rise and changing climate conditions',
  'Fragmentation and habitat degradation',
];

const stats = [
  ['3–5×', 'Illustrative prototype figure for the relative carbon value often associated with mangrove-rich coastal systems.'],
  ['2026–2029', 'Research project period for Mangrove Conservation for Planetary Health.'],
  ['4', 'Connected dimensions highlighted by the project: environment, climate, human health and community well-being.'],
];

export const MangrovesPage = {
  setup() {
    const scrollToSection = (id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    onMounted(() => nextTick(() => window.lucide?.createIcons()));

    return { sectionLinks, marqueeImages, valueItems, threats, stats, scrollToSection };
  },
  template: `
    <main class="mangroves-story" id="top">
      <nav class="mangroves-section-nav" aria-label="Mangroves page sections">
        <div class="mangroves-section-nav-inner">
          <button
            v-for="link in sectionLinks"
            :key="link[1]"
            type="button"
            class="mangroves-section-link"
            @click="scrollToSection(link[1])"
          >{{ link[0] }}</button>
        </div>
      </nav>

      <section class="mangroves-editorial-hero" aria-labelledby="mangroves-title">
        <div class="mangroves-hero-copy">
          <p class="mangroves-kicker">Living coastal infrastructure</p>
          <h1 id="mangroves-title">The superpower of<br>mangroves</h1>
          <p class="mangroves-hero-intro">Mangroves sit at the meeting point of land, ocean, climate and communities — making them a powerful lens for understanding planetary health.</p>
        </div>

        <div class="mangrove-image-marquee" aria-label="Mangrove and coastal ecosystem image gallery">
          <div class="mangrove-image-track">
            <figure v-for="(image, index) in marqueeImages" :key="'a-'+index" class="mangrove-image-card">
              <img :src="image.src" :alt="image.alt">
            </figure>
            <figure v-for="(image, index) in marqueeImages" :key="'b-'+index" class="mangrove-image-card" aria-hidden="true">
              <img :src="image.src" alt="">
            </figure>
          </div>
        </div>
      </section>

      <section id="meaning" class="mangroves-story-section mangroves-story-section--split">
        <div>
          <p class="mangroves-eyebrow">Mangroves</p>
          <h2>What are mangroves?</h2>
        </div>
        <div class="mangroves-body-copy">
          <p>Mangroves are salt-tolerant trees and shrubs adapted to life along tropical and subtropical coastlines. Their root systems occupy a changing zone between land and sea, creating habitat while helping stabilize shorelines.</p>
          <p>For this prototype, the page introduces mangroves as more than a single ecosystem type: they are part of a connected system linking biodiversity, climate resilience, public health, livelihoods and community well-being.</p>
        </div>
      </section>

      <section id="value" class="mangroves-story-section mangroves-value-section">
        <div class="mangroves-section-heading">
          <p class="mangroves-eyebrow">Why they matter</p>
          <h2>One ecosystem. Many forms of value.</h2>
          <p>Mangroves create benefits across ecological, climatic and social systems at the same time.</p>
        </div>
        <div class="mangroves-value-grid">
          <article v-for="item in valueItems" :key="item.title" class="mangroves-value-card">
            <span class="mangroves-value-icon" aria-hidden="true"><i :data-lucide="item.icon"></i></span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section id="health" class="mangroves-health-band">
        <div class="mangroves-health-media">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85" alt="Coastline and ocean representing connected planetary systems">
        </div>
        <div class="mangroves-health-copy">
          <p class="mangroves-eyebrow mangroves-eyebrow--light">Planetary health</p>
          <h2>Healthy coasts can support healthier futures.</h2>
          <p>The UKM-led project investigates how mangrove conservation contributes to environmental sustainability, climate resilience, human health and community well-being.</p>
          <div class="mangroves-health-tags" aria-label="Project focus areas">
            <span>Environmental Sustainability</span>
            <span>Climate Resilience</span>
            <span>Human Health</span>
            <span>Community Well-being</span>
          </div>
        </div>
      </section>

      <section id="stats" class="mangroves-story-section mangroves-stats-section">
        <div class="mangroves-section-heading">
          <p class="mangroves-eyebrow">Mangroves in numbers</p>
          <h2>Big numbers create a quick sense of scale.</h2>
          <p>These prototype figures demonstrate how research statistics could be presented once validated project content is available.</p>
        </div>
        <div class="mangroves-stats-grid">
          <article v-for="stat in stats" :key="stat[0]" class="mangroves-stat">
            <strong>{{ stat[0] }}</strong>
            <p>{{ stat[1] }}</p>
          </article>
        </div>
        <p class="mangroves-placeholder-note">Prototype note: illustrative figures and explanatory copy must be replaced with verified research data before production.</p>
      </section>

      <section id="malaysia" class="mangroves-malaysia-section">
        <div class="mangroves-malaysia-copy">
          <p class="mangroves-eyebrow">Malaysia</p>
          <h2>A national landscape with global relevance.</h2>
          <p>Malaysia's extensive coastlines and mangrove landscapes create an important context for research connecting ecosystems, climate adaptation, human health and community resilience.</p>
          <p>This area can later hold a study-site map, field locations or project-specific datasets once the research team confirms the final content.</p>
        </div>
        <div class="mangroves-map-placeholder" role="img" aria-label="Placeholder for Malaysia study-site map">
          <span class="mangroves-map-pin" aria-hidden="true"><i data-lucide="map-pin"></i></span>
          <strong>Malaysia study landscape</strong>
          <small>Interactive map / study-site visual placeholder</small>
        </div>
      </section>

      <section id="threats" class="mangroves-story-section mangroves-threat-section">
        <div class="mangroves-section-heading">
          <p class="mangroves-eyebrow">Challenges</p>
          <h2>Mangroves are resilient — but not invulnerable.</h2>
        </div>
        <ol class="mangroves-threat-list">
          <li v-for="(threat, index) in threats" :key="threat">
            <span>0{{ index + 1 }}</span>
            <strong>{{ threat }}</strong>
          </li>
        </ol>
      </section>

      <section id="conservation" class="mangroves-conservation-section">
        <div class="mangroves-conservation-copy">
          <p class="mangroves-eyebrow mangroves-eyebrow--light">Conservation & restoration</p>
          <h2>Protecting mangroves means protecting connected outcomes.</h2>
          <p>Effective conservation requires ecological evidence, community knowledge, long-term monitoring and policies that recognize how environmental change affects people as well as habitats.</p>
        </div>
        <div class="mangroves-conservation-visual">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85" alt="Lush forest landscape representing conservation and restoration">
        </div>
      </section>

      <section id="research" class="mangroves-research-cta">
        <p class="mangroves-eyebrow">From context to action</p>
        <h2>See how the project turns these connections into research.</h2>
        <p>The project's work packages explore the evidence, activities and outcomes behind mangrove conservation for planetary health.</p>
        <router-link to="/research" class="mangroves-research-button">Explore the Research <i data-lucide="arrow-right"></i></router-link>
      </section>
    </main>
  `,
};
