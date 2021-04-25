import UserRow from "../UserRow";

const UsersTable = ({ users = [], loaderRef, totalUsers }) => (
  <>
    <div className="users-table flex flex-col items-center">
      <h2 className="text-2xl font-bold p-3">
        Total users found - {totalUsers}
      </h2>
      <table className="w-2/3 table-auto">
        <thead className="border-4 border-gray-500">
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Repos</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.length !== 0 &&
            users.map((user, index) => <UserRow key={index} user={user} />)}
        </tbody>
      </table>
    </div>
    {users?.length !== totalUsers && (
      <div className="loading" ref={loaderRef}>
        <h2>Loading...</h2>
      </div>
    )}
  </>
);

export default UsersTable;
