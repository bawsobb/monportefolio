import { Logo } from "@/once-ui/components";
import { title } from "process";

const person = {
  firstName: "Oumar Bamory",
  lastName: "Bengaly",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Ingénieur Réseaux Systèmes et Télécommunications",
  avatar: "/images/avatar.jpg",
  email: "bawsobb@gmail.com",
  location: "Africa/Bamako", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "Anglais"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bawsobb",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/oumarbeng7",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
 // image: "/images/og/home.jpg",
  label: "Home",
  title: `Portfolio de ${person.name}`,
  description: `Portfolio de ${person.name}, ${person.role} passionné par le pentesting, la sécurité réseau et le cloud.`,
  headline: <>Sécurité, Réseaux, Innovation.</>,
  featured: {
    display: true,
    title: <>Projet Vedette: <strong className="ml-4">Audit de sécurité et tests d'intrusion dans un environnement réseau virtualisé à l'aide de pfSense et Kali Linux</strong></>,
  href: "/work/mon-premier-projet",
},
   
  subline: (
    <>
      Titulaire d'un Master en Ingénierie des Systèmes et Réseaux et de plusieurs Certifications comme le Cisco CCNA, je suis passionné par la sécurité des systèmes d'information et les technologies de pointe. J'utilise mes compétences pour concevoir des solutions robustes et sécurisées, tout en améliorant les performances et la fiabilité des infrastructures réseau.
      <br />Je me spécialise dans l’audit de sécurité, les tests d’intrusion et la modernisation d’infrastructures réseau.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `A propos – ${person.name}`,
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
        Je suis titulaire d'un Master Sécurité des Réseaux et Télécommunications. Je me passionne pour la cybersécurité, les environnements virtualisés, et le développement d’applications sécurisées. Actuellement, je travaille sur un projet de mémoire centré sur le pentesting et la remédiation des vulnérabilités d’un réseau d’entreprise.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiences Professionnelles",
    experiences: [
      {
        company: "Agence Nationale de Télésanté et d’Informatique Médicale",
        timeframe: "2024 - Actuellement",
        role: "Ingénieur Réseaux et Systèmes",
        achievements: [
          <>
            Audit et sécurisation du réseau informatique
          </>,
          <>
            Maintenance et surveillance des serveurs (optimisation des performances et détection d’incidents)
          </>,
          <>Gestion du parc informatique (mise en place de stratégies de gestion et d'amélioration)</>,
          <> Participation active aux projets de cybersécurité et 
          d’amélioration des infrastructures IT</>,
          <>Création et Mise en place d’un serveur VOIP</>
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formations et Certifications",
    institutions: [
      {
        name: "SupManagement Mali",
        description: <>Master en Ingénierie Réseaux, Systèmes et Télécommunications à l’Ecole Supérieure</>,
      },
      {
        name: "SupManagement Maroc",
        description: <>Licence en Ingénierie Réseaux, Systèmes et Télécommunications à l’Ecole Supérieure.</>,
      },
      {
        name: "Cisco Networking Academy",
        description: <>Certification Cisco CCNA (Cisco Certified Network Associate) Enterprise Networking, 
        Security, and Automation</>,
      },
      {
        name: "Cisco Networking Academy",
        description: <>Certification Cisco Networking Academy: Network Security</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences Techniques",
    skills: [
      {
        title: "Administration Système",
        description: <>Gestion des systèmes Linux et Windows, configuration de serveurs, virtualisation avec VMware et VirtualBox et conteneurisation Docker et LXC</>,
      },
      {
        title: "Sécurité des Réseaux",
        description: <>Pentesting (Kali Linux, Nmap, Nessus, IDS/IPS, Wireshark, Burp Suite), système de gestion des informations et des événements de sécurité (SIEM)</>,
      },
      {
        title: "IA & Prompt Engineering", 
        description: <>Utilisation de l'IA pour l'automatisation des tâches, la détection des anomalies et l'amélioration de la sécurité des systèmes</>,
      },
      {
        title: "Administration de Réseaux",
        description: <>Configuration et gestion de routeurs, commutateurs, pare-feu (Cisco, pfSense), VPN, VLAN, QoS, DHCP, DNS</>,
      },
      {
        title: "Développement d'Applications",
        description: <>Développement d'applications web et mobiles sécurisées, intégration de systèmes de sécurité dans les applications, utilisation de frameworks modernes (React, Node.js)</>,
      }
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
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
