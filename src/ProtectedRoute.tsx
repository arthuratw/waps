import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";

  export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
  };
  
  export function ProtectedRoute({isAuthenticated, authenticationPath, outlet}: ProtectedRouteProps) {
    if(isAuthenticated || localStorage.getItem('waps')) {
      return outlet;
    } else {
      return <Navigate to={{pathname:authenticationPath}} />;
    }
  };
  