import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    const isLogin = true;
    if (isLogin) {
      navigate('/');
    }
  };

  return (
    <div className="h-screen flex  justify-center mt-30">
      <form
        onSubmit={handleSubmit}
        className="flex h-96  flex-col gap-5 bg-gray-50 shadow-lg p-10"
      >
        <label className="text-lg font-bold block">Email</label>
        <input
          className="border block border-gray-500 rounded-lg px-4 py-2 w-96"
          type="text"
        />
        <label className="text-lg font-bold block">Password</label>
        <input
          className="border block border-gray-500 rounded-lg px-4 py-2 w-96"
          type="password"
        />
        <button className="bg-sky-500 px-10 py-4 rounded-lg text-white font-semibold">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
