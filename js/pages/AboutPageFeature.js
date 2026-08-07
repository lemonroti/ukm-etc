import { teamMembers } from '../mock-data.js';
import { CollaboratorMarquee } from '../components/CollaboratorMarquee.js';

const { onMounted, nextTick } = Vue;

const sectionLinks = [
  ['Top', 'about-top'],
  ['Story', 'story'],
  ['Vision', 'vision'],
  ['Mission', 'mission'],
  ['Approach', 'approach'],
  ['Impact', 'impact'],
  ['Team', 'team'],
  ['Partners', 'partners'],
];

const impactItems = [
  { value: '2026–2029', label: 'International research programme period' },
  { value: '5', label: 'Connected work packages across ecology, health, communities and impact' },
  { value: '4', label: 'Core dimensions: environment, climate, human health and community well-being' },
];

const principles = [
  ['Interdisciplinary', 'Connect ecological science, climate resilience, health evidence and community knowledge.'],
  ['Collaborative', 'Work with researchers, institutions, communities and policy partners across the programme.'],
  ['Action-oriented', 'Translate evidence into restoration learning, public engagement and practical policy insight.'],
];

export const AboutPageFeature = {
  components: { CollaboratorMarquee },
  setup() {
    const scrollToSection = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    onMounted(() => nextTick(() => window.lucide?.createIcons()));

    return { sectionLinks, impactItems, principles, teamMembers, scrollToSection };
  },
  template: `
    <main class="about-story" id="about-top">
      <nav class="about-section-nav" aria-label="About page sections">
        <div class="about-section-nav-inner">
          <button
            v-for="link in sectionLinks"
            :key="link[1]"
            type="button"
            class="about-section-link"
            @click="scrollToSection(link[1])"
          >{{ link[0] }}</button>
        </div>
      </nav>

      <section class="about-hero" aria-labelledby="about-title">
        <div class="about-hero-media" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1800&q=85" alt="">
        </div>
        <div class="about-hero-overlay"></div>
        <div class="about-hero-inner">
          <p class="about-kicker">About the project</p>
          <h1 id="about-title">Researching the connections between mangroves, people and planetary health.</h1>
          <div class="about-hero-meta">
            <span>Led by Universiti Kebangsaan Malaysia</span>
            <span>International Research Project · 2026–2029</span>
          </div>
        </div>
      </section>

      <section id="story" class="about-intro-section">
        <div class="about-intro-grid">
          <div>
            <p class="about-eyebrow">Our Story</p>
            <h2>From ecosystem conservation to connected human futures.</h2>
          </div>
          <div class="about-intro-copy">
            <p>Mangroves influence coastlines, biodiversity, food systems, climate resilience, livelihoods and health. This project treats those relationships as one connected research challenge rather than separate issues.</p>
            <p>By bringing researchers and collaborators together across disciplines, the programme aims to build an integrated evidence base that can guide conservation, restoration, community action and policy.</p>
          </div>
        </div>
      </section>

      <section class="about-editorial-band" aria-label="Project vision, mission and approach">
        <div class="about-editorial-inner">
          <div id="vision" class="about-statement-row">
            <div class="about-statement-label"><span>Vision</span></div>
            <div class="about-statement-copy">Thriving mangrove landscapes that support resilient communities, healthier ecosystems and a more sustainable future.</div>
          </div>

          <div id="mission" class="about-statement-row">
            <div class="about-statement-label"><span>Mission</span></div>
            <div class="about-statement-copy">Generate actionable knowledge by connecting environmental science, climate resilience, human health and community well-being through collaborative research.</div>
          </div>

          <div id="approach" class="about-statement-row about-statement-row--last">
            <div class="about-statement-label"><span>How</span></div>
            <div class="about-statement-copy">We combine field evidence, interdisciplinary methods, local knowledge and international partnerships to turn research into practical learning and impact.</div>
          </div>
        </div>
      </section>

      <section class="about-visual-break" aria-label="Mangrove landscape visual">
        <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=85" alt="Mangrove forest and coastal water representing the project's research landscape">
        <div class="about-visual-caption">
          <span>Connected systems</span>
          <strong>Nature, climate, health and communities.</strong>
        </div>
      </section>

      <section id="impact" class="about-impact-section">
        <div class="about-impact-head">
          <p class="about-eyebrow">Project Impact</p>
          <h2>Designed to turn research into shared evidence, practical learning and long-term value.</h2>
        </div>
        <div class="about-impact-grid">
          <article v-for="item in impactItems" :key="item.value" class="about-impact-item">
            <strong>{{ item.value }}</strong>
            <p>{{ item.label }}</p>
          </article>
        </div>
        <div class="about-principles-grid">
          <article v-for="(item, index) in principles" :key="item[0]" class="about-principle-card">
            <span>0{{ index + 1 }}</span>
            <h3>{{ item[0] }}</h3>
            <p>{{ item[1] }}</p>
          </article>
        </div>
      </section>

      <section id="team" class="about-team-section">
        <div class="about-team-heading">
          <div>
            <p class="about-eyebrow">People</p>
            <h2>A multidisciplinary team working across connected challenges.</h2>
          </div>
          <p>Prototype team profiles demonstrate how researchers, specialists and project leads can be presented once final project information is supplied.</p>
        </div>

        <div class="about-team-grid">
          <article v-for="member in teamMembers" :key="member.name" class="about-team-card">
            <div class="about-team-image">
              <img :src="member.image" :alt="member.name">
            </div>
            <div class="about-team-copy">
              <p>{{ member.institution }}</p>
              <h3>{{ member.name }}</h3>
              <strong>{{ member.role }}</strong>
              <span>{{ member.bio }}</span>
            </div>
          </article>
        </div>
      </section>

      <section id="partners" class="about-partners-section">
        <CollaboratorMarquee />
      </section>
    </main>
  `,
};
