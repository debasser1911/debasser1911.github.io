import { useHistory } from "react-router-dom";
import LoggedUser from "../../LoggedUser";
import { enableLogin } from "../../utils/constants";

const Header = () => {
  const history = useHistory();

  return (
    <header className="h-20 shadow-md">
      <div className="container flex justify-center items-center h-full">
        <h1
          className="text-center text-2xl cursor-pointer"
          onClick={() => history.push("/")}
        >
          Github searcher
        </h1>
        {enableLogin && <LoggedUser />}
      </div>
    </header>
  );
};
export default Header;
