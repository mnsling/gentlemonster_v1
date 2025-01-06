import React, { useState, useEffect } from 'react';
import { eventsData, posts } from '../components/eventdata'; // Import eventsData and posts from the data file

function PostCard({ post }) {
  return (
    <div className="flex flex-col w-full md:w-[48%] xl:w-[32%] 2xl:w-[23.3%] gap-6 mb-[12vw] md:h-[60vw] md:mb-20 xl:mb-0 md:gap-3 xl:h-[40vw] xl:gap-6 2xl:h-[30vw]">
      {post.type === 'video' ? (
        <div className="w-full h-[80vw] md:h-[45vw] xl:h-[70%] 2xl:h-[20vw]">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src={post.media} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div
          className="w-full h-[80vw] md:h-[45vw] xl:h-[70%] 2xl:h-[20vw] bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${post.media})` }}
        />
      )}
      <h1
        className="text-[7vw] font-grotesk tracking-tighter leading-[6vw] md:text-[3vw] md:leading-[2.7vw] xl:text-[2.3vw] xl:leading-[2vw] 2xl:text-[1.8vw] 2xl:leading-[1.6vw]"
        dangerouslySetInnerHTML={{ __html: post.title }}
      />
      <p className="font-poppins leading-4 text-[2.4vw] md:text-[1.5vw] xl:text-[1vw] xl:leading-[1.4vw] 2xl:text-[0.65vw] 2xl:leading-[1vw]">
        {post.description}
      </p>
    </div>
  );
}

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(eventsData[0]); // Default to the first event
  const [fadeIn, setFadeIn] = useState(false); // Track fade-in animation state

  const handleEventChange = (index) => {
    setFadeIn(false); // Reset fade-in animation
    setTimeout(() => {
      setActiveEvent(eventsData[index]); // Change active event
      setFadeIn(true); // Trigger fade-in animation
    }, 300); // Small delay to allow reset
  };

  useEffect(() => {
    setFadeIn(true); // Initial fade-in on load
  }, []);

  return (
    <div className="h-screen w-full bg-white relative font-grotesk overflow-auto hide-scrollbar">
      <video
        className="w-full h-[70%] md:h-[90%] object-cover transition-all duration-500"
        src={activeEvent.vid}
        autoPlay
        loop
        muted
        playsInline
        key={activeEvent.id}
      />
      <div className="absolute top-0 left-0 w-full h-[70%] md:h-[90%] bg-black bg-opacity-50 flex flex-col justify-between transition-all duration-500">
        <div className="absolute top-20 left-0 flex gap-1 px-10 text-white font-poppins font-medium md:hidden">
          {eventsData.map((_, index) => (
            <button
              key={index}
              onMouseEnter={() => handleEventChange(index)}
              className={`text-[3vw] w-[6vw] h-[6vw] flex items-center justify-center rounded-full border-r-2 border-white hover:bg-white hover:text-black transition-colors duration-300 ${activeEvent.id === eventsData[index].id ? 'bg-white text-black' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <h1 className="text-white text-[12vw] leading-[10.5vw] pt-32 px-10 md:pt-20 md:text-[8vw] md:leading-[6.5vw] md:tracking-tighter transition-all">
          EVENTS
          <br />
          🡢CALENDAR
        </h1>
        <div className={`flex flex-col gap-3 text-white font-poppins px-10 pb-10 transition-opacity duration-500 md:hidden ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-[2.5vw]">{activeEvent.date}</h1>
          <h1 className="font-grotesk text-[6vw] tracking-tighter leading-[6vw]" dangerouslySetInnerHTML={{ __html: activeEvent.title }}></h1>
          <h1 className="text-[2.5vw]">{activeEvent.info}</h1>
          <button className="button w-full bg-white py-1 text-black font-grotesk text-[2vw] mt-5 rounded-full border border-black hover:bg-transparent hover:text-white hover:border-white">
            LEARN MORE
          </button>
        </div>

        <div className="hidden md:flex gap-10 px-10 justify-between pb-10">
          {eventsData.map((event, index) => (
            <div key={event.id} onMouseEnter={() => handleEventChange(index)} className="flex items-start gap-6 w-[22%] cursor-pointer">
              <div className={`text-white text-left flex flex-col gap-3 font-poppins opacity-50 hover:opacity-100 button ${activeEvent.id === event.id ? 'opacity-100' : ''}`}>
                <div className="text-[0.7vw]">{event.date}</div>
                <div className="text-[1.5vw] leading-[1.5vw] tracking-tight font-grotesk font-bold" dangerouslySetInnerHTML={{ __html: event.title }} />
                <div className="text-[0.7vw]">{event.info}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full flex flex-col hide-scrollbar">
        <div className="w-full h-[150vw] px-10">
          <h1 className="pt-20 pb-10 text-[8vw] font-poppins tracking-tighter md:text-[3vw]">🡢THE POST</h1>
          <div className="h-full w-full flex flex-wrap justify-between">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
