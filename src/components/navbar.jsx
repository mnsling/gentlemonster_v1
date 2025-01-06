import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useCart } from '../components/cartcontext';
import logo from '../assets/gm-logo.png';
import gcash from '../assets/gcash.png'
import maya from '../assets/maya.png'
import paypal from '../assets/paypal.png'
import close from '../assets/close.png'
import menu from '../assets/menu.png'
import search from '../assets/search.png'
import bag from '../assets/bag.png'

const Navbar = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const [showCartPrompt, setShowCartPrompt] = useState(false);
    const [checkoutError, setCheckoutError] = useState("");
    const [showCheckoutModal, setShowCheckoutModal] = useState(false); // New state for checkout modal
    const { cart, totalPrice, removeFromCart, clearCart } = useCart(); // Include clearCart

    const toggleSearch = () => setShowSearch(!showSearch);
    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const handleLoginClick = () => setShowLoginPrompt(true);
    const handleCloseAddPrompt = () => setShowLoginPrompt(false);
    const handleCartClick = () => setShowCartPrompt(true);
    const handleCloseCartPrompt = () => {
        setShowCartPrompt(false);
        setCheckoutError("");
    };

    const formatPrice = (price) => "₱" + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

    const handleCheckout = () => {
        if (cart.length === 0) {
            setCheckoutError("Your cart is empty. Add items to proceed to checkout.");
        } else {
            setShowCheckoutModal(true);
            setShowCartPrompt(false);
        }
    };

    const handleConfirmAndPay = () => {
        // Logic for confirming and paying
        console.log("Payment successful!");
        clearCart(); // Reset the cart
        setShowCheckoutModal(false);
        setShowCartPrompt(false);
    };

    return (
        <div className="fixed w-screen h-[5vh] bg-white font-poppins border-b border-gray-300 z-50">
            <div className="w-full h-full flex px-10 items-center">
                <div className="w-full flex justify-between items-center">
                    <div className='w-full flex justify-start md:hidden'>
                        <button onClick={toggleMenu}>
                            {menuOpen ? (
                                <img src={close} className="w-[3vw] h-[3vw]" alt="Close Menu" />
                            ) : (
                                <img src={menu} className="w-[3vw] h-[3vw]" alt="Menu" />
                            )}
                        </button>
                    </div>
                    <div className='w-full flex justify-center md:justify-start'>
                        <Link to="/" className="group">
                            <img src={logo} className="w-[36vw] md:w-[8vw]" alt="Logo" />
                        </Link>
                    </div>
                    <div className='w-full flex justify-end gap-2 md:hidden'>
                        <button onClick={toggleSearch}>
                            <img src={search} className='w-[3vw] h-[3vw]' />
                        </button>
                        <button onClick={handleCartClick}>
                            <img src={bag} className='w-[3vw] h-[3vw]' />
                        </button>
                    </div>
                </div>
                <div className="hidden w-full md:flex gap-8 justify-center text-[0.6vw]">
                    <Link to="/events" className="group">
                        <span className="group-hover:translate-x-2 flex gap-1 button">
                            <h1 className="group-hover:opacity-100 opacity-0 transition-opacity button">🡢</h1>
                            <h1>EVENTS</h1>
                        </span>
                    </Link>
                    <Link to="/products" className="group">
                        <span className="group-hover:translate-x-2 flex gap-1 button">
                            <h1 className="group-hover:opacity-100 opacity-0 transition-opacity button">🡢</h1>
                            <h1>PRODUCTS</h1>
                        </span>
                    </Link>
                    <Link to="/collaborations" className="group">
                        <span className="group-hover:translate-x-2 flex gap-1 button">
                            <h1 className="group-hover:opacity-100 opacity-0 transition-opacity button">🡢</h1>
                            <h1>COLLABORATIONS</h1>
                        </span>
                    </Link>
                    <Link to="/stores" className="group">
                        <span className="group-hover:translate-x-2 flex gap-1 button">
                            <h1 className="group-hover:opacity-100 opacity-0 transition-opacity button">🡢</h1>
                            <h1>STORES</h1>
                        </span>
                    </Link>
                </div>
                <div className="hidden w-full md:flex gap-8 justify-end text-[0.6vw]">
                    <button className="group" onClick={toggleSearch}>
                        <span className="group-hover:translate-x-2 flex gap-1 button">
                            <h1 className="group-hover:opacity-100 opacity-0 transition-opacity button">🡢</h1>
                            <h1>SEARCH</h1>
                        </span>
                    </button>
                    <button className="group" onClick={handleLoginClick}>
                        <span className="group-hover:translate-x-2 flex gap-1 button">
                            <h1 className="group-hover:opacity-100 opacity-0 transition-opacity button">🡢</h1>
                            <h1>LOGIN</h1>
                        </span>
                    </button>
                    <button className="group cart-button" onClick={handleCartClick}>
                        <span className="group-hover:translate-x-2 flex gap-1 button">
                            <h1 className="group-hover:opacity-100 opacity-0 transition-opacity button">🡢</h1>
                            <h1>CART ({cart.length})</h1>
                        </span>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="fixed h-full w-full bg-white flex flex-col gap-40 z-40 md:hidden">
                    <ul className="w-full border-t">
                        <Link to="/" onClick={toggleMenu} className='w-full border-b px-10 py-2 text-[5vw] text-left flex justify-between hover:bg-black hover:text-white button'>
                            Home
                        </Link>
                        <Link to="/events" onClick={toggleMenu} className='w-full border-b px-10 py-2 text-[5vw] text-left flex justify-between hover:bg-black hover:text-white button'>
                            Events
                        </Link>
                        <Link to="/products" onClick={toggleMenu} className='w-full border-b px-10 py-2 text-[5vw] text-left flex justify-between hover:bg-black hover:text-white button'>
                            Products
                        </Link>
                        <Link to="/collaborations" onClick={toggleMenu} className='w-full border-b px-10 py-2 text-[5vw] text-left flex justify-between hover:bg-black hover:text-white button'>
                            Collaborations
                        </Link>
                        <Link to="/stores" onClick={toggleMenu} className='w-full border-b px-10 py-2 text-[5vw] text-left flex justify-between hover:bg-black hover:text-white button'>
                            Stores
                        </Link>
                    </ul>
                    <button className='w-full border-y px-10 py-2 text-[5vw] text-left flex justify-between hover:bg-black hover:text-white button' onClick={setShowLoginPrompt}>Login</button>
                </div>
            )}
            {showSearch && (
                <div className="w-full h-[14vw] md:h-[5vw] md:text-[2.3vw] py-3 px-10 bg-gray-100 border-y border-gray-300 text-[5.4vw] flex justify-between">
                    <input
                        type="text"
                        className="w-full rounded-lg tracking-tight outline-none bg-transparent"
                        placeholder="Search..."
                    />
                    <button className="hover:translate-x-2 button">🡢</button>
                </div>
            )}
            {showLoginPrompt && (
                <div className='flex fixed top-0 w-full h-full items-center justify-center bg-black bg-opacity-50 z-50'>
                    <div className='flex flex-col bg-white w-[70vw] lg:w-[50vw] h-[40vh] lg:flex-row rounded-md shadow-lg'>
                        <div className='h-[27vw] lg:h-full w-full lg:w-[15vw]'>
                            <div className='h-full w-full px-5 lg:pl-8 pt-10 pb-5 lg:py-10 flex flex-col gap-8 lg:gap-10 lg:border-r border-gray-300'>
                                <div className='w-full flex justify-between'>
                                    <h1 className='text-[2.5vw] lg:text-[0.8vw]'>CONNECT A WALLET</h1>
                                    <button onClick={handleCloseAddPrompt}><img src={close} className='flex w-[2.4vw] h-[2.4vw] lg:hidden hover:rotate-90 button' /></button>
                                </div>
                                <div className='flex lg:flex-col lg:gap-5 justify-between text-[0.6vw] font-semibold'>
                                    <button className='flex gap-3 items-center'>
                                        <img src={maya} className='w-[5vw] h-[5vw] lg:w-[2vw] lg:h-[2vw] rounded-md' />
                                        <h1 className='text-left text-[1.6vw] lg:text-[0.5vw]'>Maya Wallet</h1>
                                    </button>
                                    <button className='flex gap-3 items-center'>
                                        <img src={gcash} className='w-[5vw] h-[5vw] lg:w-[2vw] lg:h-[2vw] rounded-md' />
                                        <h1 className='text-left text-[1.6vw] lg:text-[0.5vw]'>GCash Wallet</h1>
                                    </button>
                                    <button className='flex gap-3 items-center'>
                                        <img src={paypal} className='w-[5vw] h-[5vw] lg:w-[2vw] lg:h-[2vw] rounded-md' />
                                        <h1 className='text-left text-[1.6vw] lg:text-[0.5vw]'>Paypal Wallet</h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-full bg-gray-50 rounded-md'>
                            <div className='h-full w-full px-5 lg:px-8 py-10 flex flex-col gap-8 lg:gap-10 border-r border-gray-300'>
                                <div className='w-full flex justify-between'>
                                    <h1 className='text-[2.5vw] lg:text-[0.8vw]'>WHAT IS A WALLET?</h1>
                                    <button onClick={handleCloseAddPrompt}><img src={close} className='hidden lg:flex w-[1vw] h-[1vw] hover:rotate-90 button' /></button>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex gap-5'>
                                        <div className='flex flex-col gap-4 lg:gap-8 w-full lg:w-[15vw]'>
                                            <h1 className='text-[1.6vw] lg:text-[0.7vw]'>A HOME FOR YOUR DIGITAL ASSETS</h1>
                                            <h1 className='text-[1.6vw] lg:text-[0.7vw]'>Self-custody is important. Wallets are changing the way we login, shop and interact with the web.</h1>
                                            <button className='w-full text-[1.4vw] lg:text-[0.6vw] py-1 bg-black text-white border border-white hover:bg-white hover:text-black hover:border-black button rounded-full'>GET A WALLET</button>
                                        </div>
                                        <div className='flex flex-col gap-4 lg:gap-8 w-full lg:w-[15vw]'>
                                            <h1 className='text-[1.6vw] lg:text-[0.7vw]'>A NEW WAY TO LOGIN</h1>
                                            <h1 className='text-[1.6vw] lg:text-[0.7vw]'>Login with a wallet of your choice, the safest ways to login in the digital age.</h1>
                                            <button className='w-full text-[1.4vw] lg:text-[0.6vw] py-1 bg-black text-white border border-white hover:bg-white hover:text-black hover:border-black button rounded-full'>LEARN MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showCartPrompt && (
                <div className="flex fixed top-0 w-full h-full items-center justify-end bg-black bg-opacity-50 z-50">
                    <div className="flex flex-col bg-white w-full h-full md:w-[20vw] shadow-lg gap-5">
                        <div className="px-10 h-[5vh] w-full border-b flex items-center justify-between lg:px-5">
                            <h1 className="text-[2.2vw] md:text-[0.6vw]">CART</h1>
                            <button onClick={handleCloseCartPrompt}>
                                <img
                                    src={close}
                                    className="w-[2vw] h-[2vw] lg:flex lg:w-[0.6vw] lg:h-[0.6vw] hover:rotate-90 button"
                                />
                            </button>
                        </div>
                        <div className="w-full h-full flex flex-col justify-between overflow-auto">
                            <div className="px-10 md:px-5 h-[80%] bg-white w-full overflow-y-auto hide-scrollbar">
                                {cart.length === 0 ? (
                                    <p className="h-full w-full flex items-center justify-center">
                                        Your cart is empty!
                                    </p>
                                ) : (
                                    cart.map((product, index) => (
                                        <div key={index} className="w-full h-[120px] md:h-[6vw] border rounded-md flex gap-5 mb-5">
                                            <div className="w-[35%] h-full bg-black bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }} />
                                            <div className="w-full flex flex-col justify-center gap-2">
                                                <div className="w-full flex flex-col justify-center gap-6">
                                                    <div className="flex justify-between w-full pr-5 font-poppins font-semibold text-[2.5vw] md:text-[0.7vw]">
                                                        <h1>{product.name}</h1>
                                                        <h1>{formatPrice(product.price)}</h1>
                                                    </div>
                                                </div>
                                                <div className="w-full flex justify-between pr-5">
                                                    <div className="flex flex-col gap-1 justify-between w-full pr-5 font-poppins text-[2.3vw] md:text-[0.6vw]">
                                                        <h1>Quantity: {product.quantity}</h1>
                                                    </div>
                                                    <button className="text-[2.3vw] md:text-[0.6vw] flex items-end hover:underline" onClick={() => removeFromCart(product.name)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            {checkoutError && (
                                <div className="text-red-500 px-10 md:px-5 text-[2.3vw] md:text-[0.6vw]">
                                    {checkoutError}
                                </div>
                            )}
                            <div className="h-fit w-full border-t">
                                <div className="w-full flex flex-col gap-5 px-10 md:px-5 pb-14 pt-3 text-[2.3vw] md:text-[0.6vw]">
                                    <div className="w-full flex justify-between font-medium">
                                        <h1>Subtotal</h1>
                                        <h1>{formatPrice(totalPrice)}</h1>
                                    </div>
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-black border text-white py-[0.2vw] text-[2.3vw] md:text-[0.6vw] border-white rounded-full hover:text-black hover:border-black hover:bg-white button"
                                    >
                                        CHECKOUT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showCheckoutModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
                    <div className="bg-white w-full h-full px-10 md:px-20 py-5 flex flex-col gap-10 md:gap-20">
                        <button onClick={() => setShowCheckoutModal(false)} className="text-left w-fit font-poppins text-[2.5vw] md:text-[0.7vw]">🡠 BACK</button>
                        <div className='w-full h-full'>
                            <h1 className="text-xl md:text-[3vw] font-extralight font-poppins mb-5 md:mb-16 w-full">YOUR CART.</h1>
                            <div className="h-full md:h-[60%] w-full">
                                <div className='flex flex-col gap-10 md:flex-row h-full w-full md:justify-between'>
                                    <div className='w-full md:w-[60%] h-[40%] md:h-full overflow-auto hide-scrollbar'>
                                        {(
                                            cart.map((product, index) => (
                                                <div key={index} className="h-[40%] md:h-[40%] w-full py-1 md:py-5">
                                                    <div className='w-full h-full flex'>
                                                        <div className="w-[30vw] md:w-[18%] h-full bg-black bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }} />
                                                        <div className='w-full flex flex-col justify-center px-5 text-[1vw] tracking-tight'>
                                                            <div className='flex justify-between items-end'>
                                                                <h1 className='font-light md:font-extralight text-[3vw] md:text-[1.5vw]'>{product.name}</h1>
                                                                <h1 className='font-light text-[2.2vw] md:text-[0.8vw]'>{formatPrice(product.price)}</h1>
                                                            </div>
                                                            <div className='flex justify-between pb-2 border-b font-light'>
                                                                <h1 className='text-[2.2vw] md:text-[0.8vw] flex items-end'>Quantity:</h1>
                                                                <h1 className='text-[2.2vw] md:text-[0.8vw] flex items-end'>x{product.quantity}</h1>
                                                            </div>
                                                            <h1 className='flex pt-2 text-[3vw] md:text-[1vw] font-semibold justify-end'>{formatPrice(product.quantity * product.price)}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                    <div className='w-full md:w-[30%] md:border-l border-black md:py-5 md:px-5'>
                                        <h1 className="text-xl md:text-[2vw] font-extralight font-poppins mb-5 w-full md:mb-10 md:pb-5 md:border-b">CART TOTALS.</h1>
                                        <div className='w-full flex flex-col gap-3 text-gray-500 pb-5 border-b border-black font-poppins'>
                                            <div className='w-full flex justify-between text-[2.5vw] md:text-[0.8vw]'>
                                                <h1>Item Total</h1>
                                                <p>{formatPrice(totalPrice)}</p>
                                            </div>
                                            <div className='w-full flex justify-between text-[2.5vw] md:text-[0.8vw]'>
                                                <h1>Shipping Fee</h1>
                                                <p>FREE</p>
                                            </div>
                                            <div className='w-full flex justify-between text-[2.5vw] md:text-[0.8vw]'>
                                                <h1>Tax</h1>
                                                <p>₱‌0.00</p>
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between pt-5 text-[2.8vw] md:text-[1vw] font-bold'>
                                            <h1>Total</h1>
                                            <h1>{formatPrice(totalPrice)}</h1>
                                        </div>
                                        <button onClick={handleConfirmAndPay} className="bg-black text-white py-3 mt-10 md:mt-20 w-full border hover:bg-white hover:text-black hover:border-black button">Confirm and Pay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Navbar;
