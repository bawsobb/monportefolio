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
  title: `Bienvenue sur le portfolio de ${person.name}`,
  description: `Portfolio de ${person.name},un passionné de sécurité et d'administration reseaux et systemes.`,
  headline: <>Sécurité, Réseaux, Innovation.</>,
  featured: {
    display: true,
    title: (
      <>
        Projet Vedette:{" "}
        <strong className="ml-4">
          Audit de sécurité et tests d&apos;intrusion dans un environnement réseau virtualisé à
          l&apos;aide de pfSense et Kali Linux
        </strong>
      </>
    ),
    href: "/",
  },
  subline: (
    <>
      &quot;Titulaire d&apos;un Master en Ingénierie des Systèmes et Réseaux et de plusieurs
      Certifications comme le Cisco CCNA, je suis passionné par la sécurité des systèmes
      d&apos;information et les technologies de pointe. J&apos;utilise mes compétences pour
      concevoir des solutions robustes et sécurisées, tout en améliorant les performances et la
      fiabilité des infrastructures réseau.
      <br />
      Je me spécialise dans l&apos;audit de sécurité, les tests d&apos;intrusion et la
      modernisation d&apos;infrastructures réseau.&quot;
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
        Je suis titulaire d&apos;un Master Sécurité des Réseaux et Télécommunications. Je me
        passionne pour la cybersécurité, les environnements virtualisés, et le développement
        d&apos;applications sécurisées. Actuellement, je travaille sur un projet de mémoire centré
        sur le pentesting et la remédiation des vulnérabilités d&apos;un réseau d&apos;entreprise.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expériences Professionnelles",
    experiences: [
      {
        company: "Agence Nationale de Télésanté et d’Informatique Médicale",
        timeframe: "2024 - Actuellement",
        role: "Ingénieur Réseaux et Systèmes",
        achievements: [
          <>Audit et sécurisation du réseau informatique</>,
          <>
            Maintenance et surveillance des serveurs (optimisation des performances et détection
            d&apos;incidents)
          </>,
          <>
            Gestion du parc informatique (mise en place de stratégies de gestion et
            d&apos;amélioration)
          </>,
          <>
            Participation active aux projets de cybersécurité et d&apos;amélioration des
            infrastructures IT
          </>,
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
            Master en Ingénierie Réseaux, Systèmes et Télécommunications à l&apos;École Supérieure
          </>
        ),
      },
      {
        name: "SupManagement Maroc",
        description: (
          <>
            Licence en Ingénierie Réseaux, Systèmes et Télécommunications à l&apos;École
            Supérieure.
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
    title: "Compétences Techniques",
    skills: [
      {
        title: "Administration Système",
        description: (
          <>
            Gestion des systèmes Linux et Windows, configuration de serveurs, virtualisation avec
            VMware et VirtualBox et conteneurisation Docker et LXC
          </>
        ),
      },
      {
        title: "Sécurité des Réseaux",
        description: (
          <>
            Pentesting (Kali Linux, Nmap, Nessus, IDS/IPS, Wireshark, Burp Suite), système de
            gestion des informations et des événements de sécurité (SIEM)
          </>
        ),
      },
      {
        title: "IA & Prompt Engineering",
        description: (
          <>
            Utilisation de l&apos;IA pour l&apos;automatisation des tâches, la détection des
            anomalies et l&apos;amélioration de la sécurité des systèmes
          </>
        ),
      },
      {
        title: "Administration de Réseaux",
        description: (
          <>
            Configuration et gestion de routeurs, commutateurs, pare-feu (Cisco, pfSense), VPN,
            VLAN, QoS, DHCP, DNS
          </>
        ),
      },
      {
        title: "Développement Applications",
        description: (
          <>
            Développement d&apos;applications web et mobiles sécurisées, intégration de systèmes de
            sécurité dans les applications, utilisation de frameworks modernes (React, Node.js)
          </>
        ),
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
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
