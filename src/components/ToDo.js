import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};
function mapDispatchToProps(dispatch, ownprops) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownprops.id)),
  };
}
export default connect(null, mapDispatchToProps)(ToDo);
