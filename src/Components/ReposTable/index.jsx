import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import RepoRow from "../RepoRow";
import SearchBar from "../SearchBar";
import "./_styles.scss";

const ReposTable = ({ user = null }) => {
  const [repositories, setRepositories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  const getReposAction = async (page) => {
    const response = await axios.get(`${user.repos_url}?page=${page}`);

    if (response.data) {
      setRepositories((prev) => [...prev, ...response.data]);
    }
  };

  useEffect(() => {
    (async () => {
      if (Object.keys(user).length) {
        getReposAction(page);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    setFiltered(repositories);
  }, [repositories]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      if (filtered.length < user.public_repos) {
        setPage((page) => {
          let newPage = page + 1;
          return newPage;
        });
      }
    }
  };

  useEffect(() => {
    if (loaderRef.current) {
      let options = {
        root: null,
        rootMargin: "50px",
        threshold: 1.0,
      };
      const observer = new IntersectionObserver(handleObserver, options);
      observer.observe(loaderRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaderRef.current]);

  useEffect(() => {
    (async () => {
      if (page > 1) {
        getReposAction(page);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (typeof searchString === "string" && repositories) {
      setFiltered(
        repositories.filter((repo) =>
          repo.name.toLowerCase().includes(searchString.toLowerCase())
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  return (
    <>
      <h3>Search in repositories list</h3>
      <SearchBar
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <Table>
        <thead>
          <tr>
            <th>Repository name</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {filtered?.map((repo, index) => (
            <RepoRow repo={repo} key={index} />
          ))}
        </tbody>
      </Table>
      {user?.public_repos !== filtered?.length && !searchString && (
        <div className="loading" ref={loaderRef}>
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
};

export default ReposTable;
