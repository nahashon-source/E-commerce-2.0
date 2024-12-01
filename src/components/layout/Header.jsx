import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/authSlice';

function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const { user } = useSelector(state => state.auth);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">
            ShopApp
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Products
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-gray-800">
              Cart ({itemCount})
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-gray-600 hover:text-gray-800">
                  Profile
                </Link>
                <button
                  onClick={() => dispatch(logout())}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-gray-800">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;