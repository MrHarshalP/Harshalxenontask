import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
              <ul>
                <li>
                  <strong>Unique Flavor Combinations</strong> Using unexpected
                  flavor combinations that work well together can make a dish
                  stand out and be memorable.
                </li>
                <li>
                  <strong>Fresh and High-Quality Ingredients</strong>: Using
                  fresh, high-quality ingredients that are locally sourced can
                  elevate the taste and quality of a dish.
                </li>
                <li>
                  <strong>Attention to Details</strong>: Careful attention to
                  detail in preparation, presentation, and plating can make a
                  dish visually appealing and enjoyable to eat.
                </li>
                <li>
                  <strong>Culinary Creativity</strong>: Innovative and creative
                  cooking techniques, such as molecular gastronomy or fusion
                  cuisine, can add an exciting element to a dish.
                </li>
              </ul>
            </p>

            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
