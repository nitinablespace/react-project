// AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
  ReactNode,
} from "react";

export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  isLoading: boolean; // Loading state during initialization
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // On mount, initialize auth from localStorage
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedUser = localStorage.getItem("authUser");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Failed to initialize auth:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const persistUser = (userData: User | null) => {
    try {
      if (userData) {
        localStorage.setItem("authUser", JSON.stringify(userData));
      } else {
        localStorage.removeItem("authUser");
      }
    } catch (error) {
      console.error("Failed to persist user:", error);
    }
  };

  // Added dummy password parameter to match the type.
  const signIn = async (email: string) => {
    const mockUser: User = {
      id: crypto.randomUUID(),
      name: "John Doe",
      email,
    };
    setUser(mockUser);
    persistUser(mockUser);
  };

  const signUp = async (name: string, email: string) => {
    const mockUser: User = { id: crypto.randomUUID(), name, email };
    setUser(mockUser);
    persistUser(mockUser);
  };

  const signInWithGoogle = async () => {
    const mockUser: User = {
      id: "google_1",
      name: "Google User",
      email: "googleuser@example.com",
    };
    setUser(mockUser);
    persistUser(mockUser);
  };

  const signOut = () => {
    setUser(null);
    persistUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, signIn, signUp, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
