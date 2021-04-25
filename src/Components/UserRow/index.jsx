import { Link } from "react-router-dom";

const UserRow = ({ user = {} }) => (
  <tr className="user-row border-2 border-gray-200">
    <td className=" p-3 border-2 border-gray-200">
      <img className="w-28" src={user?.avatar_url} alt="avatar" />
    </td>
    <td className=" p-3 border-2 border-gray-200">
      <Link
        to={(location) => ({ ...location, pathname: `/user/${user?.login}` })}
      >
        <strong>{user?.login}</strong>
      </Link>
    </td>
    <td className=" p-3 border-2 border-gray-200">
      <a href={user?.repos_url} target="_blank" rel="noreferrer">
        User repositories page
      </a>
    </td>
  </tr>
);

export default UserRow;
