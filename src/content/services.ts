export type FAQ = { q: string; a: string };
export type Block = { title: string; body: string; items?: string[] };

export type ServicePage = {
  slug: string;
  path: string;
  /** Short label used in cards and navigation */
  label: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; highlight: string; lede: string };
  intro: { title: string; body: string };
  problems?: Block[];
  capabilities: { title: string; lede?: string; items: Block[] };
  roles?: Block[];
  models?: Block[];
  stack?: { group: string; items: string[] }[];
  process?: Block[];
  note?: { title: string; body: string };
  faqs: FAQ[];
  cta: { title: string; body: string; interest: string };
  related: string[];
};

export const deliveryProcess: Block[] = [
  { title: "Discover", body: "We start with your goals, users and constraints, and agree on what success looks like before anything is built." },
  { title: "Plan", body: "Scope, priorities, architecture and a delivery plan you can review, with assumptions written down rather than implied." },
  { title: "Design", body: "User flows, interface design and clickable prototypes, so decisions are tested before they become code." },
  { title: "Develop", body: "Iterative development in short cycles with regular demos, shared progress and code you own." },
  { title: "Test & launch", body: "Functional and device testing, release preparation and a planned launch rather than a last-minute push." },
  { title: "Maintain & scale", body: "Ongoing fixes, improvements and new features as your users and business needs change." },
];

