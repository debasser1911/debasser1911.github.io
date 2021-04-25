import Header from "../Components/Header";

const MainLayout = ({ children = {} }) => (
  <>
    <Header />
    {children}
  </>
);

export default MainLayout;
