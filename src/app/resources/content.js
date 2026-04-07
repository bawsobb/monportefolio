import { Logo } from "@/once-ui/components";
import { title } from "process";

const person = {
  firstName: "Oumar Bamory",
  lastName: "Bengaly",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Ingénieur Réseaux,Systèmes & Sécurité | Spécialiste SecOps", // Plus impactant
  avatar: "/images/avatar.jpg",
  email: "bawsobb@proton.me", // Mis à jour selon tes préférences de candidature
  location: "Africa/Bamako",
  languages: ["Français", "Anglais"],
};

const newsletter = {
  display: false,
  title: <>Abonnez-vous à ma newsletter</>,
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
  title: `${person.name} - Ingénieur Systèmes & Sécurité`,
  description: `Portfolio de ${person.name}, expert en infrastructures critiques et SecOps, 100% Remote-Ready.`,
  headline: <>{"Ingénieur d'Infrastructures Résilientes et Sécurisées"}</>,
  featured: {
    display: true,
    title: (
      <>
        Projet Vedette:{" "}
        <strong className="ml-4">
          {"Déploiement d'un SOC Multi-tenant (Wazuh & Zabbix)"}
        </strong>
      </>
    ),
    href: "/work",
  },
  subline: (
    <>
      Spécialiste SecOps et Infrastructures réseaux, je conçois des solutions de haute disponibilité et des centres de surveillance (SOC). 
      {" Titulaire d'un Master et certifié CCNA, je garantis une continuité de service totale grâce à une infrastructure 100% autonome (Solaire & Fibre)."}
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `À propos – ${person.name}`,
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
        {"Basé à Bamako (GMT+0), j'opère des infrastructures critiques pour des clients nationaux et internationaux."} <br />
        Ingénieur systèmes et réseaux (Master) orienté résultats, spécialisé en cybersécurité, administration réseau et infrastructures informatiques. <br />
        {"Expertise confirmée en audit de systèmes selon les référentiels internationaux (ISO 27001, NIST) et en gestion d'environnements critiques multi-clients."}<br /> 
        {"Spécialisé dans le déploiement et la gestion d'architectures SOC mutualisées avec Wazuh et Zabbix pour la détection proactive des menaces."} <br />
        Maîtrise des environnements serveurs Windows/Linux, de la virtualisation (Proxmox, VMware), de la sécurité du cloud (Microsoft 365), de la communication asynchrone et de la documentation technique (Markdown, Wiki, base de connaissances GLPI).<br />
        Mon laboratoire est entièrement alimenté par un système solaire, garantissant un uptime de 100% pour mes opérations à distance.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expériences Professionnelles",
    experiences: [
      {
        company: "Sini-Tech / Technisol-Mali",
        timeframe: "Août 2025 - Actuellement",
        role: "Administrateur Systèmes et Réseaux",
        achievements: [
          <>{"Déploiement d'un SOC centralisé via Wazuh et Zabbix pour la détection proactive des menaces sur plusieurs infrastructures clients."}</>,
          <>Gestion de serveurs Proxmox sur matériel HPE Proliant pour des environnements de production.</>,
          <>Automatisation du déploiement logiciel via un serveur OPSI.</>,
          <>Sauvegardes manuelles et automatisées (NAS, Microsoft 365) avec tests de restauration.</>,
          <>Support IT et Gestion du parc informatique automatisé (GLPI : gestion des tickets, utilisateurs, techniciens, admins).</>,
          <>Surveillance & sécurisation via Wazuh, Bitdefender GravityZone, Suricata, MikroTik Winbox.</>,
          <>Administration Microsoft 365 SharePoint, Entra ID, Azure AD, Exchange Online.</>,
          <>Mise en œuvre de politiques de sécurité réseau, participation aux audits techniques, élaboration de procédures de remédiation et documentations selon les normes et cadres internationaux (ITIL, ISO9001, NIST)</>,
        ],
      },
      {
        company: "Agence Nationale de Télésanté et d’Informatique Médicale",
        timeframe: "2024 - Août 2025",
        role: "Ingénieur Réseaux et Systèmes",
        achievements: [
          <>Audit et sécurisation des données de santé nationales selon les standards ISO 27001.</>,
          <>{ "Surveillance et durcissement d'infrastructures critiques pour la télémédecine." }</>,
          <>Participation active aux projets de cybersécurité et d&apos;amélioration des infrastructures IT</>,
          <>Implémentation, configuration et maintenance de la base de données de la flotte mobile des agents de santé sur toute l’étendue du territoire nationale.</>,
          <>Création et mise en place d&apos;un serveur VOIP</>,
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formations et Certifications",
    institutions: [
      {
        name: "SupManagement Mali",
        description: (
          <>
            Master en Ingénierie Réseaux, Systèmes et Télécommunications
          </>
        ),
      },
      {
        name: "SupManagement Maroc",
        description: (
          <>
            Licence en Ingénierie Réseaux, Systèmes et Télécommunications
          </>
        ),
      },
      {
        name: "Cisco Networking Academy",
        description: (
          <>
            Certification Cisco CCNA (Cisco Certified Network Associate) Enterprise Networking,
            Security, and Automation
          </>
        ),
      },
      {
        name: "Cisco Networking Academy",
        description: (
          <>
            Certification Cisco Networking Academy: Network Security
          </>
        ),
      },
    ],
  },
technical: {
        display: true,
        title: "Expertises & Piliers Techniques",
 skills: [
            {
                title: "Sécurité & SecOps",
                description: "Maîtrise de la surveillance proactive et de la réponse aux incidents. Expert en déploiement de SIEM multi-tenant (Wazuh).",
                badges: ["Wazuh", "Suricata", "Audit de sécurité", "ISO 27001"]
            },
            {
                title: "Infrastructures Réseaux",
                description: "Conception de backbones résilients et gestion du failover transparent (Starlink/Fibre) sur MikroTik.",
                badges: ["MikroTik", "Cisco CCNA", "WireGuard", "Multi-WAN"]
            },
            {
                title: "Virtualisation & Systèmes",
                description: "Administration d'environnements critiques sous Proxmox VE et VMware. Optimisation de serveurs HPE ProLiant.",
                badges: ["Proxmox", "VMware", "Linux", "HPE ProLiant"]
            },
            {
                title: "Observabilité & Automatisation",
                description: "Monitoring proactif avec Zabbix et automatisation du cycle de vie des systèmes via OPSI.",
                badges: ["Zabbix", "OPSI", "Python", "Docker"]
            }
        ]
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Security & Infrastructure Deep Dives",
  description: "Documentation technique, analyses SecOps et retours d'expérience sur l'administration d'infrastructures critiques.",
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
