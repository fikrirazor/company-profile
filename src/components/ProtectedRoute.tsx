import { Navigate, Outlet } from "react-router";
import { useUserStore } from "@/store/user-store";

type ProtectedRouteProps = {
  redirectTo?: string;
  children?: React.ReactNode;
};

const ProtectedRoute = ({ redirectTo = "/login", children }: ProtectedRouteProps) => {
  const { user, userToken } = useUserStore();

  if (!user || !userToken) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
