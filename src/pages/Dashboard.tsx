import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  Users,
  Settings,
} from 'lucide-react';

// Dashboard components
import DashboardHome from '../components/dashboard/DashboardHome';
import Projects from '../components/dashboard/Projects';
import Subscriptions from '../components/dashboard/Subscriptions';
import Partners from '../components/dashboard/Partners';
//import Settings from '../components/dashboard/Settings';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Projects', href: '/dashboard/projects', icon: FileText },
  { name: 'Subscriptions', href: '/dashboard/subscriptions', icon: CreditCard },
  { name: 'Partners', href: '/dashboard/partners', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r">
              <div className="flex items-center flex-shrink-0 px-4">
                <span className="text-xl font-semibold">Dashboard</span>
              </div>
              <div className="mt-5 flex-grow flex flex-col">
                <nav className="flex-1 px-2 space-y-1">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <Icon className="mr-3 h-6 w-6" />
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Routes>
                <Route index element={<DashboardHome />} />
                <Route path="projects/*" element={<Projects />} />
                <Route path="subscriptions/*" element={<Subscriptions />} />
                {user?.role !== 'CUSTOMER' && (
                  <Route path="partners/*" element={<Partners />} />
                )}
                <Route path="settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
