import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AuthContext } from "../../contexts/AuthProvider";
import { setIsAtCheckout } from "../Header/headerSlice";

// material ui icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// material ui core

import NotFoundImg from "../../assets/svgs/NotFound/404.svg";

import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

function NotFound() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { setHasHeader } = useContext(AuthContext);

  useEffect(() => {
    setHasHeader(false);
  }, []);

  const returnToHome = () => {
    const action = setIsAtCheckout(false);

    dispatch(action);
    navigate("/home");
  };

  return (
    <Container>
      <div className="not-found">
        <span className="not-found__caption">404</span>
        <h2 className="not-found__heading">Opps... Page not found</h2>
        <div className="not-found__img">
          <img src={NotFoundImg} alt="Not found" />
        </div>
        <div onClick={returnToHome} className="not-found__return">
          <ChevronLeftIcon />
          <span>Return to home</span>
        </div>
      </div>
    </Container>
  );
}

export default NotFound;
