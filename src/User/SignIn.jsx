import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { login } from "../service/api.service";
import { loginUser } from "../action/action";
import { useDispatch } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const Login = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email,
        password,
      };
      dispatch(loginUser(payload));
      alert("success");
      // return navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Invalid credentials error");
      }
    }
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    try {
      const login = await signInWithPopup(auth, provider);
      console.log(login.user);
      const payload = {
        email: login.user.email,
        password: "",
        is_google_loggin: true,
      };
      dispatch(loginUser(payload));
      navigate("/");
      alert("logged in");
    } catch (error) {
      alert("login cancelled");
      console.log(error);
    }
  };

  const logout = async () => {
    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center font-[Manrope]">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-medium mb-6">Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="loginEmail"
              name="loginEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign In
          </button>
          <button type="button" onClick={loginWithGoogle} className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">
            SignIn with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
