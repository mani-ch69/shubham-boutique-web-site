import { create } from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${API_URL}/auth/login`, { email, password });
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      set({ token, user, isAuthenticated: true, loading: false });
    } catch (err) {
      set({ error: err.response?.data?.message || 'Login failed', loading: false });
    }
  },

  register: async (userData) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${API_URL}/auth/register`, userData);
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      set({ token, user, isAuthenticated: true, loading: false });
    } catch (err) {
      set({ error: err.response?.data?.message || 'Registration failed', loading: false });
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ token: null, user: null, isAuthenticated: false });
  }
}));

export default useAuthStore;
