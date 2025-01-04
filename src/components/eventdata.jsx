import tekken5 from '../assets/tekken5.mp4';
import tekken6 from '../assets/tekken6.mp4';
import tekken7 from '../assets/tekken7.mp4';
import tekken8 from '../assets/tekken8.mp4';
import post1 from '../assets/post1.jpg';
import post2 from '../assets/tekken7.mp4';
import post3 from '../assets/post3.jpg';
import post4 from '../assets/tekken8.mp4';
import post5 from '../assets/jennie.mp4';
import post6 from '../assets/post6.png';
import post7 from '../assets/post7.jpg';
import post8 from '../assets/mugler.mp4';
import post9 from '../assets/overwatch.png';

const eventsData = [
  {
    id: 1,
    date: '09.28.2024',
    title: '三島一八<br/>🡢KAZUYA MISHIMA',
    info: 'Kazuya, one of the main antagonists in the Tekken series, has been reimagined through the lenses of Gentle Monster.',
    vid: tekken5,
  },
  {
    id: 2,
    date: '10.04.2024',
    title: 'IN-GAME SKIN<br/>JIN VS KAZUYA',
    info: 'An exclusive in-game collaboration will also be launched to celebrate the Gentle Monster × TEKKEN 8 project.',
    vid: tekken6,
  },
  {
    id: 3,
    date: '22.06.2024',
    title: 'TEKKEN AI FILTER',
    info: 'The Gentle Monster × TEKKEN 8 project provides a special experience that lets you become a Tekken character.',
    vid: tekken7,
  },
  {
    id: 4,
    date: '15.09.2024',
    title: 'THE ULTIMATE POP-UP',
    info: 'Explore our pop-up space, where a massive battle structure featuring Kazuya has been recreated in a traditional zen style.',
    vid: tekken8,
  },
];

const posts = [
  {
    title: "GENTLE MONSTER<br/>🡢TEKKEN 8",
    description: "Where high-fashion meets the world of gaming. 🥊✨ Gentle Monster teams up with TEKKEN 8 to deliver an iconic collaboration that blends style and strength. #GentleMonster #Tekken8 #GameOn",
    media: post1, // Image URL or video URL
    type: "image", // "image" or "video"
  },
  {
    title: "SEE THE GAME<br/>🡢DIFFERENTLY",
    description: "Step into the ring with an AI-powered filter that brings the world of Tekken to life, blending high-fashion eyewear from Gentle Monster with your favorite fighters. Experience the fusion of style and gaming like never before. 🥊✨ #TekkenxGentleMonster #AIFilter #GameOn",
    media: post2, // Image URL or video URL
    type: "video", // "image" or "video"
  },
  {
    title: "BEHOLD<br/>🡢THE INFERNO",
    description: "Fusing the fierce energy of Tekken with the bold vision of Gentle Monster. This collaboration lets you wear the power of the game wherever you go. Which fighter’s look will you rock today? 🥊👓 #TekkenxGentleMonster #PowerInStyle",
    media: post3, // Image URL or video URL
    type: "image", // "image" or "video"
  },
  {
    title: "PLAYERS MEETS FASHION<br/>🡢IN THE ARENA",
    description: "Step into a calm yet powerful fusion of gaming and fashion. The Tekken x Gentle Monster pop-up embraces the Zen philosophy, offering a peaceful space to experience the iconic eyewear collection. Find your inner fighter while surrounded by tranquility. 🌿✨ #ZenStyle #TekkenxGentleMonster #SerenityInStyle",
    media: post4, // Image URL or video URL
    type: "video", // "image" or "video"
  },
  {
    title: "GENTLE JENNIE<br/>🡢 ELEGANT DREAMSCAPE",
    description: "Accompany Jennie, as she arrives in New York for the Jentle Salon Pop-Up and discovers different aspects of what makes this collaboration so eccentric. Jennie wears a black sleek oval shape Hush 01 during a visit to the Jentle Salon.",
    media: post5, // Image URL or video URL
    type: "video", // "image" or "video"
  },
  {
    title: "GM × JENNIE<br/>🡢A VISIONARY AFFAIR",
    description: "Radiance meets attitude. Explore a collection that balances elegance with edge, inspired by Jennie’s unmistakable aura. ☀️💫 #GentleJennie #RadianceInStyle",
    media: post6, // Image URL or video URL
    type: "image", // "image" or "video"
  },
  {
    title: "GM × MUGLER<br/>🡢FUTURISTIC FEMME",
    description: "Dare to defy the ordinary. Discover a striking collection inspired by Mugler’s boundary-pushing ethos and Gentle Monster’s forward-thinking designs. 🛸✨ #FuturisticEyewear #GentleMugler",
    media: post7, // Image URL or video URL
    type: "image", // "image" or "video"
  },
  {
    title: "MUGLER'S<br/>🡢COSMIC EDGE",
    description: "Step into the cosmos with eyewear that redefines boldness. The Mugler x Gentle Monster collection takes you out of this world. 🌌🔥 #MuglerCollab #BoldVisions",
    media: post8, // Image URL or video URL
    type: "video", // "image" or "video"
  },
  {
    title: "OVERWATCH VISION<br/>🡢HEROES IN FOCUS",
    description: "Channel your favorite heroes with iconic eyewear inspired by Overwatch’s vibrant universe. Style that’s as bold as the game itself. 🎮✨ #GentleOverwatch #HeroicVision",
    media: post9, // Image URL or video URL
    type: "image", // "image" or "video"
  },
];

export { eventsData, posts };
