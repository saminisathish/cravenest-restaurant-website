import {
  createContext,
  useContext,
  useState,
  ReactNode
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  signup: (data: {
    name: string;
    email: string;
    phone: string;
    password: string;
  }) => Promise<void>;

  logout: () => void;

  isAuthenticated: boolean;
}

const AuthContext =
  createContext<AuthContextType | undefined>(
    undefined
  );

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [user, setUser] =
    useState<User | null>(null);

  const login = async (
    email: string,
    password: string
  ) => {

    // Mock Login Delay
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    // ADMIN LOGIN
    if (
      email === "admin@cravenest.com" &&
      password === "admin123"
    ) {

      setUser({
        id: "admin-1",
        name: "CraveNest Admin",
        email: "admin@cravenest.com",
        isAdmin: true,
      });

    } else {

      // NORMAL USER LOGIN
      setUser({
        id: "user-1",
        name: "Guest User",
        email,
        isAdmin: false,
      });

    }
  };

  const signup = async (data: {
    name: string;
    email: string;
    phone: string;
    password: string;
  }) => {

    // Mock Signup Delay
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    setUser({
      id: "user-" + Date.now(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      isAdmin: false,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >

      {children}

    </AuthContext.Provider>

  );
}

export function useAuth() {

  const context =
    useContext(AuthContext);

  if (!context) {

    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
}