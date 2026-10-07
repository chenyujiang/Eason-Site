import type { NoteSection } from './notes'

export const systemDesignIntro =
  'Start with one server and keep scaling it up until it serves millions of users. Each step fixes the ==bottleneck the previous design created==, and the diagram adds the new parts as you read.'

/* ------------------------------------------------------------------ */
/* Architecture diagram: every node and edge knows the stage it joins  */
/* (and optionally the stage it is replaced at).                       */
/* ------------------------------------------------------------------ */

export interface DiagramNode {
  id: string
  /** box: a component · note: free text · frame: a dashed boundary drawn behind */
  kind?: 'box' | 'note' | 'frame'
  label: string
  sub?: string
  x: number
  y: number
  w: number
  h: number
  from: number
  until?: number
}

export interface DiagramEdge {
  id: string
  points: [number, number, number, number]
  from: number
  until?: number
}

export const diagramNodes: DiagramNode[] = [
  { id: 'dc', kind: 'frame', label: 'Data center · US-East', sub: 'mirrored in US-West', x: 10, y: 84, w: 460, h: 350, from: 8 },
  { id: 'dns', label: 'DNS', x: 20, y: 16, w: 110, h: 40, from: 1, until: 8 },
  { id: 'geodns', label: 'GeoDNS', sub: 'nearest data center', x: 20, y: 16, w: 110, h: 40, from: 8 },
  { id: 'users', label: 'Users', sub: 'web + mobile', x: 170, y: 16, w: 140, h: 40, from: 1 },
  { id: 'cdn', label: 'CDN', sub: 'static assets', x: 350, y: 16, w: 110, h: 40, from: 6 },
  { id: 'lb', label: 'Load balancer', x: 170, y: 100, w: 140, h: 36, from: 3 },
  { id: 'server', label: 'Server', sub: 'web app · DB · cache', x: 170, y: 180, w: 140, h: 44, from: 1, until: 2 },
  { id: 'web', label: 'Web server', x: 170, y: 180, w: 140, h: 44, from: 2, until: 3 },
  { id: 'web1', label: 'Web 1', x: 166, y: 180, w: 68, h: 44, from: 3 },
  { id: 'web2', label: 'Web 2', x: 246, y: 180, w: 68, h: 44, from: 3 },
  { id: 'session', label: 'Session store', sub: 'shared NoSQL', x: 350, y: 180, w: 110, h: 44, from: 7 },
  { id: 'queue', label: 'Message queue', x: 20, y: 262, w: 110, h: 36, from: 9 },
  { id: 'workers', label: 'Workers', sub: 'async jobs', x: 20, y: 330, w: 110, h: 40, from: 9 },
  { id: 'cache', label: 'Cache', sub: 'read-through', x: 350, y: 262, w: 110, h: 40, from: 5 },
  { id: 'logs', label: 'Logs · metrics', sub: 'CI/CD automation', x: 350, y: 330, w: 110, h: 40, from: 10 },
  { id: 'db', label: 'Database', x: 170, y: 340, w: 140, h: 40, from: 2, until: 4 },
  { id: 'primary', label: 'Primary', sub: 'writes', x: 170, y: 310, w: 140, h: 40, from: 4, until: 11 },
  { id: 'replica1', label: 'Replica', x: 166, y: 380, w: 68, h: 36, from: 4, until: 11 },
  { id: 'replica2', label: 'Replica', x: 246, y: 380, w: 68, h: 36, from: 4, until: 11 },
  { id: 'shard0', label: 'S0', x: 154, y: 330, w: 40, h: 60, from: 11 },
  { id: 'shard1', label: 'S1', x: 198, y: 330, w: 40, h: 60, from: 11 },
  { id: 'shard2', label: 'S2', x: 242, y: 330, w: 40, h: 60, from: 11 },
  { id: 'shard-note', kind: 'note', label: 'sharded by user_id % 4', x: 154, y: 394, w: 172, h: 20, from: 11 },
  { id: 'shard3', label: 'S3', x: 286, y: 330, w: 40, h: 60, from: 11 },
]

