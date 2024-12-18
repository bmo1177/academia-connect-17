import { User2, Code2, Hospital, Building2, ShoppingCart, Globe, Database, Calendar, Brain, Image, FileCheck, Code, Briefcase, Car, School, Network } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  supervisor: string;
  icon: any; // Lucide icon component
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Elaboration d'une Application Client-Serveur pour Sondage des Différents Besoins Publics des Citoyens",
    supervisor: "MEZOUG Karim",
    icon: User2,
    category: "Web Development"
  },
  {
    id: 2,
    title: "Elaboration d'une Application Client-Serveur pour Consultation Médicale à Distance",
    supervisor: "MEZOUG Karim",
    icon: Hospital,
    category: "Healthcare"
  },
  {
    id: 3,
    title: "Conception et réalisation d'un système de gestion des crèches",
    supervisor: "LAAREDJ Zohra",
    icon: Building2,
    category: "Management Systems"
  },
  {
    id: 4,
    title: "Conception et réalisation d'un système de gestion de la cantine scolaire",
    supervisor: "LAAREDJ Zohra",
    icon: Building2,
    category: "Management Systems"
  },
  {
    id: 5,
    title: "Gestion commerciale pour une entreprise langage windev 25",
    supervisor: "CHIKHAOUI Ahmed",
    icon: ShoppingCart,
    category: "Business"
  },
  {
    id: 6,
    title: "Réalisation d'un site Web WebDev",
    supervisor: "CHIKHAOUI Ahmed",
    icon: Globe,
    category: "Web Development"
  },
  {
    id: 7,
    title: "Outil Léger « LN-2-SQL » pour les Données Commerciales",
    supervisor: "BOUBEKEUR A.",
    icon: Database,
    category: "Data Tools"
  },
  {
    id: 8,
    title: "Outil Léger « LN-2-SQL » pour les Données de l'Education",
    supervisor: "BOUBEKEUR A.",
    icon: Database,
    category: "Data Tools"
  },
  {
    id: 9,
    title: "Outil Léger « LN-2-SQL » pour les Données de la Santé",
    supervisor: "BOUBEKEUR A.",
    icon: Database,
    category: "Data Tools"
  },
  {
    id: 10,
    title: "Conception et mise en place d'un générateur automatique d'emploi du temps par les graphes",
    supervisor: "ALEM Abdelkader",
    icon: Calendar,
    category: "Scheduling"
  },
  {
    id: 11,
    title: "Conception et mise en place d'un générateur automatique d'emploi du temps par les CSPs",
    supervisor: "ALEM Abdelkader",
    icon: Calendar,
    category: "Scheduling"
  },
  {
    id: 12,
    title: "Deploiment de Big data avec Hadoop pour exploitation d'images médicales",
    supervisor: "BELARBI Mostefa",
    icon: Brain,
    category: "Healthcare"
  },
  {
    id: 13,
    title: "Conception et réalisation d'un logiciel pour le service oncologie - hopital de Tiaret",
    supervisor: "BELARBI Mostefa",
    icon: Hospital,
    category: "Healthcare"
  },
  {
    id: 14,
    title: "Développement d'une application mobile à base de théorie de l'évidence Pour L'aide à la diagnostic et l'analyse des cancers du sang",
    supervisor: "BOUALEM Adda",
    icon: Brain,
    category: "Healthcare"
  },
  {
    id: 15,
    title: "Système d'évaluation et d'amélioration de la qualité des images médicales pour les diagnostics cliniques",
    supervisor: "BAGHDADI Mohamed",
    icon: Image,
    category: "Healthcare"
  },
  {
    id: 16,
    title: "Implémentation d'un algorithme de consensus pour les marchés publics",
    supervisor: "SI ABDELHADI Ahmed",
    icon: FileCheck,
    category: "Business"
  },
  {
    id: 17,
    title: "Système de réduction des biais cognitifs lors des revues de code source des travaux pratiques",
    supervisor: "Ammar Sabrina",
    icon: Code,
    category: "Education"
  },
  {
    id: 18,
    title: "Conception et développement d'une application de gestion des offres d'emploi",
    supervisor: "KOUADRIA Abderrahmane",
    icon: Briefcase,
    category: "Business"
  },
  {
    id: 19,
    title: "Vers une solution pour la gestion du stationnement à l'Université de Tiaret",
    supervisor: "HATTAB Noureddine",
    icon: Car,
    category: "Management Systems"
  },
  {
    id: 20,
    title: "Conception et réalisation d'un site web dynamique pour une école privée",
    supervisor: "BENGHENI Abdelmalek",
    icon: School,
    category: "Education"
  },
  {
    id: 21,
    title: "Network Automation using Python",
    supervisor: "BEKKAR Khaled",
    icon: Network,
    category: "Networking"
  }
];