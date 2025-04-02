import { useSelector } from "react-redux";

const Body = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter value : {counterVal}</p>;
};
export default Body;
