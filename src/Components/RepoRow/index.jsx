const RepoRow = ({ repo = {} }) => (
  <tr className="repo-row">
    <td>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        {repo.name}
      </a>
    </td>

    <td className="repo-row_repo-info">
      <span>Stars {repo.stargazers_count}</span>
      Forks {repo.forks_count}
    </td>
  </tr>
);
export default RepoRow;
