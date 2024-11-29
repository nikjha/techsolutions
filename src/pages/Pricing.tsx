import { Check } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const plans = [
  {
    name: 'Starter',
    price: 999,
    description: 'Perfect for small businesses and startups',
    features: [
      'Single web application',
      'Basic hosting included',
      'Email support',
      '3 months free maintenance',
      'Basic analytics',
    ],
  },
  {
    name: 'Professional',
    price: 2499,
    description: 'Ideal for growing businesses',
    features: [
      'Web & mobile applications',
      'Premium hosting included',
      'Priority support',
      '6 months free maintenance',
      'Advanced analytics',
      'Custom integrations',
    ],
  },
  {
    name: 'Enterprise',
    price: 4999,
    description: 'For large-scale organizations',
    features: [
      'Multiple applications',
      'Enterprise hosting solutions',
      '24/7 dedicated support',
      '12 months free maintenance',
      'Custom analytics dashboard',
      'API development',
      'Security audits',
      'Team training',
    ],
  },
];

export default function Pricing() {
  const { user } = useAuth();
  const [billingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Pricing Plans</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">/{billingCycle}</span>
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {user ? (
                    <Link
                      to="/dashboard/subscribe"
                      state={{ plan }}
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                    >
                      Get Started
                    </Link>
                  ) : (
                    <Link
                      to="/register"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                    >
                      Sign Up
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}