export const services: ServicePage[] = [
  {
    slug: "staff-augmentation",
    path: "/services/staff-augmentation",
    label: "Staff Augmentation",
    meta: {
      title: "Staff Augmentation & Dedicated Development Teams",
      description:
        "Extend your engineering capacity with dedicated developers, designers and QA engineers from Anovate System. Individual specialists or full teams for businesses and agencies in the US, UAE and beyond.",
    },
    hero: {
      eyebrow: "Staff augmentation",
      title: "Add engineering capacity",
      highlight: "without building every role in-house.",
      lede: "Dedicated developers, designers and QA engineers who join your workflow, follow your processes and help you ship. Add one specialist or a full team.",
    },
    intro: {
      title: "The roadmap is clear. The bandwidth isn't.",
      body: "Hiring for every skill you need is slow and expensive, and project demand rarely stays flat. Staff augmentation gives you access to the right technical expertise when you need it, so your core team can stay focused and your delivery keeps moving.",
    },
    problems: [
      { title: "Hiring is slowing delivery", body: "Open roles stay open while features wait. Augmented engineers help close the gap while you continue building your permanent team." },
      { title: "Specific skills, for a specific period", body: "A mobile release, a platform migration or a QA push may need skills you don't require full-time." },
      { title: "Agency capacity peaks", body: "Agencies can extend delivery capacity with white-label development support where appropriate, without carrying fixed overhead between projects." },
      { title: "Overhead of a full in-house team", body: "Recruiting, onboarding and retaining every role adds cost and management effort that not every business needs to carry." },
    ],
    capabilities: {
      title: "Roles you can add to your team",
      lede: "Engineers and specialists who work in your tools, attend your stand-ups and report into your leads.",
      items: [
        { title: "Frontend developers", body: "Modern, responsive web interfaces built with component-driven frameworks." },
        { title: "Backend developers", body: "APIs, services, databases and integrations that keep products reliable." },
        { title: "Full-stack developers", body: "Engineers comfortable across the stack for smaller teams and faster iteration." },
        { title: "Mobile app developers", body: "Native iOS and Android, or cross-platform with Flutter and React Native." },
        { title: "UI/UX designers", body: "Research-informed flows, interface design and interactive prototypes." },
        { title: "QA engineers", body: "Manual and structured testing so releases are predictable rather than risky." },
      ],
    },
    models: [
      { title: "Individual specialists", body: "Add one or more engineers to an existing team to increase capacity or fill a specific skill gap. They work within your processes and report to your leads." },
      { title: "Dedicated teams", body: "A focused, cross-functional team working exclusively on your product, typically combining development, design and QA under a shared delivery rhythm." },
      { title: "Project-based support", body: "A defined scope with clear deliverables, for a feature, a release or a modernisation effort that needs extra hands for a set period." },
      { title: "White-label partnership", body: "For agencies: development delivered under your brand and your client relationship, where the arrangement is appropriate for both sides." },
    ],
    process: [
      { title: "Understand the need", body: "We discuss the work, the skills required, your stack, your working hours and how your team collaborates." },
      { title: "Match the profiles", body: "We propose engineers whose experience fits the role. You review profiles and can interview candidates." },
      { title: "Onboard into your workflow", body: "Access to your tools, repositories and rituals, with a clear first set of tasks and an agreed point of contact." },
      { title: "Deliver and review", body: "Regular check-ins on progress, communication and quality, with the flexibility to adjust team size as needs change." },
    ],
    note: {
      title: "How collaboration works",
      body: "Augmented engineers use your communication channels, project tools and code repositories. We agree working-hour overlap for your time zone up front, whether your team is in the United States, the UAE or elsewhere, and keep a named contact on our side for anything outside day-to-day delivery.",
    },
    faqs: [
      { q: "What is the difference between staff augmentation and outsourcing a project?", a: "With staff augmentation, engineers join your team and work under your direction, inside your processes. With project outsourcing, we take responsibility for delivering an agreed scope. We offer both, and can help you decide which fits your situation." },
      { q: "Can we interview developers before they join?", a: "Yes. We share profiles that match your requirements and you can interview candidates before confirming who joins your team." },
      { q: "How do augmented developers communicate with our team?", a: "They work in your channels and tools, such as Slack, Microsoft Teams, Jira or GitHub, and join your stand-ups and planning sessions. Working-hour overlap with your time zone is agreed before the engagement starts." },
      { q: "Can we scale the team up or down?", a: "Engagements are designed to be flexible. Notice periods and scaling terms are agreed in the engagement contract so both sides can plan." },
      { q: "Do you work with agencies on a white-label basis?", a: "Yes, where appropriate. We can support agencies with development capacity delivered under their brand, with confidentiality terms agreed in advance." },
      { q: "Who owns the code our augmented team writes?", a: "Intellectual property ownership is defined in the engagement contract. Our standard approach is that work produced for you belongs to you." },
    ],
    cta: {
      title: "Tell us about the team you need",
      body: "Share the roles, skills and timeline you have in mind. We'll come back with a practical proposal for how we can help.",
      interest: "staff-augmentation",
    },
    related: ["custom-software-development", "mobile-app-development"],
  },
  {
    slug: "custom-software-development",
    path: "/services/custom-software-development",
    label: "Custom Software",
    meta: {
      title: "Custom Software Development",
      description:
        "Web applications, business software, SaaS products, APIs and workflow automation built around how your business actually works. Custom software development by Anovate System.",
    },
    hero: {
      eyebrow: "Custom software development",
      title: "Software shaped around",
      highlight: "how your business actually works.",
      lede: "Web applications, business systems, SaaS products and integrations, designed from your requirements and built to be maintained, extended and owned by you.",
    },
    intro: {
      title: "From requirement to working software",
      body: "Off-the-shelf tools are a good start until your processes outgrow them. We turn business requirements into practical software: we clarify what needs to happen, design how people will use it, and build it in iterations you can review along the way.",
    },
    problems: [
      { title: "Spreadsheets have become the system", body: "Critical work lives in shared files and inboxes, with no single source of truth and growing risk of error." },
      { title: "Tools don't talk to each other", body: "Teams re-key the same data between systems because nothing is connected." },
      { title: "An idea needs a first version", body: "You need an MVP that real users can try, without over-building before the idea is validated." },
      { title: "A legacy system is holding you back", body: "Older software is hard to change, hard to support and difficult to integrate with newer tools." },
    ],
    capabilities: {
      title: "What we build",
      items: [
        { title: "Web applications", body: "Secure, responsive applications for customers, partners or internal teams." },
        { title: "Custom business software", body: "Internal tools and portals built around your workflows, roles and approvals." },
        { title: "SaaS product development", body: "Multi-user, subscription-ready products, from first release to ongoing growth." },
        { title: "APIs & integrations", body: "APIs for your products and connections to the third-party services you already use." },
        { title: "Workflow automation", body: "Replace repetitive manual steps with dependable, auditable automated processes." },
        { title: "MVP & product engineering", body: "Focused first versions that let you test the idea with users and learn quickly." },
        { title: "Modernisation", body: "Incremental modernisation of legacy systems while keeping the business running." },
        { title: "Maintenance & ongoing development", body: "Fixes, improvements, security updates and new features after launch." },
      ],
    },
    process: deliveryProcess,
    faqs: [
      { q: "How do you estimate the cost of a custom software project?", a: "We start with a discovery conversation to understand the scope, users and integrations involved. From there we provide an estimate with clearly stated assumptions. For less defined ideas, we often recommend a short discovery or MVP phase first." },
      { q: "How long does it take to build custom software?", a: "It depends on scope and complexity. A focused MVP is much quicker to deliver than a full business platform. We agree a delivery plan with milestones before development starts, rather than quoting a generic timeline." },
      { q: "Will we own the source code?", a: "Ownership is defined in the project contract. Our standard approach is that the software we build for you belongs to you." },
      { q: "Can you work on an existing codebase?", a: "Yes. We can review an existing application, recommend improvements and take on maintenance, new features or modernisation." },
      { q: "Do you provide support after launch?", a: "Yes. We offer ongoing maintenance and development so the software continues to evolve with your business." },
    ],
    cta: {
      title: "Have a process or product in mind?",
      body: "Describe what you want to build or improve. We'll help you shape the scope and the right first step.",
      interest: "custom-software",
    },
    related: ["mobile-app-development", "crm", "erp"],
  },
  {
    slug: "mobile-app-development",
    path: "/services/mobile-app-development",
    label: "Mobile Apps",
    meta: {
      title: "Mobile App Development — iOS, Android, Flutter & React Native",
      description:
        "iOS and Android app development, cross-platform apps with Flutter and React Native, UI/UX, backend APIs, testing, app store launch and ongoing maintenance.",
    },
    hero: {
      eyebrow: "Mobile app development",
      title: "Mobile apps that are",
      highlight: "ready for real users.",
      lede: "From the first prototype to app store launch and beyond: native iOS and Android, or cross-platform with Flutter and React Native, backed by reliable APIs.",
    },
    intro: {
      title: "More than screens on a phone",
      body: "A successful app depends on clear user journeys, a dependable backend, careful testing across devices and a plan for what happens after launch. We handle the full lifecycle, so you work with one team from concept to continuous improvement.",
    },
    capabilities: {
      title: "Mobile capabilities",
      items: [
        { title: "iOS development", body: "Native apps for iPhone and iPad that follow Apple's platform conventions." },
        { title: "Android development", body: "Native Android apps that work well across the wide range of Android devices." },
        { title: "Cross-platform apps", body: "One codebase for iOS and Android with Flutter or React Native, when it suits the product." },
        { title: "UI/UX & prototyping", body: "User flows, interface design and interactive prototypes you can test before development." },
        { title: "Backend & APIs", body: "Secure APIs, authentication, data storage and third-party integrations." },
        { title: "MVP development", body: "A focused first release that lets you validate with real users and iterate." },
        { title: "Testing & app store launch", body: "Device testing, release builds and support through App Store and Google Play submission." },
        { title: "Maintenance & improvements", body: "OS updates, fixes, performance work and new features after launch." },
      ],
    },
    stack: [
      { group: "Native", items: ["Swift", "Kotlin"] },
      { group: "Cross-platform", items: ["Flutter", "React Native"] },
      { group: "Backend", items: ["REST & GraphQL APIs", "Cloud hosting", "Push notifications"] },
    ],
    process: deliveryProcess,
    faqs: [
      { q: "Should we build native or cross-platform?", a: "Cross-platform frameworks like Flutter and React Native are a strong choice for many products because one codebase serves both platforms. Native development can be the better option when an app relies heavily on device-specific features or demanding performance. We'll recommend an approach based on your product, not a default." },
      { q: "Can you design the app as well as build it?", a: "Yes. We provide UI/UX design and interactive prototyping, and can also work from designs your team has already created." },
      { q: "Do you handle App Store and Google Play submission?", a: "Yes. We prepare release builds and support you through store submission. Apps are published under your own developer accounts so you keep ownership." },
      { q: "Can you build the backend too?", a: "Yes. We build APIs, authentication, databases and integrations, or connect your app to an existing backend." },
      { q: "What happens after the app launches?", a: "We offer ongoing maintenance, OS compatibility updates and continued feature development." },
    ],
    cta: {
      title: "Planning a mobile app?",
      body: "Tell us about your idea, your users and where you are today. We'll suggest a practical path to launch.",
      interest: "mobile-app",
    },
    related: ["custom-software-development", "staff-augmentation"],
  },
  {
    slug: "crm",
    path: "/solutions/crm",
    label: "CRM Development",
    meta: {
      title: "Custom CRM Development & CRM Solutions",
      description:
        "Custom CRM development for sales pipelines, customer records, communication workflows, reporting and integrations, built around your sales and service process.",
    },
    hero: {
      eyebrow: "CRM solutions",
      title: "A CRM built around",
      highlight: "your sales process, not the other way round.",
      lede: "Custom customer relationship management systems that organise your leads, pipeline and customer communication, and connect to the tools your team already uses.",
    },
    intro: {
      title: "When a generic CRM stops fitting",
      body: "Many teams start with a general-purpose CRM and end up working around it. If your pipeline, approvals, customer data or reporting don't fit standard templates, a custom CRM or a set of custom CRM modules can give you a system that matches how you sell and serve customers.",
    },
    capabilities: {
      title: "What a custom CRM can cover",
      items: [
        { title: "CRM strategy", body: "Map your sales and service process, data and reporting needs before choosing what to build." },
        { title: "Lead & pipeline management", body: "Capture, qualify and move opportunities through stages that reflect your sales process." },
        { title: "Customer records", body: "A single, structured view of contacts, companies, history and related activity." },
        { title: "Communication workflows", body: "Follow-ups, reminders, assignments and templates that keep conversations moving." },
        { title: "Process automation", body: "Automate routine updates, hand-offs and notifications between sales, operations and support." },
        { title: "Reporting & visibility", body: "Dashboards and reports on pipeline, activity and performance for managers and leadership." },
        { title: "Integrations", body: "Connect your CRM with email, website forms, accounting and other business systems." },
        { title: "Data migration", body: "Move contacts, accounts and history from spreadsheets or existing tools, validated with your team." },
      ],
    },
    process: deliveryProcess,
    note: {
      title: "Custom development, not an off-the-shelf subscription",
      body: "Our CRM offering is a development service: we design and build CRM systems or modules for your business. It is not a ready-made CRM product sold by subscription. If a standard CRM would serve you better, we'll tell you.",
    },
    faqs: [
      { q: "Do you sell a ready-made CRM?", a: "No. CRM is a custom development service. We build CRM systems and modules around your specific process. Our current subscription product is inventory management software." },
      { q: "Can you extend or integrate with our existing CRM?", a: "Often, yes. Depending on the platform and its API, we can build custom modules, integrations or automations around an existing CRM instead of replacing it." },
      { q: "Can you migrate data from our current tools?", a: "Data migration is usually part of a CRM project. We review the data you have, plan the migration and validate it with your team." },
      { q: "Who is a custom CRM right for?", a: "Businesses whose sales or service processes are specific enough that generic tools create workarounds, duplicate data or reporting gaps." },
    ],
    cta: {
      title: "Let's map your sales process",
      body: "Tell us how your team manages leads and customers today, and where it breaks down.",
      interest: "crm",
    },
    related: ["erp", "custom-software-development"],
  },
  {
    slug: "erp",
    path: "/solutions/erp",
    label: "ERP Development",
    meta: {
      title: "Custom ERP Development & ERP Solutions",
      description:
        "Custom ERP development for operational workflows, sales and purchasing, departmental processes, business data and system integrations, giving you a centralised view of your business.",
    },
    hero: {
      eyebrow: "ERP solutions",
      title: "Bring your operations",
      highlight: "into one connected system.",
      lede: "Custom ERP modules and integrations that connect sales, purchasing, operations and business data, so decisions are based on one version of the truth.",
    },
    intro: {
      title: "Visibility across the business",
      body: "As businesses grow, departments adopt their own tools and data ends up scattered. A custom ERP, or custom modules around the systems you already have, connects those processes so teams work from the same information and leadership can see what is happening.",
    },
    capabilities: {
      title: "ERP areas we build for",
      items: [
        { title: "Business process management", body: "Model approvals, hand-offs and responsibilities as structured workflows." },
        { title: "Operational workflows", body: "Day-to-day operational processes, digitised and tracked end to end." },
        { title: "Sales & purchasing", body: "Orders, purchasing and supplier processes connected to the rest of the business." },
        { title: "Departmental workflows", body: "Processes for individual departments that still share data with the wider system." },
        { title: "Business data management", body: "Structured, consistent data with the right access for the right roles." },
        { title: "Custom modules & integrations", body: "New modules for gaps in existing systems, and integrations between them." },
        { title: "Centralised business systems", body: "A single system of record that replaces disconnected tools where that makes sense." },
        { title: "Reporting & visibility", body: "Operational reports and dashboards drawn from one consistent set of data." },
      ],
    },
    process: deliveryProcess,
    note: {
      title: "Built to your scope",
      body: "ERP is a custom development service. We usually recommend starting with the process that causes the most friction, delivering it well, and expanding from there, instead of attempting to replace everything at once.",
    },
    faqs: [
      { q: "Do we need a full ERP, or just a few modules?", a: "Many businesses benefit most from a few well-built modules that connect their existing tools. We'll help you decide based on your processes, not on the size of the project." },
      { q: "Can you integrate with the systems we already use?", a: "Integration is a core part of most ERP work. Where your existing systems provide an API or data export, we can connect them." },
      { q: "How do you approach ERP projects with many departments?", a: "We work in phases, starting with discovery across stakeholders and then delivering the highest-value module first so teams see results early." },
      { q: "Is your inventory software an ERP?", a: "No. Anovate Inventory is a focused subscription product for stock management. ERP solutions are custom-built for each client." },
    ],
    cta: {
      title: "Start with the process that hurts most",
      body: "Tell us where your operations slow down. We'll suggest a phased plan that delivers value early.",
      interest: "erp",
    },
    related: ["crm", "custom-software-development"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const homeFaqs: FAQ[] = [
  { q: "What engagement models do you offer?", a: "We offer staff augmentation (individual specialists or dedicated teams who work inside your processes), project-based delivery against an agreed scope, and ongoing development and maintenance. Software products such as our inventory system are available separately by subscription." },
  { q: "How does staff augmentation work?", a: "We understand the skills you need, propose matching engineers, and you can interview them before they join. They then work in your tools and rituals, with agreed working-hour overlap for your time zone." },
  { q: "How long does a typical project take?", a: "It depends on scope. A focused MVP is far quicker than a full business platform. After an initial discussion we provide a delivery plan with milestones, instead of a generic estimate." },
  { q: "What does your development process look like?", a: "Discover, plan, design, develop, test and launch, then maintain and scale. You see working software regularly through demos and shared progress." },
  { q: "How do the software subscriptions work?", a: "Our subscription products, starting with Anovate Inventory, are cloud-based and accessed through the browser. Plan details are listed on each product page." },
  { q: "How do we get started?", a: "Send us a short inquiry about your project or team needs. We'll arrange a conversation to understand your goals and suggest the right next step." },
];
