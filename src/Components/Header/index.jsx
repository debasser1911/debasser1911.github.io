import { useRedirect } from "../../utils/hooks";

const Header = () => {
  let redirect = useRedirect();

  return (
    <header className="h-20 shadow-md">
      <div className="container flex justify-center items-center h-full">
        <h1
          className="text-center text-2xl cursor-pointer"
          onClick={() => redirect("/")}
        >
          Github searcher
        </h1>
      </div>
    </header>
  );
};
export default Header;
