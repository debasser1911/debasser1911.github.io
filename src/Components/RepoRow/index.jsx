const RepoRow = ({ repo = {} }) => (
  <tr className="repo-row border-2 border-gray-200">
    <td className=" p-3 border-2 border-gray-200">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        {repo.name}
      </a>
    </td>

    <td className="repo-row_repo-info p-3">
      <strong>Stars &#11088; :</strong> <i>{repo.stargazers_count}</i>
      <br />
      <strong>Forks &#10542; :</strong> <i>{repo.forks_count}</i>
    </td>
  </tr>
);
export default RepoRow;
