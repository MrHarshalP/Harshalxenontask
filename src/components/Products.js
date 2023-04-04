import React from "react";
import { product } from "../Data";

const Products = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>Famous products</span>
        </h1>

        <div className="box-container">
          {product.map((item, index) => (
            <div className="box" key={index}>
              <div className="icons">
                <a href="#" className="fas fa-shopping-cart"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
              <div className="image">
                {index === 0 && (
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8FdX8IyKqHxTDe9loUiRAgLweyagkQ3voA&usqp=CAU"
                    alt=""
                  />
                )}
                {index === 1 && (
                  <img
                    src="https://media.bakingo.com/squ-truffle-dark-cocoa-chocolate-pastry-past2500choc-E.jpg"
                    alt=""
                  />
                )}
                {index === 2 && (
                  <img
                    src="https://bakewithshivesh.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-24-at-9.58.19-PM-1.jpeg"
                    alt=""
                  />
                )}
              </div>
              <div className="content">
                <h3>{item.name}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                  {item.price} <span>{item.discountedPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
