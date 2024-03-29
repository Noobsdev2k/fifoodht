import React from "react";
import PropTypes from "prop-types";

// material ui core

// material ui icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import LoadedImage from "../../../LoadedImage";

import "./CartItem.scss";
import { Button } from "@mui/material";

function CartItem(props) {
  const { product, handleAddToFirestore, handleRemoveFromFirestore } = props;
  const { id, name, img, price, qnt } = product;

  const onHandleAddToFirestore = (type) => {
    handleAddToFirestore(product, type);
  };

  const onHandleRemoveFromFirestore = () => {
    handleRemoveFromFirestore(product);
  };

  return (
    <div id={id} className="cart-item">
      <div className="cart-item__img">
        <img src={LoadedImage(img)} alt="Cart product" />
      </div>

      <div className="cart-item__content">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__price">${price}</div>
        <div className="cart-item__handle">
          <Button onClick={() => onHandleAddToFirestore("decrease")}>
            <RemoveIcon />
          </Button>
          <span className="cart-item__qnt">{qnt}</span>
          <Button onClick={() => onHandleAddToFirestore("increase")}>
            <AddIcon />
          </Button>
        </div>
      </div>

      <Button
        onClick={() => onHandleRemoveFromFirestore()}
        className="cart-item__rm"
      >
        <DeleteOutlineIcon />
      </Button>
    </div>
  );
}

CartItem.propTypes = {
  cartProducts: PropTypes.object,
  handleAddToFirestore: PropTypes.func.isRequired,
  handleRemoveFromFirestore: PropTypes.func.isRequired,
};

export default CartItem;
