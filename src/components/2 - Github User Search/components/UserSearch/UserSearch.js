import { useState } from "react";

function UserSearch({ onUserSearch }) {
  const [username, setUsername] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUserSearch(username);
    setUsername("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter user name"
        onChange={handleUsernameChange}
        required
      />
      <button>Search</button>
    </form>
  );
}

export default UserSearch;
