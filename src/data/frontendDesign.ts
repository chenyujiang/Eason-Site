import type { NoteSection } from './notes'

export const frontendDesignIntro =
  'Architecting a frontend means reasoning about rendering, state ownership, data flow, performance, and failure with the same rigour as a backend. The framework matters less than ==why a choice fits the constraints==.'

export const frontendSections: NoteSection[] = [
  {
    id: 'why-it-matters',
    title: 'Why it matters',
    blocks: [
      {
        kind: 'p',
        text: 'The frontend is where users actually meet the system. A fast, reliable backend still feels slow and broken behind a frontend that blocks on JavaScript, loses state, or falls over when one request fails.',
      },
      {
        kind: 'p',
        text: 'Three lenses run through every decision: ==user experience==, ==technical architecture==, and ==team scalability==. Get one wrong and the other two pay for it.',
      },
      {
        kind: 'table',
        caption: 'Where the boundaries sit',
        head: ['Discipline', 'Focus'],
        rows: [
          ['Frontend system design', 'Architecture, performance, state, data flow'],
          ['UI / UX design', 'Visual hierarchy, interaction patterns'],
          ['Backend system design', 'Storage, services, infrastructure — met at the API boundary'],
        ],
      },
    ],
  },
  {
    id: 'principles',
    title: 'Core principles',
    blocks: [
      {
        kind: 'defs',
        items: [
          {
            term: 'Requirements drive architecture',
            text: 'Functional requirements say what the system does; non-functional ones — loads in under 2 s on 4G, works with a screen reader, stays usable when an API fails — ==shape the architecture more than the feature list does==.',
          },
          {
            term: 'Separate server and client state',
            text: 'Data owned by the backend is a cache to keep in sync, not app state.',
          },
          {
            term: 'Render where it makes sense',
            text: 'Pick client, server, or static rendering per surface, based on SEO, freshness, and interactivity.',
          },
          {
            term: 'Design for failure',
            text: 'Slow networks, partial responses, and failed requests are normal. Core flows should survive them.',
          },
          {
            term: 'Measure performance',
            text: 'Set budgets against Core Web Vitals and watch real users, not just lab runs.',
          },
          {
            term: 'Build for the next engineer',
            text: 'Clear module boundaries and consistent patterns let many teams change the codebase safely.',
          },
          {
            term: 'Explicit trade-offs',
            text: '“I chose ==X because of this constraint==; if Y were true I would choose Z.” Every choice gives something up — name it.',
          },
        ],
      },
    ],
  },
  {
    id: 'architecture',
    title: 'Core architecture',
    blocks: [
      { kind: 'h3', text: 'Application shell' },
      {
        kind: 'p',
        text: 'Bootstrapping, routing, and first render. Do routes load lazily or eagerly? Do code-split boundaries follow user journeys? How does first load differ from later navigation?',
      },
      { kind: 'h3', text: 'Components and composition' },
      {
        kind: 'p',
        text: 'Presentational components render UI; container components orchestrate data and logic. Keeping them apart lets business logic change without touching visuals.',
      },
      {
        kind: 'table',
        caption: 'Composition patterns',
        head: ['Pattern', 'How it works', 'Good for'],
        rows: [
          ['Slots', 'Parent injects content into named areas', 'Flexible layouts without tight coupling'],
          ['Render props', 'Consumer decides how data is rendered', 'One data source, many presentations'],
          ['Compound components', 'Related parts share implicit state', 'Tabs, accordions'],
        ],
      },
      {
        kind: 'p',
        text: 'Passing props through five or six layers turns the middle layers into fragile coupling points. Context or a store fixes that — but ==overusing global context== creates its own maintenance problems.',
      },
    ],
  },
  {
    id: 'state',
    title: 'State and data ownership',
    blocks: [
      {
        kind: 'defs',
        items: [
          { term: 'Local', text: 'Ephemeral UI — a modal is open, a tab is selected, a form is mid-edit.' },
          { term: 'Lifted', text: 'Shared between siblings through a common parent.' },
          { term: 'Global', text: 'Truly app-wide data.' },
        ],
      },
      {
        kind: 'p',
        text: 'The distinction that matters most is ==server state vs client state==. Server state (profiles, catalogues, orders) lives authoritatively on the backend; client state is UI. Mixing them leads to duplicated data, manual invalidation, and unpredictable loading states.',
      },
      {
        kind: 'callout',
        label: 'Modern approach',
        text: 'Treat server state as a ==cache that syncs with the API==, not as application state that happens to come from the network.',
      },
      {
        kind: 'p',
        text: 'Derive computed values in one predictable place and memoise them so they only recompute when their inputs change.',
      },
    ],
  },
  {
    id: 'data-flow',
    title: 'Talking to the backend',
    blocks: [
      {
        kind: 'defs',
        items: [
          { term: 'REST', text: 'Familiar and simple, but prone to over-fetching.' },
          {
            term: 'GraphQL',
            text: 'Clients ask for exactly what they need, at the cost of query complexity.',
          },
          {
            term: 'WebSocket / SSE',
            text: 'For streaming and real-time updates.',
          },
        ],
      },
      {
        kind: 'p',
        text: 'Design for production reality: slow networks need loading states, intermittent failures need handling, and timeouts leave partial data. If recommendations fail, the catalogue should still work.',
      },
    ],
  },
  {
    id: 'rendering',
    title: 'Rendering strategies',
    blocks: [
      {
        kind: 'defs',
        items: [
          {
            term: 'CSR',
            text: 'The browser downloads JavaScript and builds the DOM. Rich interactivity and simple infrastructure; slower first paint, heavy bundles, nothing works if JS fails. Watch for public pages and link previews inside “authenticated” apps.',
          },
          {
            term: 'SSR',
            text: 'The server sends meaningful HTML first. Faster content, reliable SEO, degrades gracefully; costs server load, weaker caching, debugging across two environments, and hydration.',
          },
          {
            term: 'Static (SSG)',
            text: 'Pages built at deploy time and served from a CDN. Excellent for content that rarely changes; no per-user content, and changes need a rebuild.',
          },
          {
            term: 'ISR',
            text: 'Static pages regenerated in the background on an interval — static speed with reasonable freshness.',
          },
        ],
      },
      {
        kind: 'table',
        caption: 'Choosing a strategy',
        head: ['Strategy', 'Strengths', 'Costs', 'Best for'],
        rows: [
          ['Client-side', 'Interactivity, simple infra', 'Slow first load, SEO', 'Dashboards, SPAs'],
          ['Server-side', 'Fast first paint, SEO', 'Server load, hydration', 'Dynamic public pages'],
          ['Static', 'Speed, CDN-friendly', 'Build-time data, staleness', 'Marketing, docs, blogs'],
          ['ISR', 'Static + background refresh', 'Staleness windows', 'Catalogues, news'],
          ['Hybrid', 'Each surface optimised', 'Architectural complexity', 'Large, varied apps'],
        ],
      },
      {
        kind: 'callout',
        label: 'Hybrid in practice — e-commerce',
        text: 'Category pages static for SEO, product pages server-rendered for live stock, the cart client-rendered because it changes on every click.',
      },
    ],
  },
  {
    id: 'data-fetching',
    title: 'Fetching, caching, and sync',
    blocks: [
      { kind: 'h3', text: 'Granularity' },
      {
        kind: 'p',
        text: 'Route-level fetching blocks render until data arrives but guarantees completeness. Component-level fetching renders incrementally but risks ==waterfalls== where children wait on parents — parallelise and prefetch. Sketching the request timeline makes them obvious.',
      },
      { kind: 'h3', text: 'Cache invalidation' },
      {
        kind: 'defs',
        items: [
          {
            term: 'Time-based (TTL)',
            text: 'Simple; can serve stale data for the whole TTL, or refetch unchanged data.',
          },
          {
            term: 'Event-driven',
            text: 'Clear exact entries on mutation; needs writes and cache to be coordinated.',
          },
          {
            term: 'Stale-while-revalidate',
            text: 'Show cached data instantly and refresh in the background. Great for slowly changing data; wrong for prices or stock counts.',
          },
          {
            term: 'Normalised (GraphQL)',
            text: 'Updating one entity updates every query that references it.',
          },
        ],
      },
      { kind: 'h3', text: 'Keeping client and server in sync' },
      {
        kind: 'list',
        items: [
          '==Optimistic== updates feel instant but need rollback when the server rejects them.',
          '==Pessimistic== updates wait for the server — slower, but nothing ever un-happens.',
          'Real-time: WebSockets for two-way, SSE for server-to-client only, polling when a delay is acceptable and simplicity wins.',
        ],
      },
      {
        kind: 'table',
        caption: 'Data concerns at a glance',
        head: ['Concern', 'Approach', 'Trade-off'],
        rows: [
          ['Latency', 'Caching, prefetching, parallel requests', 'Staleness vs responsiveness'],
          ['Stale data', 'Background revalidation, TTLs', 'Freshness vs request volume'],
          ['Partial failure', 'Graceful degradation, fallbacks', 'UX vs complexity'],
          ['Real-time', 'WebSocket, SSE, polling', 'Infrastructure vs latency'],
          ['Optimistic UI', 'Instant update + rollback', 'Perceived speed vs error handling'],
        ],
      },
    ],
  },
  {
    id: 'performance',
    title: 'Performance',
    blocks: [
      { kind: 'h3', text: 'Initial load — Core Web Vitals' },
      {
        kind: 'defs',
        items: [
          { term: 'LCP', text: 'Largest Contentful Paint — main content visible. Target under 2.5 s.' },
          {
            term: 'INP',
            text: 'Interaction to Next Paint — responsiveness. Target 200 ms or less.',
          },
          { term: 'CLS', text: 'Cumulative Layout Shift — visual stability. Target under 0.1.' },
        ],
      },
      {
        kind: 'callout',
        label: 'Update',
        text: 'INP replaced First Input Delay (FID) as a Core Web Vital in March 2024.',
      },
      {
        kind: 'list',
        items: [
          'Shrink bundles with code splitting and tree shaking.',
          'Defer non-critical resources; preload critical ones.',
          'Prioritise above-the-fold content and remove render-blocking resources.',
          'Use SSR or static generation so the browser can paint before JavaScript runs.',
          'Tie metrics to business outcomes — conversion, not engineering pride.',
        ],
      },
      { kind: 'h3', text: 'Runtime' },
      {
        kind: 'list',
        items: [
          'Avoid unnecessary re-renders; memoise where inputs are stable.',
          '==Virtualise== long lists — render only what is on screen.',
          'Debounce or throttle scroll and typing handlers.',
          'Prefer fine-grained state updates and selectors so components only re-render for their slice.',
          'Batch DOM reads before writes to avoid layout thrashing.',
          'Animate transform and opacity so the compositor keeps 60 fps.',
        ],
      },
      { kind: 'h3', text: 'Measuring in production' },
      {
        kind: 'p',
        text: '==Real User Monitoring== shows how real devices and networks perform; ==synthetic monitoring== gives consistent runs that catch regressions before release. Use both.',
      },
      {
        kind: 'table',
        caption: 'Levers by area',
        head: ['Area', 'Metrics', 'Levers'],
        rows: [
          ['Initial load', 'LCP, TTI, bundle size', 'Code splitting, SSR/SSG, critical CSS'],
          ['Interactivity', 'INP, input latency', 'Main-thread work, web workers'],
          ['Visual stability', 'CLS', 'Reserve dimensions, font loading strategy'],
          ['Runtime', 'Frame rate, memory', 'Memoisation, virtualisation, state design'],
          ['Network', 'Requests, payload size', 'Caching, compression, query design'],
        ],
      },
    ],
  },
  {
    id: 'scale',
    title: 'Scaling the codebase',
    blocks: [
      {
        kind: 'p',
        text: 'Frontends scale on two axes: millions of users, and dozens or hundreds of engineers. A fast system that teams can’t change safely has limited value.',
      },
      {
        kind: 'p',
        text: 'Clear module boundaries with explicit interfaces let teams work in parallel. Feature flags limit the blast radius of rollouts; a shared component library keeps UI consistent.',
      },
      { kind: 'h3', text: 'Micro-frontends' },
      {
        kind: 'p',
        text: 'Independently built and deployed apps composed into one experience — justified when separate teams own separate areas and need their own release cadence. The costs are real: duplicated dependencies bloat bundles, cross-app communication needs contracts, UX drifts, and apps compete for the browser.',
      },
      {
        kind: 'table',
        caption: 'Codebase structure',
        head: ['Approach', 'Benefits', 'Costs', 'Best for'],
        rows: [
          ['Monolith', 'Simple coordination', 'Deployment coupling', 'Small–medium teams'],
          ['Modular', 'Clear ownership, reuse', 'Interface discipline', 'Growing teams'],
          ['Micro-frontends', 'Team autonomy', 'Bundle bloat, UX drift', 'Large orgs, legacy migration'],
        ],
      },
      {
        kind: 'p',
        text: 'Design for the engineers who come next: consistent naming and patterns, documentation, automated tests, and ==gradual migration paths==. Track debt as intentional or accidental, and pay it down with refactoring time, deprecation warnings, and ADRs.',
      },
    ],
  },
  {
    id: 'reliability',
    title: 'Reliability and resilience',
    blocks: [
      {
        kind: 'list',
        items: [
          'Retry network timeouts with exponential backoff; surface business errors to the user.',
          'Wrap parts of the tree in ==error boundaries== so one component can’t take down the page.',
          'Render fallback UI so the page still works in a degraded state.',
        ],
      },
      {
        kind: 'callout',
        label: 'Remember',
        text: 'Silent failures do more damage than visible ones — users believe an action worked when it didn’t.',
      },
      {
        kind: 'defs',
        items: [
          {
            term: 'Graceful degradation',
            text: 'Core flows survive when parts fail: the product page keeps its price and buy button when recommendations time out.',
          },
          {
            term: 'Progressive enhancement',
            text: 'Start with a baseline that works everywhere, then layer on — a form that submits without JS, with JS adding live validation.',
          },
          {
            term: 'Partial failure',
            text: 'Usually show what loaded and mark what didn’t — unless the missing piece makes the rest misleading.',
          },
          {
            term: 'Offline-first',
            text: 'Treat connectivity as an enhancement: service workers cache assets and responses, background sync queues mutations, IndexedDB holds larger data. Powerful, but a lot of complexity.',
          },
        ],
      },
    ],
  },
  {
    id: 'cross-cutting',
    title: 'Security, accessibility, compliance',
    blocks: [
      { kind: 'h3', text: 'Security' },
      {
        kind: 'p',
        text: 'The frontend runs in an environment the user controls. Mitigate XSS with a Content Security Policy. Tokens in localStorage are readable by any script on the page; HttpOnly cookies aren’t, but change how you call APIs. Rotate refresh tokens to limit damage.',
      },
      {
        kind: 'callout',
        label: 'Principle',
        text: 'Never call a design simply “secure”. Name the specific threats, the mitigations, and the risk that remains.',
      },
      { kind: 'h3', text: 'Accessibility' },
      {
        kind: 'p',
        text: 'Accessibility shapes architecture: semantic HTML, keyboard navigation with deliberate ==focus management== when dialogs open or views change, and screen-reader announcements for dynamic updates.',
      },
      { kind: 'h3', text: 'Privacy & compliance' },
      {
        kind: 'p',
        text: 'GDPR and CCPA mean consent-aware initialisation: analytics and ad scripts can’t load until the user agrees, which changes when scripts run and how performance is measured. Minimise data, avoid storing sensitive data client-side, and support users’ rights to access and delete.',
      },
    ],
  },
]
