import { useState } from "react";

function useAuth() {
  const [isAuthenticated] = useState(true); // simulate login
  return { isAuthenticated };
}

export default useAuth;
