import create from 'zustand';
import axios from 'axios';
import { User } from '../types';

interface AuthState {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role?: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  loading: true,
  login: async (email, password) => {
    try {
      const { data } = await axios.post('/api/auth/login', { email, password });
      set({ user: data.user });
      localStorage.setItem('token', data.token);
    } catch (error) {
      throw error;
    }
  },
  register: async (name, email, password, role = 'CUSTOMER') => {
    try {
      const { data } = await axios.post('/api/auth/register', {
        name,
        email,
        password,
        role,
      });
      set({ user: data.user });
      localStorage.setItem('token', data.token);
    } catch (error) {
      throw error;
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null });
  },
  checkAuth: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        set({ loading: false });
        return;
      }
      const { data } = await axios.get('/api/auth/me');
      set({ user: data.user });
    } catch (error) {
      localStorage.removeItem('token');
    } finally {
      set({ loading: false });
    }
  },
}));