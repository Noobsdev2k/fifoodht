import { useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";

import { ApiContext } from "../../contexts/ApiProvider";
import { AuthContext } from "../../contexts/AuthProvider";

// material ui core

import Banner from "../../components/Banner";
import ShopFilters from "./components/ShopFilters";
import ShopContent from "./components/ShopContent";

import "./styles.scss";
import { Container } from "@mui/material";

function Shop() {
  const { setHasHeader } = useContext(AuthContext);

  const { name } = useParams();

  const location = useLocation();

  const { getProducts } = useContext(ApiContext);

  // when browser loaded get url to re-render
  window.addEventListener("load", () => {
    const params = location.search;
    if (params) {
      const paramsObj = JSON.parse(
        '{"' +
          decodeURI(
            params.substr(1).replace(/&/g, '","').replace(/=/g, '":"')
          ) +
          '"}'
      );
      getProducts(name, paramsObj);
    } else {
      getProducts(name);
    }
  });

  useEffect(() => {
    setHasHeader(true);
  }, [setHasHeader]);

  return (
    <section className="shop">
      <Banner />
      <Container>
        <div className="shop__container">
          <ShopFilters />
          <ShopContent />
        </div>
      </Container>
    </section>
  );
}

export default Shop;