export const diagramEdges: DiagramEdge[] = [
  { id: 'users-dns', points: [170, 36, 130, 36], from: 1 },
  { id: 'users-cdn', points: [310, 36, 350, 36], from: 6 },
  { id: 'users-server', points: [240, 56, 240, 180], from: 1, until: 3 },
  { id: 'users-lb', points: [240, 56, 240, 100], from: 3 },
  { id: 'lb-web1', points: [226, 136, 200, 180], from: 3 },
  { id: 'lb-web2', points: [254, 136, 280, 180], from: 3 },
  { id: 'web-db', points: [240, 224, 240, 340], from: 2, until: 3 },
  { id: 'web1-db', points: [200, 224, 226, 340], from: 3, until: 4 },
  { id: 'web2-db', points: [280, 224, 254, 340], from: 3, until: 4 },
  { id: 'web1-primary', points: [200, 224, 226, 310], from: 4, until: 11 },
  { id: 'web2-primary', points: [280, 224, 254, 310], from: 4, until: 11 },
  { id: 'primary-r1', points: [214, 350, 200, 380], from: 4, until: 11 },
  { id: 'primary-r2', points: [266, 350, 280, 380], from: 4, until: 11 },
  { id: 'web-cache', points: [314, 214, 350, 270], from: 5 },
  { id: 'web-session', points: [314, 196, 350, 196], from: 7 },
  { id: 'web-queue', points: [166, 214, 130, 270], from: 9 },
  { id: 'queue-workers', points: [75, 298, 75, 330], from: 9 },
  { id: 'web-shards', points: [240, 224, 240, 330], from: 11 },
]

/* ------------------------------------------------------------------ */
/* Stages — one note section each, in the order the architecture builds up  */
/* ------------------------------------------------------------------ */

