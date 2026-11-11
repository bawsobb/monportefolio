import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Oumar Bamory",
  lastName: "Bengaly",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Systems, Network & Security Engineer · SecOps Specialist",
  avatar: "/images/avatar.jpg",
  email: "bawsobb@proton.me",
  location: "Africa/Bamako",
  locationLabel: "Bamako, Mali · GMT+0",
  languages: ["French", "English"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to my newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bawsobb",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/oumarbeng7",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  label: "Home",
  title: `${person.name} - Systems & Security Engineer`,
  description: `Portfolio of ${person.name}, expert in critical infrastructure and SecOps, 100% Remote-Ready.`,
  headline: <>{"Designing Resilient and Secure Infrastructures"}</>,
  ui: {
    status: "Remote-ready · Bamako, GMT+0",
    headlineLead: "Engineering infrastructures that are",
    headlineAccent: "resilient and secure",
    ctaProjects: "View my projects",
    ctaAbout: "About me",
    terminal: {
      role: "Systems, Network & Security Engineer · SecOps",
      certs: "MSc Networks & Telecom · Cisco CCNA · Network Security",
      status: "Remote-ready · GMT+0 · Solar + Fiber/4G",
    },
    stats: [
      { value: "10+", label: "client infrastructures monitored by the SOC" },
      { value: "99.9%", label: "target availability on the Multi-WAN backbone" },
      { value: "−50%", label: "unplanned service interruptions" },
    ],
    statsProjects: "documented case studies",
    expertise: { eyebrow: "Expertise", title: "Four technical pillars" },
    projects: { eyebrow: "Projects", title: "Recent case studies", all: "All projects" },
    blog: { eyebrow: "Blog", title: "Latest article", all: "All articles" },
    contact: {
      title: "An infrastructure or security project?",
      text: "Audit, monitoring, SOC, network redesign: let's talk about your needs.",
      email: "Email me",
    },
  },
  featured: {
    display: true,
    title: (
      <>
        Featured Project:{" "}
        <strong className="ml-4">
          {"Deployment of a Multi-tenant SOC (Wazuh & Zabbix)"}
        </strong>
      </>
    ),
    href: "/work",
  },
  subline: (
    <>
      SecOps and Network Infrastructure specialist, I design high availability solutions and security operations centers (SOC).
      {" Holding a Master's degree and CCNA certified, I guarantee total service continuity thanks to a 100% autonomous infrastructure (Solar & Fiber)."}
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>{"Based in Bamako (GMT+0), I operate critical infrastructures for national and international clients."}</p>
        <p>Result-oriented system and network engineer (Master's), specialized in cybersecurity, network administration, and IT infrastructure.</p>
        <p>{"Confirmed expertise in system audits according to international standards (ISO 27001, NIST) and in managing multi-client critical environments."}</p>
        <p>{"Specialized in the deployment and management of shared SOC architectures with Wazuh and Zabbix for proactive threat detection."}</p>
        <p>Proficiency in Windows/Linux server environments, virtualization (Proxmox, VMware), cloud security (Microsoft 365), asynchronous communication, and technical documentation (Markdown, Wiki, GLPI knowledge base).</p>
        <p>My lab is entirely powered by a solar system, guaranteeing 100% uptime for my remote operations.</p>
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "Sini-Tech / Technisol-Mali",
        timeframe: "August 2025 - Present",
        role: "Systems and Network Administrator",
        achievements: [
          <>{"Deployment of a centralized SOC via Wazuh and Zabbix for proactive threat detection across multiple client infrastructures."}</>,
          <>Management of Proxmox servers on HPE Proliant hardware for production environments.</>,
          <>Automation of software deployment via an OPSI server.</>,
          <>Manual and automated backups (NAS, Microsoft 365) with restoration tests.</>,
          <>IT Support and management of automated computer park (GLPI: ticket management, users, technicians, admins).</>,
          <>Monitoring & security via Wazuh, Bitdefender GravityZone, Suricata, MikroTik Winbox.</>,
          <>Administration of Microsoft 365 SharePoint, Entra ID, Azure AD, Exchange Online.</>,
          <>Implementation of network security policies, participation in technical audits, development of remediation procedures and documentation according to international standards and frameworks (ITIL, ISO9001, NIST)</>,
        ],
      },
      {
        company: "National Agency for Telehealth and Medical Informatics",
        timeframe: "2024 - August 2025",
        role: "Systems and Network Engineer",
        achievements: [
          <>Audit and securing of national health data according to ISO 27001 standards.</>,
          <>{ "Monitoring and hardening of critical infrastructures for telemedicine." }</>,
          <>Active participation in cybersecurity projects and IT infrastructure improvement</>,
          <>Implementation, configuration and maintenance of the database for the mobile health worker fleet across the entire national territory.</>,
          <>Creation and implementation of a VOIP server</>,
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education and Certifications",
    institutions: [
      {
        name: "SupManagement Mali",
        description: (
          <>
            Master's in Network, Systems, and Telecommunications Engineering
          </>
        ),
      },
      {
        name: "SupManagement Morocco",
        description: (
          <>
            Bachelor's in Network, Systems, and Telecommunications Engineering
          </>
        ),
      },
      {
        name: "Cisco Networking Academy",
        description: (
          <>
            Cisco CCNA Certification (Cisco Certified Network Associate) Enterprise Networking,
            Security, and Automation
          </>
        ),
      },
      {
        name: "Cisco Networking Academy",
        description: (
          <>
            Cisco Networking Academy Certification: Network Security
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Core Expertise & Technical Pillars",
    skills: [
      {
        title: "Security & SecOps",
        description: "Mastery of proactive monitoring and incident response. Expert in multi-tenant SIEM deployment (Wazuh).",
        badges: ["Wazuh", "Suricata", "Security Audit", "ISO 27001"]
      },
      {
        title: "Network Infrastructure",
        description: "Design of resilient backbones and transparent failover management (Starlink/Fiber) on MikroTik.",
        badges: ["MikroTik", "Cisco CCNA", "WireGuard", "Multi-WAN"]
      },
      {
        title: "Virtualization & Systems",
        description: "Administration of critical environments under Proxmox VE and VMware. Optimization of HPE ProLiant servers.",
        badges: ["Proxmox", "VMware", "Linux", "HPE ProLiant"]
      },
      {
        title: "Observability & Automation",
        description: "Proactive monitoring with Zabbix and system lifecycle automation via OPSI.",
        badges: ["Zabbix", "OPSI", "Python", "Docker"]
      }
    ]
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Security & Infrastructure Deep Dives",
  description: "Technical documentation, SecOps analyses and experience feedback on critical infrastructure administration.",
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
