import { useEffect, useState } from 'react';
import { getOrders } from '../../services/orderService';
import { toast } from 'react-toastify'; // Assuming you are using react-toastify for notifications
import { Spinner } from 'react-bootstrap'; // Or any other spinner component
import { format } from 'date-fns'; // For better date formatting
import React from 'react';

const OrderItem = React.memo(({ item }) => (
  <li key={item.id} className="py-4 flex">
    <img
      src={item.image || '/path/to/fallback-image.png'}  // Fallback image
      alt={`Image of ${item.name}`} // Descriptive alt text
      className="h-16 w-16 object-cover rounded"
    />
    <div className="ml-4 flex-1">
      <p className="font-medium text-gray-900">{item.name}</p>
      <p className="text-sm text-gray-500">
        Quantity: {item.quantity}
      </p>
      <p className="text-sm text-gray-500">
        Price: ${item.price.toFixed(2)}
      </p>
    </div>
  </li>
));

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle the order status styling
  const getStatusClass = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (error) {
      setError('Could not retrieve orders');
      toast.error('Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Skeleton loader for better UX
  const renderSkeleton = () => (
    <div className="space-y-6">
      {Array(3).map((_, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-6 animate-pulse">
          <div className="flex justify-between items-center mb-4">
            <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
            <div className="h-6 w-16 bg-gray-300 rounded"></div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <ul className="divide-y divide-gray-200">
              {Array(2).map((_, idx) => (
                <li key={idx} className="py-4 flex">
                  <div className="h-16 w-16 bg-gray-300 rounded"></div>
                  <div className="ml-4 flex-1 space-y-2">
                    <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                    <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner animation="border" variant="primary" size="lg" />
        <p className="ml-2">Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
        <button
          onClick={fetchOrders}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Retry
        </button>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No orders found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div key={order.id} className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Order #{order.id}
              </h3>
              <p className="text-sm text-gray-500">
                Placed on {format(new Date(order.date), 'MMM dd, yyyy')}
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(order.status)}`}
            >
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <ul className="divide-y divide-gray-200">
              {order.items.map((item) => (
                <OrderItem key={item.id} item={item} />
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total</p>
              <p>${order.total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
