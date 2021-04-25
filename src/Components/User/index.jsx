const User = ({ user = {} }) => (
  <div className="flex flex-col w-72 user-page_user-info-block">
    <span>
      Login <strong>{user?.login}</strong>
    </span>
    <span>
      Followers <strong>{user?.followers}</strong>
    </span>
    <span>
      Following <strong>{user?.following}</strong>
    </span>
    <span>
      E-Mail <strong>{user?.email}</strong>
    </span>
    <span>
      Location <strong>{user?.location}</strong>
    </span>
    <span>
      User created <strong>{new Date().toUTCString(user?.created_at)}</strong>
    </span>
    <span>
      Bio <strong>{user?.bio}</strong>
    </span>
  </div>
);

export default User;
