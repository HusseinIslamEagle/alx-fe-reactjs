import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchUserData(
        username,
        location,
        minRepos
      );
      setUsers(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-4"
      >
        <input
          type="text"
          placeholder="GitHub username"
          className="border p-2 w-full mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="border p-2 w-full mb-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          className="border p-2 w-full mb-2"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && (
        <p className="text-red-500">
          Looks like we cant find the user
        </p>
      )}

      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center border-b py-2"
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="font-bold">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Search;
