import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-800"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-800"
              }
            >
              Cart ({itemCount})
            </NavLink>
            {user ? (
              <div className="flex items-center space-x-4">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-800"
                  }
                >
                  Profile
                </NavLink>
                <button
                  onClick={() => dispatch(logout())}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-800"
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