export const stages: NoteSection[] = [
  {
    id: 'single-server',
    title: 'Single server',
    blocks: [
      {
        kind: 'p',
        text: 'Everything starts on one machine: the web app, the database, and the cache all run on the same server.',
      },
      { kind: 'h3', text: 'Request flow' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'The user visits a domain name. DNS — usually a paid third-party service, not something you host — resolves it.',
          'DNS returns the server’s IP address to the browser or mobile app.',
          'The client sends HTTP requests straight to that IP.',
          'The server responds with HTML for the browser to render, or JSON for an app.',
        ],
      },
      { kind: 'h3', text: 'Where traffic comes from' },
      {
        kind: 'defs',
        items: [
          {
            term: 'Web application',
            text: 'Server-side code handles business logic and storage; HTML and JavaScript handle presentation.',
          },
          {
            term: 'Mobile application',
            text: 'Talks to the server over HTTP, usually exchanging JSON because it is simple and lightweight.',
          },
        ],
      },
    ],
  },
  {
    id: 'database',
    title: 'Separate the database',
    blocks: [
      {
        kind: 'p',
        text: 'As users grow, split the single box into a ==web tier== and a ==data tier==. Each can now be scaled independently.',
      },
      {
        kind: 'defs',
        items: [
          {
            term: 'Relational (SQL)',
            text: 'Data in tables and rows, with joins across tables. MySQL, PostgreSQL, Oracle.',
          },
          {
            term: 'Non-relational (NoSQL)',
            text: 'Four families — key-value, graph, column, and document stores. Cassandra, DynamoDB, HBase, CouchDB, Neo4j. Joins are generally not supported.',
          },
        ],
      },
      {
        kind: 'p',
        text: 'Relational is the sensible default: it has worked well for over 40 years. Reach for NoSQL when:',
      },
      {
        kind: 'list',
        items: [
          'You need very low latency.',
          'Your data is unstructured or has no real relationships.',
          'You only serialise and deserialise data (JSON, XML, YAML).',
          'You need to store a massive amount of data.',
        ],
      },
    ],
  },
  {
    id: 'load-balancer',
    title: 'Scale out behind a load balancer',
    blocks: [
      {
        kind: 'defs',
        items: [
          {
            term: 'Vertical (scale up)',
            text: 'Add CPU and RAM to one server. Simple and fine at low traffic, but there is a hard ceiling — and no failover: if that server dies, so does the site.',
          },
          {
            term: 'Horizontal (scale out)',
            text: 'Add more servers to a pool. The better fit for large systems.',
          },
        ],
      },
      {
        kind: 'p',
        text: 'A load balancer spreads incoming traffic across the web servers. Users connect to the ==load balancer’s public IP==; the servers sit behind it on private IPs that the internet cannot reach.',
      },
      {
        kind: 'list',
        items: [
          'If one server goes offline, traffic shifts to the others and a healthy replacement joins the pool.',
          'If traffic spikes, add servers to the pool — the load balancer starts sending them requests automatically.',
        ],
      },
    ],
  },
  {
    id: 'replication',
    title: 'Database replication',
    blocks: [
      {
        kind: 'p',
        text: 'One ==primary== database takes every write (insert, update, delete). ==Replicas== copy its data and serve reads. Most apps read far more than they write, so you usually run several replicas.',
      },
      {
        kind: 'defs',
        items: [
          { term: 'Performance', text: 'Reads are spread across replicas and run in parallel.' },
          {
            term: 'Reliability',
            text: 'Data lives in more than one place, so losing a server to a disaster does not lose the data.',
          },
          {
            term: 'Availability',
            text: 'The site keeps running when one database goes down.',
          },
        ],
      },
      { kind: 'h3', text: 'When a database fails' },
      {
        kind: 'list',
        items: [
          'A replica fails: reads go to the remaining replicas (or briefly to the primary) until a new replica replaces it.',
          'The primary fails: a replica is promoted. In practice it may be behind, so data-recovery scripts fill the gap. Multi-primary and circular replication exist but are more complex.',
        ],
      },
      { kind: 'h3', text: 'Request flow now' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'DNS returns the load balancer’s IP.',
          'The user connects to the load balancer.',
          'The request is routed to Web 1 or Web 2.',
          'Reads come from a replica; writes go to the primary.',
        ],
      },
    ],
  },
  {
    id: 'cache',
    title: 'Add a cache tier',
    blocks: [
      {
        kind: 'p',
        text: 'A cache keeps expensive or frequently requested results in memory. With a ==read-through== cache, the web server checks the cache first; on a miss it queries the database, stores the result, and returns it.',
      },
      {
        kind: 'p',
        text: 'A separate cache tier is faster than the database, takes load off it, and scales on its own.',
      },
      {
        kind: 'defs',
        items: [
          {
            term: 'When to cache',
            text: 'Data that is read often and changed rarely. Memory is volatile, so never treat the cache as the place data persists.',
          },
          {
            term: 'Expiration',
            text: 'Always set one. Too short and you hammer the database; too long and data goes stale.',
          },
          {
            term: 'Consistency',
            text: 'Database and cache writes are not one transaction, so they can drift — harder still across regions (see Facebook’s “Scaling Memcache”).',
          },
          {
            term: 'Failure',
            text: 'One cache server is a single point of failure. Run several across data centers and overprovision memory.',
          },
          {
            term: 'Eviction',
            text: 'When the cache is full, something has to go. LRU is the usual choice; LFU and FIFO suit other access patterns.',
          },
        ],
      },
    ],
  },
  {
    id: 'cdn',
    title: 'Serve static assets from a CDN',
    blocks: [
      {
        kind: 'p',
        text: 'A CDN is a network of geographically spread servers that cache static content — images, video, CSS, JavaScript. The server ==closest to the user== responds, so distance stops dictating load time.',
      },
      { kind: 'h3', text: 'How a CDN fills its cache' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'User A requests image.png from a URL on the CDN’s domain.',
          'On a miss, the CDN fetches it from the origin — a web server or object storage such as S3.',
          'The origin returns the file, optionally with a TTL header saying how long to cache it.',
          'The CDN caches it and returns it to User A.',
          'User B requests the same image and gets the cached copy, as long as the TTL has not expired.',
        ],
      },
      {
        kind: 'defs',
        items: [
          {
            term: 'Cost',
            text: 'You pay for data transfer, so don’t put rarely used assets on the CDN.',
          },
          {
            term: 'Expiry',
            text: 'Balance freshness against repeated fetches from the origin.',
          },
          {
            term: 'Fallback',
            text: 'If the CDN is down, clients should detect it and request from the origin.',
          },
          {
            term: 'Invalidation',
            text: 'Purge objects through the vendor’s API, or version them — image.png?v=2.',
          },
        ],
      },
      {
        kind: 'callout',
        label: 'Frontend note',
        text: 'Content-hashed filenames from Vite or webpack (app.3f9a1c.js) are object versioning built into the build: cache assets for a year and still ship updates instantly.',
      },
    ],
  },
  {
    id: 'stateless',
    title: 'Make the web tier stateless',
    blocks: [
      {
        kind: 'p',
        text: 'To scale the web tier freely, move state such as user sessions ==out of the servers== and into a shared store.',
      },
      {
        kind: 'defs',
        items: [
          {
            term: 'Stateful',
            text: 'A server remembers a client between requests, so every request from that user must reach the same server — sticky sessions. Adding or removing servers and handling failures both get harder.',
          },
          {
            term: 'Stateless',
            text: 'Any server can handle any request and fetches state from a shared data store (relational DB, Memcached/Redis, or NoSQL). Simpler, more robust, easier to scale.',
          },
        ],
      },
      {
        kind: 'p',
        text: 'With state out of the web tier, ==autoscaling== — adding or removing servers based on load — becomes straightforward. A NoSQL store is a common pick for sessions because it is easy to scale.',
      },
    ],
  },
  {
    id: 'data-centers',
    title: 'Multiple data centers',
    blocks: [
      {
        kind: 'p',
        text: 'For an international audience, run more than one data center. ==GeoDNS== routes each user to the nearest one; if one goes down, all traffic moves to a healthy one.',
      },
      {
        kind: 'defs',
        items: [
          {
            term: 'Traffic redirection',
            text: 'GeoDNS sends users to the right data center based on where they are.',
          },
          {
            term: 'Data sync',
            text: 'Each region may have its own databases and caches. Replicate data across data centers so a failover doesn’t land users where their data is missing — Netflix does this asynchronously.',
          },
          {
            term: 'Test & deploy',
            text: 'Test from multiple locations and use automated deployment to keep every data center consistent.',
          },
        ],
      },
    ],
  },
  {
    id: 'message-queue',
    title: 'Decouple with a message queue',
    blocks: [
      {
        kind: 'p',
        text: 'A message queue is a durable buffer for ==asynchronous== work. Producers publish messages; consumers subscribe and process them.',
      },
      {
        kind: 'p',
        text: 'Producers and consumers no longer have to be up at the same time — either side can be down while the other keeps working.',
      },
      {
        kind: 'callout',
        label: 'Example',
        text: 'Photo editing (crop, sharpen, blur) is slow. Web servers publish jobs to the queue, workers process them in the background, and the two scale independently: add workers when the queue grows, remove them when it’s empty.',
      },
    ],
  },
  {
    id: 'observability',
    title: 'Logging, metrics, automation',
    blocks: [
      {
        kind: 'p',
        text: 'Nice-to-haves for a small site become essential at this size.',
      },
      {
        kind: 'defs',
        items: [
          {
            term: 'Logging',
            text: 'Watch error logs per server, or aggregate them into one searchable service.',
          },
          {
            term: 'Metrics',
            text: 'Host level (CPU, memory, disk I/O), aggregated (the whole database or cache tier), and business (daily active users, retention, revenue).',
          },
          {
            term: 'Automation',
            text: 'Continuous integration verifies every check-in; automated build, test, and deploy keep a large team productive.',
          },
        ],
      },
    ],
  },
  {
    id: 'sharding',
    title: 'Shard the database',
    blocks: [
      {
        kind: 'p',
        text: 'Scaling the database up only goes so far. Big machines exist (Amazon RDS offers instances with 24 TB of RAM, and Stack Overflow ran on one primary in 2013), but hardware has limits, one server is a single point of failure, and powerful servers are expensive.',
      },
      {
        kind: 'p',
        text: '==Sharding== splits a database into smaller shards. Every shard has the same schema but holds different rows. A hash of the ==sharding key== picks the shard — for example user_id % 4.',
      },
      {
        kind: 'p',
        text: 'The key choice matters most: it must spread data evenly and let queries be routed to the right shard.',
      },
      {
        kind: 'defs',
        items: [
          {
            term: 'Resharding',
            text: 'A shard fills up from growth or uneven distribution, so the hash function changes and data moves. Consistent hashing eases this.',
          },
          {
            term: 'Celebrity problem',
            text: 'A hotspot key overloads one shard. Give very hot keys their own shard, possibly partitioned further.',
          },
          {
            term: 'Joins',
            text: 'Cross-shard joins are hard, so data is often denormalised to keep queries within a single table.',
          },
        ],
      },
      {
        kind: 'p',
        text: 'Moving non-relational workloads into NoSQL stores takes further load off the relational tier.',
      },
    ],
  },
  {
    id: 'checklist',
    title: 'The scaling checklist',
    blocks: [
      {
        kind: 'p',
        text: 'Scaling is iterative. Beyond millions of users you keep tuning and split the system into smaller services. The foundations:',
      },
      {
        kind: 'list',
        items: [
          'Keep the web tier stateless.',
          'Build redundancy at every tier.',
          'Cache data as much as you can.',
          'Support multiple data centers.',
          'Host static assets on a CDN.',
          'Scale the data tier by sharding.',
          'Split tiers into individual services.',
          'Monitor the system and automate.',
        ],
      },
    ],
  },
  {
    id: 'cloud',
    title: 'On AWS and Azure',
    blocks: [
      {
        kind: 'p',
        text: 'Every building block above is vendor-neutral. On a cloud you rarely run them yourself: you rent a ==managed service== that does the job, and the provider handles patching, failover, and most of the scaling. Here is what each piece is called on the two biggest clouds, and when you actually need it.',
      },
      {
        kind: 'table',
        caption: 'The building blocks, mapped to AWS and Azure',
        head: ['Building block — use it when…', 'AWS', 'Azure'],
        rows: [
          [
            'DNS\nYou have a domain and need it to point at your servers',
            'Route 53',
            'Azure DNS',
          ],
          [
            'GeoDNS / global routing\nUsers are spread across regions and should reach the nearest one, or fail over when one goes down',
            'Route 53 latency, geolocation and failover routing',
            'Traffic Manager, or Front Door for HTTP',
          ],
          [
            'Web servers\nYou need somewhere to run the app (see “Choosing compute” below)',
            'EC2, ECS / EKS, Lambda, Elastic Beanstalk',
            'Virtual Machines, Container Apps / AKS, Functions, App Service',
          ],
          [
            'Load balancer\nYou run more than one web server, or need zero-downtime deploys',
            'Elastic Load Balancing: ALB (HTTP) or NLB (TCP/UDP)',
            'Application Gateway (HTTP) or Azure Load Balancer (TCP/UDP)',
          ],
          [
            'Relational database\nData has relationships, needs joins, or must be transactional (orders, payments, accounts)',
            'RDS (PostgreSQL, MySQL, SQL Server…) or Aurora',
            'Azure SQL Database, Azure Database for PostgreSQL / MySQL',
          ],
          [
            'Read replicas\nReads far outnumber writes and the primary is getting busy',
            'RDS / Aurora read replicas',
            'Read replicas in Azure SQL and Azure Database for PostgreSQL / MySQL',
          ],
          [
            'NoSQL database\nHuge scale with simple lookups by key, or a schema that keeps changing',
            'DynamoDB',
            'Cosmos DB',
          ],
          [
            'Cache\nThe same data is read over and over, and the database is the bottleneck',
            'ElastiCache (Valkey / Redis OSS / Memcached)',
            'Azure Managed Redis',
          ],
          [
            'Session store\nWeb servers must be stateless so any of them can serve any user',
            'ElastiCache or DynamoDB',
            'Azure Managed Redis or Cosmos DB',
          ],
          [
            'Object storage\nYou store files: uploads, images, backups, built frontend assets',
            'S3',
            'Blob Storage',
          ],
          [
            'CDN\nUsers are far from your servers, or you serve lots of static files',
            'CloudFront',
            'Front Door',
          ],
          [
            'Autoscaling\nTraffic rises and falls and you don’t want to pay for the peak all day',
            'EC2 Auto Scaling groups (built into Lambda and Fargate)',
            'Virtual Machine Scale Sets (built into Functions, Container Apps, App Service)',
          ],
          [
            'Multiple data centers\nA whole region going down must not take you offline',
            'Multiple Regions + Route 53 failover; Aurora Global Database, DynamoDB global tables',
            'Multiple regions + Front Door / Traffic Manager; Cosmos DB multi-region, SQL geo-replication',
          ],
          [
            'Message queue\nSlow work (emails, image processing, reports) shouldn’t make the user wait',
            'SQS',
            'Queue Storage, or Service Bus for richer features',
          ],
          [
            'Workers\nSomething needs to pick jobs off the queue and process them',
            'Lambda, or ECS tasks for long jobs',
            'Functions, or Container Apps jobs',
          ],
          [
            'Logging, metrics, alerts\nYou need to know something is wrong before your users tell you',
            'CloudWatch, with X-Ray for tracing',
            'Azure Monitor: Log Analytics, Application Insights',
          ],
          [
            'CI/CD\nEvery merge should be built, tested, and deployed automatically',
            'CodePipeline + CodeBuild (or GitHub Actions)',
            'Azure Pipelines (or GitHub Actions)',
          ],
          [
            'Sharding\nOne database can no longer hold the data or keep up with writes',
            'DynamoDB partitions automatically; Aurora Limitless Database for SQL',
            'Cosmos DB partitions by a key you choose; elastic clusters in Azure Database for PostgreSQL',
          ],
        ],
      },
      { kind: 'h3', text: 'Choosing between similar services' },
      {
        kind: 'defs',
        items: [
          {
            term: 'Choosing compute',
            text: '==Functions== (Lambda, Azure Functions) for short, spiky, event-driven work — you pay per run and never think about servers. ==Managed app platforms== (App Service, Elastic Beanstalk) for an ordinary web app you just want hosted. ==Containers== (ECS on Fargate, Container Apps; EKS / AKS when you need full Kubernetes) when the app is already in Docker or is several services. ==Virtual machines== only when you need full control of the OS.',
          },
          {
            term: 'Queue, topic, or stream?',
            text: 'A ==queue== (SQS, Service Bus queues) hands each job to exactly one worker. A ==topic== (SNS, Service Bus topics, Event Grid) sends one event to many listeners — “order placed” goes to billing, email, and analytics at once. A ==stream== (Kinesis, Event Hubs) is for huge volumes like clicks or telemetry that consumers read in order and can replay.',
          },
          {
            term: 'HTTP or network load balancer?',
            text: 'An HTTP (layer 7) balancer — ALB, Application Gateway — understands URLs, so it can send /api and /images to different servers, terminate TLS, and sit behind a web application firewall. A network (layer 4) balancer — NLB, Azure Load Balancer — just forwards connections: faster and works for any TCP/UDP traffic, but blind to what’s inside.',
          },
          {
            term: 'SQL or NoSQL?',
            text: 'Default to relational (RDS / Aurora, Azure SQL / PostgreSQL). Move a workload to DynamoDB or Cosmos DB when you know its access patterns up front and need near-unlimited scale with fast key lookups — not just because it sounds more scalable.',
          },
          {
            term: 'Global entry point',
            text: 'Front Door is a CDN, global load balancer, and web application firewall in one. On AWS the same job is usually CloudFront plus Route 53, with Global Accelerator for non-HTTP traffic.',
          },
        ],
      },
      {
        kind: 'callout',
        label: 'Rule of thumb',
        text: 'Don’t build the final diagram on day one. A small product runs fine on one managed app service, one managed database, and object storage behind a CDN. Add each piece above ==only when a real bottleneck shows up==.',
      },
    ],
  },
]

/** The diagram's last step; sections after it (checklist, cloud mapping) show the final design. */
export const finalStage = 11

/** The diagram stage shown for a given section. */
export function stageFor(sectionId: string): number {
  const index = stages.findIndex((s) => s.id === sectionId)
  if (index === -1) return 1
  return Math.min(index + 1, finalStage)
}
