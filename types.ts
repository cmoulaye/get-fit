import type { ElementType } from 'react';

export interface Coach {
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
}

export interface Service {
  name: string;
  // FIX: Replaced 'React.ElementType' with 'ElementType' and added the necessary import to resolve the "Cannot find namespace 'React'" error.
  icon: ElementType;
}

export interface SubscriptionPlan {
  title: string;
  price: string;
  features: string[];
}
