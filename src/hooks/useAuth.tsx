import { AxiosError } from 'axios';

import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from 'react';

import { api } from "../services/api";
import { toast } from 'react-toastify';

interface SignInCredentials {
  login: string;
  senha: string;
}

interface AuthContextData {
  user: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  signed: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem('@Letsfy:user');
    if (user) {
      return user;
    }
    return '';
  });

  let signed = !!user;

  const signIn = useCallback(async ({ login, senha }: SignInCredentials) => {
    try {
      const response = await api.post('/login', { login, senha });
      const token = response.data;

      localStorage.setItem('@Letsfy:token', token);
      localStorage.setItem('@Letsfy:user', login);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser(login);
      toast.success('Login realizado com sucesso!');
    } catch (err) {
      const error = err as AxiosError;
      if (error.response?.status === 401) {
        toast.warn('Erro ao fazer login!');
      } else {
        toast.error('Erro ao se comunicar com o servidor, tente mais tarde.');
      }
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Letsfy:token');
    localStorage.removeItem('@Letsfy:user');
    setUser('');
    toast.success('Logout realizado com sucesso!');
  }, []);

  return (
    <AuthContext.Provider
      value={{ 
        user, 
        signIn, 
        signOut, 
        signed 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

