import React from "react";

const Menu = () => {
  const menu = [
    {
      imgSrc:
        "https://images.pexels.com/photos/4342139/pexels-photo-4342139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "tasty and healthy",
      price: "$15.99",
      discountedPrice: "$20.99",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/4297856/pexels-photo-4297856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "delicious and filling",
      price: "$12.99",
      discountedPrice: "$16.99",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/5668866/pexels-photo-5668866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "mouth-watering",
      price: "$10.99",
      discountedPrice: "$14.99",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/2901214/pexels-photo-2901214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "hearty and comforting",
      price: "$14.99",
      discountedPrice: "$18.99",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/3931774/pexels-photo-3931774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "satisfying and flavorful",
      price: "$16.99",
      discountedPrice: "$22.99",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/3931425/pexels-photo-3931425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "crispy and fresh",
      price: "$9.99",
      discountedPrice: "$12.99",
    },
  ];

  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index}>
              <img src={item.imgSrc} alt="" />
              <h3>{item.name}</h3>
              <div className="price">
                {item.price} <span>{item.discountedPrice}</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
