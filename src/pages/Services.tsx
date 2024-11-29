import { Code, Smartphone, Cloud, Users, Database, Lock } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Development'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    features: ['AWS', 'Azure', 'Google Cloud', 'Cloud Migration'],
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Database design, optimization, and management services.',
    features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup Solutions'],
  },
  {
    icon: Lock,
    title: 'Security Services',
    description: 'Comprehensive security solutions to protect your applications.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Authentication'],
  },
  {
    icon: Users,
    title: 'IT Consulting',
    description: 'Expert guidance on technology strategy and implementation.',
    features: ['Technology Assessment', 'Digital Strategy', 'Process Optimization', 'Team Training'],
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive software solutions for your business needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}