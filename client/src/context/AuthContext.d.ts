interface User {
  email: string;
  name?: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

declare module '../context/AuthContext' {
  export const useAuth: () => AuthContextType;
} 