import { useSelector } from "react-redux";

const Body = () => {
  const counter = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter value : {counter}</p>;
};
export default Body;
