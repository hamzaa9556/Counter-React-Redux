import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store";

const Controls = () => {
  const addElement = useRef();

  const dispatch = useDispatch();
  const handleIncreament = () => {
    dispatch(counterAction.increament());
  };
  const handledecreament = () => {
    dispatch(counterAction.decreament());
  };
  const handleAdd = () => {
    dispatch(counterAction.add(addElement.current.value));
    addElement.current.value = "";
  };

  const handlesubtract = () => {
    dispatch(counterAction.subtract(addElement.current.value));
    addElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center gap">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncreament}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handledecreament}
        >
          -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center gap control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="input-width"
          ref={addElement}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          ADD
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={handlesubtract}
        >
          SUBSTRACT
        </button>
      </div>
    </>
  );
};
export default Controls;
