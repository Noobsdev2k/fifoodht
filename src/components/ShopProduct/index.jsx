import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { AuthContext } from "../../contexts/AuthProvider";
import useFirestoreProducts from "../../hooks/useFirestoreProducts";

// lazy load img js
import { LazyLoadImage } from "react-lazy-load-image-component";

// lazy load img css
import "react-lazy-load-image-component/src/effects/blur.css";

// material ui icons
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RoomIcon from "@mui/icons-material/Room";

import ToastMessage from "../ToastMessage";

import "./styles.scss";

function ShopProduct(props) {
  const { id, name, img, dsc, price, rate, country, openDialog, moveToTop } =
    props;

  const params = useParams();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { addToFirestore } = useFirestoreProducts();

  const handleAddToFirestore = (type) => {
    const productInfo = { id, name, img, dsc, price, rate, country };

    if (!user) {
      openDialog();
      return;
    }

    addToFirestore(user.uid, {
      type,
      productInfo,
      action: "increase",
    });
    ToastMessage(type);
  };

  const handleToDetail = (id) => {
    navigate(`/shop/${params.name}/${id}`);
    moveToTop && moveToTop();
  };

  return (
    <div id={id} className="shop-product">
      <div
        onClick={() => handleToDetail(id)}
        className="shop-product__img-wrapper"
      >
        <LazyLoadImage
          effect="blur"
          src={img}
          className="shop-product__img"
          alt={name}
          width="100%"
          height="100%"
        ></LazyLoadImage>
        <div className="shop-product__rate">
          <StarIcon />
          <span>{rate}</span>
        </div>
      </div>

      <div onClick={() => handleToDetail(id)} className="shop-product__content">
        <div className="shop-product__name">{name}</div>
        <p className="shop-product__description">{dsc}</p>
        <div className="shop-product__row">
          <div className="shop-product__location">
            <RoomIcon />
            <span>{country}</span>
          </div>
          <div className="shop-product__price">${price}</div>
        </div>
      </div>

      <div className="shop-product__btns">
        <div
          onClick={() => handleAddToFirestore("wishlist")}
          className="shop-product__btn"
        >
          <FavoriteBorderIcon />
        </div>
        <div
          onClick={() => handleAddToFirestore("success")}
          className="shop-product__btn"
        >
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
      <div className="shop-product__label">Favourite</div>
    </div>
  );
}

ShopProduct.propsTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  dsc: PropTypes.string,
  price: PropTypes.number,
  rate: PropTypes.number,

  openDialog: PropTypes.func,
  moveToTop: PropTypes.func,
};

export default ShopProduct;
