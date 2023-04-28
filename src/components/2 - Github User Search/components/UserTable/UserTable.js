function UserTable({ name, avatar }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Profile Picture</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>
            <img
              src={avatar}
              alt={name}
              style={{ width: "6rem", height: "6rem" }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserTable;
