const Error = ({ error = {} }) => (
  <h1 className="text-center text-3xl">
    Houston, we have a ploblem!
    <br />
    {error.status} {error.data?.message}
  </h1>
);

export default Error;
