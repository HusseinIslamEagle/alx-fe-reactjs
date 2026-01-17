import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // 1. Import Context

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // 2. Wrap components in Provider and pass value
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;