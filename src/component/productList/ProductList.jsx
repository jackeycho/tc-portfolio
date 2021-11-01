import "./productList.css";
import Product from "../product/Product";
import { portfolio } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Writing & Inspiring</h1>
        <p className="pl-desc">
          I can share where I got the ideas for the five books I have being
          published, the backstory behind each, and how students can be idea
          hunters.
        </p>
      </div>
      <div className="pl-list">
        {portfolio.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
