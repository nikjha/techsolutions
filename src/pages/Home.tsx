import { ArrowRight, Code, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight">
                Transform Your Business with Custom Software Solutions
              </h1>
              <p className="text-xl opacity-90">
                We help businesses and startups build powerful digital solutions that drive growth and innovation.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/services"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                >
                  Our Services
                </Link>
                <Link
                  to="/contact"
                  className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600">
            We deliver end-to-end solutions that help your business thrive
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Custom Development</h3>
            <p className="text-gray-600">
              Tailored solutions built specifically for your business needs
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <Rocket className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-600">
              Rapid development and deployment to get you to market faster
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Dedicated Support</h3>
            <p className="text-gray-600">
              24/7 support and maintenance for your peace of mind
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl opacity-90">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Pricing Plans <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}