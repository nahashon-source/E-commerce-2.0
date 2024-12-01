import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileInfo from '../components/profile/ProfileInfo';
import OrderHistory from '../components/profile/OrderHistory';
import ChangePassword from '../components/profile/ChangePassword';

function Profile() {
  const [activeTab, setActiveTab] = useState('info');
  const { user } = useSelector((state) => state.auth);

  const tabs = [
    { id: 'info', label: 'Profile Information' },
    { id: 'orders', label: 'Order History' },
    { id: 'password', label: 'Change Password' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>
      
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-8">
        {activeTab === 'info' && <ProfileInfo user={user} />}
        {activeTab === 'orders' && <OrderHistory />}
        {activeTab === 'password' && <ChangePassword />}
      </div>
    </div>
  );
}

export default Profile;