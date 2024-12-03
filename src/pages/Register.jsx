// import React from 'react';
// import { Link } from 'react-router-dom';
// import RegisterForm from '../components/auth/RegisterForm';

// const Register = () => {
//   return (
//     <div className="max-w-lg mx-auto mt-10">
//       <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>
//       <RegisterForm />
//       <div className="mt-4 text-center">
//         <p className="text-sm">Already have an account? <Link to="/login" className="text-blue-500">Login here</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Register;







import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl space-y-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800">Create an Account</h2>
        <p className="text-lg text-center text-gray-600">Join our community to start your journey!</p>

        {/* Register Form */}
        <RegisterForm />

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 font-medium hover:text-blue-400 transition-colors duration-200">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
