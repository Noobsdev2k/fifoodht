import PropTypes from "prop-types";

// material ui core

import "./styles.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Dialog(props) {
  const { isShow, setIsShow } = props;

  const navigate = useNavigate();

  const hideDialog = () => {
    setIsShow(false);
  };

  const moveToLogin = () => {
    setIsShow(false);
    navigate("/login");
  };

  return (
    <div className={isShow ? "dialog show" : "dialog"}>
      <div onClick={hideDialog} className="dialog__overlay"></div>
      <div className="dialog__wrapper">
        <h2 className="dialog__title">Join with us 🚀</h2>
        <p className="dialog__description">
          You are not signed in. Please sign in to use this feature!
        </p>
        <div className="dialog__btns">
          <Button onClick={hideDialog} className="dialog__btn">
            Cancle
          </Button>
          <Button
            onClick={moveToLogin}
            variant="contained"
            color="primary"
            className="dialog__btn"
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}

Dialog.propsTypes = {
  isShow: PropTypes.bool,
  setIsShow: PropTypes.func,
};

export default Dialog;
