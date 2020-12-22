import React from "react";
import { node, bool } from "prop-types";

import { container, box } from "./style";

const Modal = ({ show, custom, children }) => {
  if (!show) return null;

  return (
    <div className={container}>
      <div className={box(show)}>{custom && children}</div>
    </div>
  );
};

Modal.propTypes = {
  custom: bool,
  children: node,
  show: bool
};

Modal.defaultProps = {
  custom: false,
  children: null,
  show: false
};

export default Modal;
