import { useContext } from 'react'; // 1. Import Hook
import UserContext from './UserContext'; // 2. Import Context

function UserDetails() {
  // 3. Consume the context
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;