import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-container">
      <h1>OOPS! - {error.status}</h1>
      <h4>Something went wrong :(</h4>
    </div>
  );
};

export default Error;
