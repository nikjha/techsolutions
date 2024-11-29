import { useState, useEffect } from 'react';
import api from '../../lib/api';
import { formatPrice, formatDate } from '../../lib/utils';
import { toast } from 'react-hot-toast';

interface Partner {
  id: string;
  name: string;
  email: string;
  referralCode: string;
  commissions: {
    total: number;
    paid: number;
    pending: number;
  };
  referrals: number;
}

export default function Partners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const response = await api.get('/api/partners');
      setPartners(response.data);
    } catch (error) {
      toast.error('Failed to fetch partners');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePayCommission = async (partnerId: string) => {
    try {
      await api.post(`/api/partners/${partnerId}/pay-commission`);
      toast.success('Commission paid successfully');
      fetchPartners();
    } catch (error) {
      toast.error('Failed to process commission payment');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Partners</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Partner
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Referral Code
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total Referrals
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Commission
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {partners.map((partner) => (
              <tr key={partner.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {partner.name}
                      </div>
                      <div className="text-sm text-gray-500">{partner.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {partner.referralCode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {partner.referrals}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Total: {formatPrice(partner.commissions.total)}
                  </div>
                  <div className="text-sm text-gray-500">
                    Pending: {formatPrice(partner.commissions.pending)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {partner.commissions.pending > 0 && (
                    <button
                      onClick={() => handlePayCommission(partner.id)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Pay Commission
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}