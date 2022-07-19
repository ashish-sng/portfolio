import "./productList.css";
import { products } from "../../data";
import cryptoTracker from '../../img/cryptoTracker.png'
import inshorts from '../../img/inshorts.png'
import youtubeSearch from '../../img/youtubeSearch.png'
import jiit from '../../img/jiitWebsite.png'
import portfolio from '../../img/portfolio.png'
import "../product/product.css";


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Learn & Develop. It's Ashish</h1>
        <p className="pl-desc">
          Learning new technologies and creating something to help someone has always been a hobby. Still a long way to go. Below are some personal projects pictures that contain websites and apps pictures made by me.
        </p>
      </div>
      <div className="pl-list">
          <div className="p">
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <a href={products[0].link} target="_blank" rel="noreferrer">
              <img src={cryptoTracker} alt="" className="p-img" />
            </a>
          </div>
          <div className="p">
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <a href={products[1].link} target="_blank" rel="noreferrer">
              <img src={inshorts} alt="" className="p-img" />
            </a>
          </div>
          <div className="p">
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <a href={products[2].link} target="_blank" rel="noreferrer">
              <img src={youtubeSearch} alt="" className="p-img" />
            </a>
          </div>
          <div className="p">
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <a href={products[3].link} target="_blank" rel="noreferrer">
              <img src={jiit} alt="" className="p-img" />
            </a>
          </div>
          <div className="p">
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <a href={products[4].link} target="_blank" rel="noreferrer">
              <img src={portfolio} alt="" className="p-img" />
            </a>
          </div>
      </div>
    </div>
  );
};

export default ProductList;

// {/* {products.map((item) => (
//             <Product key={item.id} img={item.img} link={item.link} />
//           ))} */}