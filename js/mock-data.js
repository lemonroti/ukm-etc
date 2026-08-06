const img = (id, w=1200, h=800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const teamMembers = [
  {name:'Prof. Dr. Amina Rahman',role:'Project Director',institution:'Universiti Kebangsaan Malaysia',image:img('photo-1494790108377-be9c29b29330',500,500),bio:'Leads the international research programme and interdisciplinary partnerships.'},
  {name:'Dr. Daniel Lee',role:'Mangrove Ecologist',institution:'Universiti Kebangsaan Malaysia',image:img('photo-1500648767791-00dcc994a43e',500,500),bio:'Studies coastal biodiversity, ecosystem services and restoration outcomes.'},
  {name:'Dr. Nur Izzati Karim',role:'Planetary Health Researcher',institution:'Universiti Kebangsaan Malaysia',image:img('photo-1534528741775-53994a69daeb',500,500),bio:'Connects environmental change with community and human health evidence.'},
  {name:'Dr. Marcus Tan',role:'Climate Resilience Lead',institution:'Regional Research Partner',image:img('photo-1507003211169-0a1dd7228f2d',500,500),bio:'Focuses on climate adaptation, carbon and coastal resilience.'},
  {name:'Siti Hajar Mohamad',role:'Community Engagement Lead',institution:'Community Research Unit',image:img('photo-1531123897727-8f129e1688ce',500,500),bio:'Coordinates local participation, training and knowledge exchange.'},
  {name:'James Okafor',role:'Data & Monitoring Specialist',institution:'International Collaborator',image:img('photo-1506794778202-cad84cf45f1d',500,500),bio:'Develops monitoring indicators, dashboards and reporting frameworks.'}
];

export const collaborators = ['UKM','Regional Coastal Institute','Planetary Health Alliance','Community Mangrove Network','Blue Carbon Lab','Policy Innovation Centre'].map((name,i)=>({name,abbr:name.split(' ').map(x=>x[0]).join('').slice(0,4),note:['Lead institution','Research partner','Knowledge partner','Community partner','Technical partner','Policy partner'][i]}));

export const workPackages = [
 {slug:'project-coordination',number:'WP1',title:'Project Coordination & Governance',summary:'Coordinate partners, reporting, ethics, data management and programme delivery.',lead:'Prof. Dr. Amina Rahman',objectives:['Maintain transparent governance','Coordinate cross-country delivery','Manage ethics and data protocols'],activities:['Partner meetings','Progress reporting','Risk reviews'],outputs:['Governance framework','Annual progress reports','Shared data plan']},
 {slug:'mangrove-systems',number:'WP2',title:'Mangrove Systems Assessment',summary:'Assess biodiversity, ecosystem condition, carbon, water and coastal functions.',lead:'Dr. Daniel Lee',objectives:['Establish ecological baselines','Map ecosystem services','Identify priority sites'],activities:['Field surveys','Remote sensing','Water and soil sampling'],outputs:['Baseline atlas','Site assessments','Open research datasets']},
 {slug:'restoration-resilience',number:'WP3',title:'Restoration & Climate Resilience',summary:'Test restoration approaches and measure long-term ecological resilience.',lead:'Dr. Marcus Tan',objectives:['Co-design restoration trials','Evaluate survival and recovery','Assess climate adaptation value'],activities:['Site selection','Planting trials','Resilience monitoring'],outputs:['Restoration protocols','Monitoring reports','Scale-up recommendations']},
 {slug:'community-health',number:'WP4',title:'Communities & Planetary Health',summary:'Study how mangrove change affects livelihoods, food systems and human well-being.',lead:'Dr. Nur Izzati Karim',objectives:['Document community priorities','Assess health pathways','Strengthen local participation'],activities:['Household research','Community workshops','Health pathway analysis'],outputs:['Community evidence briefs','Engagement toolkit','Health impact framework']},
 {slug:'policy-communication',number:'WP5',title:'Policy, Impact & Communication',summary:'Translate project evidence into policy, education and public communication.',lead:'James Okafor',objectives:['Support evidence-based policy','Share accessible knowledge','Track project impact'],activities:['Policy dialogues','Publication programme','Public engagement'],outputs:['Policy briefs','Impact dashboard','Learning resources']}
];

const mediaBase=[
 ['launching-the-project','News','Launching a Shared Vision for Mangrove Conservation','2026-03-18'],
 ['field-assessment-selangor','Field Activities','First Integrated Field Assessment in Selangor','2026-04-09'],
 ['restoration-methods-workshop','Workshops','Co-designing Restoration Methods with Local Partners','2026-05-02'],
 ['planetary-health-dialogue','Events','Planetary Health and Coastal Futures Dialogue','2026-05-26'],
 ['regional-partnership-announcement','Press','Regional Institutions Join the Research Consortium','2026-06-11'],
 ['why-mangroves-matter','Blog','Why Mangroves Matter for People and Planet','2026-06-29'],
 ['community-mapping-session','Field Activities','Community Mapping Reveals Local Priorities','2026-07-08'],
 ['blue-carbon-seminar','Events','Blue Carbon Seminar Connects Science and Policy','2026-07-19'],
 ['research-methods-training','Workshops','Training Early-Career Researchers in Integrated Methods','2026-07-28'],
 ['data-platform-preview','News','Project Data Platform Enters Prototype Review','2026-08-03']
];
export const mediaItems=mediaBase.map((x,i)=>({slug:x[0],category:x[1],title:x[2],date:x[3],image:img(['photo-1516026672322-bc52d61a55d5','photo-1497250681960-ef046c08a56e','photo-1529156069898-49953e39b3ac','photo-1531058020387-3be344556be6','photo-1521737711867-e3b97375f902','photo-1500530855697-b586d89ba3ee','photo-1529156069898-49953e39b3ac','photo-1500534623283-312aade485b7','photo-1522202176988-66273c2fd55f','photo-1451187580459-43490279c0fa'][i],1000,700),summary:'A project update highlighting collaboration, field learning and the next steps for mangrove conservation and planetary health.',body:['The project team brought together researchers, communities and partner institutions to examine shared priorities and practical opportunities.','The activity combined scientific discussion with local knowledge, helping participants refine methods, expected outcomes and future engagement.','Insights from this work will guide upcoming research, communication and policy activities across the programme.']}));

export const galleryItems=Array.from({length:10},(_,i)=>({title:['Mangrove field transect','Community shoreline walk','Water quality sampling','Research team briefing','Seedling monitoring','Local knowledge session','Coastal landscape survey','Partner workshop','Biodiversity documentation','Sunset at study site'][i],date:`2026-0${(i%7)+2}-${String(10+i).padStart(2,'0')}`,credit:'UKM Research Project',image:img(['photo-1516026672322-bc52d61a55d5','photo-1497250681960-ef046c08a56e','photo-1534531173927-aeb928d54385','photo-1521737711867-e3b97375f902','photo-1500534623283-312aade485b7','photo-1529156069898-49953e39b3ac','photo-1473448912268-2022ce9509d8','photo-1522202176988-66273c2fd55f','photo-1441974231531-c6227db76b6e','photo-1500530855697-b586d89ba3ee'][i],900,i%3===0?1200:700)}));

const pubBase=[
 ['mangroves-and-planetary-health','Journal Publications','Mangroves and Planetary Health: An Integrated Research Agenda','Amina Rahman; Nur Izzati Karim','2026'],
 ['baseline-assessment-report','Reports','Baseline Assessment Framework for Coastal Study Sites','Project Research Consortium','2026'],
 ['community-engagement-principles','Policy Briefs','Principles for Meaningful Community Engagement in Mangrove Research','Siti Hajar Mohamad','2026'],
 ['field-methods-guide','Other Resources','Integrated Field Methods Guide','Daniel Lee; Marcus Tan','2026'],
 ['blue-carbon-governance','Journal Publications','Blue Carbon Governance and Local Participation','Marcus Tan; James Okafor','2026'],
 ['restoration-monitoring-report','Reports','Restoration Monitoring: Initial Findings','WP3 Research Team','2026'],
 ['coastal-health-policy-note','Policy Briefs','Coastal Ecosystems as Public Health Infrastructure','Nur Izzati Karim','2026'],
 ['learning-resource-mangroves','Other Resources','Learning Resource: Mangroves, Climate and Communities','Project Education Team','2026']
];
export const publications=pubBase.map((p,i)=>({slug:p[0],category:p[1],title:p[2],authors:p[3],year:p[4],date:`2026-0${(i%7)+2}-15`,abstract:'This publication presents an interdisciplinary perspective on mangrove conservation, climate resilience, community well-being and planetary health. It summarises emerging evidence, methods and implications for research and policy.',doi:i%2===0?'10.0000/ukm.mangrove.2026.'+(i+1):'',external:'#'}));

export const faqs=[
 ['What is planetary health?','Planetary health examines how human well-being depends on healthy natural systems and how environmental change affects societies.'],
 ['Why are mangroves important?','Mangroves protect coastlines, store carbon, support biodiversity, sustain livelihoods and contribute to food and health security.'],
 ['Who is involved in the project?','The project brings together UKM researchers, international institutions, technical partners and participating communities.'],
 ['How can organisations collaborate?','Potential collaborators can use the contact form to indicate their area of interest and proposed contribution.'],
 ['Where will project updates be published?','News, field activities, workshops, events, publications and gallery items will be shared through this website.'],
 ['Can the public access research outputs?','Selected publications, reports, policy briefs and learning resources will be made available through the Publications & Resources section.']
];
