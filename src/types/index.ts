export interface User {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'PARTNER' | 'CUSTOMER';
  referralCode?: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  createdAt: string;
  updatedAt: string;
}

export interface Subscription {
  id: string;
  planId: string;
  plan: Plan;
  status: 'PENDING' | 'ACTIVE' | 'CANCELLED' | 'EXPIRED';
  paymentType: 'PARTIAL' | 'FULL';
  amountPaid: number;
  createdAt: string;
}

export interface Commission {
  id: string;
  amount: number;
  status: 'PENDING' | 'PAID' | 'CANCELLED';
  createdAt: string;
  subscription: Subscription;
}