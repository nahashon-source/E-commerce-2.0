// Simulated order data
const orders = [
  {
    id: 1,
    date: '2024-03-15T10:30:00Z',
    status: 'delivered',
    items: [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 99.99,
        quantity: 1,
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 2,
        name: 'Smart Watch',
        price: 149.99,
        quantity: 1,
        image: 'https://via.placeholder.com/300',
      },
    ],
    total: 249.98,
  },
  {
    id: 2,
    date: '2024-03-10T15:45:00Z',
    status: 'processing',
    items: [
      {
        id: 3,
        name: 'Laptop Backpack',
        price: 79.99,
        quantity: 1,
        image: 'https://via.placeholder.com/300',
      },
    ],
    total: 79.99,
  },
];

export const getOrders = () => {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orders);
    }, 1000);
  });
};