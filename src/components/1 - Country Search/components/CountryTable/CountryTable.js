function CountryTable({ name, flags }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Country Name</th>
          <th>Country Flag</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name.common}</td>
          <td>
            <img src={flags.png} alt={flags.alt} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CountryTable;
