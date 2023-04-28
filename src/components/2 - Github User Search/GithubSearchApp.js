import UserSearch from "./components/UserSearch/UserSearch";
import { useEffect, useState } from "react";
import UserTable from "./components/UserTable/UserTable";

const url = "https://api.github.com/users";

function GithubSearchApp() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUser("krutagna10");
  }, []);

  async function fetchUser(username) {
    setIsLoading(true);

    try {
      const response = await fetch(`${url}/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser({ name: data.name, avatar: data.avatar_url });
    } catch (error) {
      alert(`${error.name}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  function handleUserSearch(username) {
    fetchUser(username);
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <UserSearch onUserSearch={handleUserSearch} />
      <UserTable {...user} />
    </div>
  );
}

export default GithubSearchApp;
