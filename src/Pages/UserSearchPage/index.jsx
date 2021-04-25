import { useEffect, useRef, useState } from "react";
import SearchBar from "../../Components/SearchBar";
import UsersTable from "../../Components/UsersTable";
import MainLayout from "../../Layout/MainLayout";
import { api } from "../../utils/api";

const UserSearchPage = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [page, setPage] = useState(1);
  const userSearchLoadRef = useRef(null);
  const [error, setError] = useState(null);

  const getUsersAction = async (searchString, page, isNewSearch = false) => {
    try {
      const response = await api().get(
        `/search/users?q=${searchString}&page=${page}`
      );
      if (response.data) {
        setTotalUsers(response.data.total_count);
        if (isNewSearch) {
          setUsers(response.data.items);
        } else {
          setUsers((prev) => [...prev, ...response.data.items]);
        }
      }
    } catch (e) {
      setError(e.response?.data?.message);
      console.log(error);
    }
  };

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      if (users.length < totalUsers) {
        setPage((page) => {
          let newPage = page + 1;
          return newPage;
        });
      }
    }
  };

  useEffect(() => {
    setSearchString(sessionStorage.getItem("search"));
  }, []);

  useEffect(() => {
    if (userSearchLoadRef.current) {
      let options = {
        root: null,
        rootMargin: "200px",
        threshold: 1.0,
      };
      const observer = new IntersectionObserver(handleObserver, options);
      observer.observe(userSearchLoadRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSearchLoadRef.current]);

  useEffect(() => {
    if (page > 1) {
      getUsersAction(searchString, page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (searchString) {
      setPage(1);
      getUsersAction(searchString, 1, true);
    } else {
      setUsers([]);
      setTotalUsers(0);
    }
    if (searchString !== null) {
      sessionStorage.setItem("search", searchString);
    }
  }, [searchString]);

  return (
    <MainLayout>
      <div className="container user-search-page mt-20">
        <SearchBar
          searchString={searchString}
          setSearchString={setSearchString}
          placeholder={"Please enter GitHub user name/login"}
        />
        <UsersTable
          users={users}
          loaderRef={userSearchLoadRef}
          totalUsers={totalUsers}
        />
      </div>
    </MainLayout>
  );
};
export default UserSearchPage;
