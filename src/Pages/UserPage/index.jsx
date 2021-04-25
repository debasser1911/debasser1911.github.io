import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../../Components/Error";
import ReposTable from "../../Components/ReposTable";
import User from "../../Components/User";
import MainLayout from "../../Layout/MainLayout";
import { api } from "../../utils/api";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const searchedUser = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      if (searchedUser) {
        try {
          const response = await api().get(`/users/${searchedUser.userLogin}`);
          setUser(response.data);
        } catch (e) {
          setError(e.response);
        }
      }
    })();
  }, [searchedUser]);

  return (
    <MainLayout>
      <div className="container flex flex-col user-page mt-20">
        {user ? (
          <>
            <div className="flex justify-evenly user-page-block">
              <img className="h-44" src={user.avatar_url} alt="avatar" />
              <User user={user} />
            </div>
            <ReposTable user={user} />
          </>
        ) : error ? (
          <Error error={error} />
        ) : (
          <h1 className="text-center text-3xl">Loading...</h1>
        )}
      </div>
    </MainLayout>
  );
};
export default UserPage;
