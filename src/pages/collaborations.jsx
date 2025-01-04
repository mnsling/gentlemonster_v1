import React, { useState } from 'react';
import Sidebar from '../components/csidebar';
import { productDetails, productData } from '../components/collabdata';
import { useCart } from '../components/cartcontext';

const formatPrice = (price) => {
  return '₱' + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const Modal = ({ product, onClose }) => {

  // State to manage quantity
  const { updateCart } = useCart();
  const [showMessage, setShowMessage] = useState(false); // State for the "Added to Cart" message

  const handleAddToCart = (product, quantity = 1) => {
    updateCart(product, quantity); // Add product to the cart with quantity
    setShowMessage(true); // Show the "Added to Cart" message

    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

  if (!product) return null;

  const { images, details, description } = productDetails[product.name] || {};

  return (
    <div className="fixed top-[5vh] z-40 h-full w-full md:flex gap-5 bg-white overflow-y-auto hide-scrollbar">
      <div className="bg-white w-full h-[70%] flex gap-1 overflow-x-auto hide-scrollbar md:h-full md:w-[75%] transition-all duration-700 z-0">
        {images && images.map((image, index) => (
          <img key={index} src={image} className="w-full h-full" alt={`Image ${index + 1}`} />
        ))}
        <div className="absolute top-[61%] md:top-[80%] pb-10 px-10 font-poppins w-full flex flex-col justify-end">
          {details && details.slice(0, 3).map((detail, index) => (
            <h1 key={index} className="text-[2vw] md:text-[0.6vw]">{detail}</h1>
          ))}
        </div>
      </div>
      <div className="bg-white md:mt-0 py-10 px-10 w-full h-full sticky flex flex-col items gap-10 md:gap-32 md:w-[25%] md:pr-10 md:pl-5 md:items-start md:pt-10 overflow-y-auto hidescrollbar">
        <button onClick={onClose} className="text-left w-fit font-poppins text-[2.5vw] md:text-[0.7vw]">🡠 BACK</button>
        <div className="flex flex-col gap-10">
          <div className="w-full flex flex-col gap-3">
            <div className="leading-[7vw] md:leading-[1.6vw]">
              <h1 className="text-[7vw] font-grotesk tracking-tighter md:text-[2vw]">{product.name}</h1>
              <h1 className="text-[3vw] font-grotesk tracking-tighter md:text-[0.8vw]">{formatPrice(product.price)}
              </h1>
            </div>
            <button
              className="font-poppins text-[2.4vw] md:text-[0.65vw] px-16 py-[0.5vw] md:py-[0.2vw] text-white bg-black border w-full hover:bg-white hover:text-black hover:border-black button rounded-full"
              onClick={() => handleAddToCart(product, 1)}
            >
              ADD TO CART
            </button>
            {showMessage && (
              <p className="text-green-500 font-poppins text-[2vw] md:text-[0.6vw]">Added to Cart!</p>
            )}
          </div>
          <div className="flex flex-col gap-20 md:gap-10">
            <p className="text-[2.5vw] font-poppins text-justify md:text-[0.6vw]">{description}</p>
            <div className="flex flex-col gap-5">
              <p className="text-[2.5vw] font-poppins text-justify md:text-[0.6vw]">PRODUCT DETAILS</p>
              <div className="flex flex-col gap-1 text-[2.3vw] md:text-[0.6vw] font-poppins pb-10 border-b border-gray-300">
                {details && details.map((detail, index) => (
                  <h1 key={index}>{detail}</h1>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ image, name, price, onClick }) => (

  <button
    className="relative w-[80.5vw] h-[90vw] flex flex-col gap-2 md:w-[18vw] md:h-[30vw] group z-10"
    onClick={onClick}
  >
    <div className="relative w-full h-[85%]">
      <img src={image} className="w-full h-full object-cover border border-gray-200" alt={name} />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="font-poppins text-[1.8vw] md:text-[0.5vw] px-16 py-1 bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black button rounded-full">
          SHOP
        </button>
      </div>
    </div>
    <div className="text-left">
      <h1 className="text-[2.5vw] font-poppins md:text-[0.8vw]">{name}</h1>
      <h1 className="font-poppins text-[2.3vw] md:text-[0.7vw]">  {formatPrice(price)}</h1>
    </div>
  </button>
);

const Products = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="h-screen w-screen bg-gray-100 flex">
      <Sidebar />
      <div className="w-full flex md:justify-end">
        <div className="flex flex-col px-10 md:px-10 gap-5 md:w-[85%]">
          <h1 className="w-full mt-32 text-[2.4vw] font-medium font-grotesk md:text-[0.8vw]">② SHOP-ALL</h1>
          <div className="flex flex-wrap gap-3 overflow-y-auto hide-scrollbar bg-gray-100">
            {productData.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </div>
      <Modal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Products;
