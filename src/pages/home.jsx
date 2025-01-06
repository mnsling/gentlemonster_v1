import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import tekken from '../assets/tekken.mp4';
import tekken2 from '../assets/tekken2.mp4';
import tekken3 from '../assets/tekken3.mp4';
import tekken4 from '../assets/tekken4.png';
import Time from '../components/time';
import gt from '../assets/gt.png';

const Home = () => {
    const [isResized, setIsResized] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isRightSectionVisible, setIsRightSectionVisible] = useState(false);

    const handleResize = () => {
        setIsFadingOut(true);

        setTimeout(() => {
            setIsResized(true);
        }, 500);

        setTimeout(() => {
            setIsRightSectionVisible(true);
        }, 1200);
    };

    return (
        <div className="h-screen w-full font-grotesk bg-white">
            <video className={`transition-all duration-500 ${isResized ? 'w-full h-[80%] md:w-[50%] md:h-full' : 'w-full h-full md:h-full'} object-cover`} src={tekken} autoPlay loop muted playsInline />
            <div className={`absolute top-0 left-0 transition-all duration-500 ${isResized ? 'w-full h-[80%] md:w-[50%] md:h-full' : 'w-full h-full md:h-full'} bg-black bg-opacity-50 z-0`} />
            <div className="absolute top-0 left-0 z-10 flex items-center justify-center h-full w-full text-white">
                {!isResized ? (
                    <div className={`h-fit w-full flex items-center transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="w-[40%] ml-[18vw]">
                            <Time />
                        </div>
                        <div className="hidden md:block w-full typewriter">
                            <h1 className="text-left text-xs">THINKING ABOUT THE FUTURE ...</h1>
                        </div>
                        <div className="w-full group">
                            <button onClick={handleResize}>
                                <h1 className="text-left text-xs">ENTER</h1>
                                <span className="group-hover:translate-x-2 flex gap-1 button text-xs">
                                    <h1 className="group-hover:opacity-100 opacity-0 transition-opacity button">🡢</h1>
                                    <h1>GENTLE MONSTER</h1>
                                </span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full md:flex overflow-auto hide-scrollbar">
                        <div
                            className={`sticky top-0 md:absolute flex flex-col gap-5 items-center justify-center w-full h-[80%] md:w-[50%] md:h-full text-center transition-all duration-700 ease-in-out md:z-50 ${isResized ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <img src={gt} className="w-[75vw] md:w-[35vw]" />
                            <p className="text-xs md:text-sm font-poppins mt-2 tracking-[0.01vw]">"Where high-fashion meets fierce gaming:<br /> Gentle Monster × Tekken 8."</p>
                            <Link to="/events" className="text-[1.8vw] md:text-xs px-12 py-1 bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black button rounded-full md:relative">VIEW ALL EVENTS</Link>
                        </div>
                        <div className={`sticky top-0 bg-white md:bg-transparent h-full w-full flex justify-end duration-200 ease-in ${isRightSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="w-full md:w-[50%] h-full flex pt-20 px-5">
                                <div className="w-full h-full flex flex-col overflow-y-auto hide-scrollbar">
                                    <div className="w-full h-[50vw] md:h-[30vw] flex flex-col gap-2 mb-[60vw] md:mb-[12vw]">
                                        <h1 className="text-xs font-semibold font-poppins text-black">① NEW PROJECT</h1>
                                        <div className="h-full w-full">
                                            {isRightSectionVisible && (
                                                <video className="w-full h-full object-cover" autoPlay loop muted>
                                                    <source src={tekken2} type="video/mp4" />
                                                </video>
                                            )}
                                        </div>
                                        <div className="w-full flex flex-col md:flex-row gap-5 justify-between text-black pt-5">
                                            <h1 className="w-full md:w-[40%] text-[6vw] md:text-[2vw] font-grotesk tracking-tight leading-[6vw] md:leading-[2vw]">
                                                ENTER THE WORLD<br/>OF GAMING
                                            </h1>
                                            <h1 className="w-full md:w-[50%] font-poppins text-[2.4vw] md:text-[0.7vw] text-left">
                                                Introducing the Gentle Monster × TEKKEN 8 project. Discover a creative collaboration that seamlessly blends reality with the gaming world. Immerse yourself in a unique fusion of cutting-edge design and iconic gaming culture.
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="w-full h-[50vw] md:h-[30vw] flex flex-col gap-2 mb-[60vw] md:mb-[12vw]">
                                        <h1 className="text-xs font-semibold font-poppins text-black">② POP-UP</h1>
                                        <div className="h-full w-full bg-black">
                                            {isRightSectionVisible && (
                                                <img src={tekken4} />
                                            )}
                                        </div>
                                        <div className="w-full flex flex-col md:flex-row gap-5 justify-between text-black pt-5">
                                            <h1 className="w-full md:w-[40%] text-[6vw] md:text-[2vw] font-grotesk tracking-tight leading-[6vw] md:leading-[2vw]">
                                                GENTLE MONSTER<br/>× TEKKEN 8 POP-UP
                                            </h1>
                                            <h1 className="w-full md:w-[50%] font-poppins text-[2.4vw] md:text-[0.7vw] text-left">
                                                The special TEKKEN Pop-up opens in Seoul, Tokyo, Shanghai, and Beijing, in celebration of the Gentle Monster × TEKKEN collaboration launching tomorrow. Explore the space inspired by Kazuya and try the AR photo booth to transform yourself into a unique, AI-powered TEKKEN 8 character.
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="w-full h-[50vw] md:h-[30vw] flex flex-col gap-2 mb-[60vw] md:mb-[12vw]">
                                        <h1 className="text-xs font-semibold font-poppins text-black">③ NEW ARRIVALS</h1>
                                        <div className="h-full w-full">
                                            {isRightSectionVisible && (
                                                <video className="w-full h-full object-cover" autoPlay loop muted>
                                                    <source src={tekken3} type="video/mp4" />
                                                </video>
                                            )}
                                        </div>
                                        <div className="w-full flex flex-col md:flex-row gap-5 justify-between text-black pt-5">
                                            <h1 className="w-full md:w-[40%] text-[6vw] md:text-[2vw] font-grotesk tracking-tight leading-[6vw] md:leading-[2vw]">
                                                KAZUYA MEETS<br/>WITH INFERNO
                                            </h1>
                                            <h1 className="w-full md:w-[50%] font-poppins text-[2.4vw] md:text-[0.7vw] text-left">
                                                When Kazuya, in full demon form, meets Inferno, he calmly pulls out a pair of Gentle Monster glasses, sliding them onto his glowing red eyes. Ignoring the flames, he strikes a pose, snapping selfies with a Mishima-branded phone. Inferno pauses, unsure whether to fight or admire Kazuya's impeccable demon style.</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
