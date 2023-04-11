import React from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import "./Cart.scss";
const Cart = () => {
  const data = [
    {
      id: 1,
      image1:
        "https://images.pexels.com/photos/600195/pexels-photo-600195.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      image2:
        "https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Bag",
      desc:"description of this product should be very very very great good greatest the best you know ,you've never seen such a good product for sure,or...have you ever..the I guess this product is still the best product..don't miss this..",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      image1:
        "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1600",
      image2:
        "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Perfume",
      desc:"description of this product should be very very very great good greatest the best you know ,you've never seen such a good product for sure,or...have you ever..the I guess this product is still the best product..don't miss this..",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h2>Products In Your Cart</h2>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.image1} alt="" />
          <div className="details">
            <h3>{item.title}</h3>
            <p>{item.desc?.substring(0, 100)}</p>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              asperiores culpa molestiae modi, neque facilis voluptatem
              temporibus! Nobis dolore delectus laborum fugit quisquam. Incidunt
              ab qui, nemo illum reiciendis voluptate!
            </p> */}
            <div className="price">1 X ${item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className="deleteButton"/>
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        &nbsp;&nbsp;<span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">RESET CART</span>
    </div>
  );
};

export default Cart;
