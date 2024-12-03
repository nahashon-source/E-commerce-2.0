import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/cartSlice'; // Corrected import path
import { useState } from 'react';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity); // Local state for quantity input

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      setQuantity(newQuantity); // Update the local state first
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    } else if (newQuantity === 0) {
      setQuantity(1); // Avoid 0 or negative quantity
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 px-2 py-1 border rounded"
        />
        <button
          onClick={handleRemove}
          className="text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
