import { FaDumbbell, FaHeartbeat, FaUsers, FaSwimmingPool, FaSpa, FaUtensils } from 'react-icons/fa';
import { Coach, Service, SubscriptionPlan } from './types';

export const navLinks = [
  { href: '#home', label: 'Accueil' },
  { href: '#about', label: 'À Propos' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Coachs' },
  { href: '#gallery', label: 'Galerie' },
  { href: '#contact', label: 'Contact' },
];

export const services: Service[] = [
  { name: 'Musculation', icon: FaDumbbell },
  { name: 'Cardio Training', icon: FaHeartbeat },
  { name: 'Cours Collectifs', icon: FaUsers },
  { name: 'Piscine', icon: FaSwimmingPool },
  { name: 'Spa & Sauna', icon: FaSpa },
  { name: 'Nutrition', icon: FaUtensils },
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    title: 'Essentiel',
    price: '350 DHS/mois',
    features: [
      'Accès illimité à la salle',
      'Équipements de pointe',
      'Casier personnel',
      'Accès aux vestiaires',
    ],
  },
  {
    title: 'Premium',
    price: '500 DHS/mois',
    features: [
      'Tous les avantages Essentiel',
      'Accès à tous les cours collectifs',
      'Suivi personnalisé (1x/mois)',
      'Accès piscine',
    ],
  },
  {
    title: 'VIP',
    price: '750 DHS/mois',
    features: [
      'Tous les avantages Premium',
      'Coaching personnel illimité',
      'Accès Spa & Sauna',
      'Consultation nutritionnelle',
    ],
  },
];

export const coaches: Coach[] = [
  {
    name: 'Amine El Fassi',
    specialty: 'Musculation & Force',
    bio: 'Avec 10 ans d\'expérience, Amine vous aidera à dépasser vos limites et à sculpter le corps de vos rêves.',
    imageUrl: 'https://source.unsplash.com/400x500/?male,fitness,coach',
  },
  {
    name: 'Fatima Zahra',
    specialty: 'Yoga & Flexibilité',
    bio: 'Fatima vous guide vers l\'harmonie du corps et de l\'esprit à travers des séances de yoga dynamiques et relaxantes.',
    imageUrl: 'https://source.unsplash.com/400x500/?female,yoga,instructor',
  },
  {
    name: 'Youssef Benali',
    specialty: 'Cardio & Endurance',
    bio: 'Ancien athlète, Youssef conçoit des programmes cardio intenses pour booster votre endurance et votre santé cardiaque.',
    imageUrl: 'https://source.unsplash.com/400x500/?man,runner,portrait',
  },
  {
    name: 'Leila Alaoui',
    specialty: 'Nutrition & Bien-être',
    bio: 'Leila vous accompagne pour adopter une alimentation saine et équilibrée, clé de voûte de votre transformation.',
    imageUrl: 'https://source.unsplash.com/400x500/?female,nutritionist,portrait',
  },
];
