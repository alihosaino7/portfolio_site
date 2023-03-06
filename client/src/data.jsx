
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import { FaLaptopCode, FaMobileAlt, FaCode, FaSass, FaUser, FaPhone, FaMailBulk } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss3, SiTypescript, SiTailwindcss, SiReact } from 'react-icons/si'
import { MdOutlineAnimation } from 'react-icons/md'
import { CgPerformance } from 'react-icons/cg'

import liberty from './assets/liberty-perview.jpg'
import blogr from './assets/blogr-perview.jpg'
import gpt3 from './assets/gpt3-perview.jpg'
import bondi from './assets/bondi-perview.jpg'
import doob from './assets/doob-perview.jpg'
import htmlTagsMemoryTest from './assets/html-tags-memory-test.png'
import tieTacToeGame from './assets/tie-tac-toe-game.png'

import libertyFullScreen from './assets/liberty-fullscreen.png'
import blogrFullScreen from './assets/blogr-fullscreen.png'
import gpt3FullScreen from './assets/gpt3-fullscreen.png'
import bondiFullScreen from './assets/bondi-fullscreen.png'
import doobFullScreen from './assets/doob-fullscreen.png'
import htmlTagsMemoryTestFullScreen from './assets/html-tags-memory-test.png'
import tieTacToeGameFullScreen from './assets/tie-tac-toe-game.png'

export const navLinksData = [
   {
      id: 1,
      content: "home",
   },
   {
      id: 2,
      content: "about",
   },
   {
      id: 3,
      content: "skills",
   },
   {
      id: 4,
      content: "services"
   },
   {
      id: 5,
      content: "portfolio",
   },
   {
      id: 6,
      content: "contact",
   }
]

export const socialIconsData = [
   {
      id: 1,
      icon: <BsInstagram />,
      path: 'https://www.instagram.com/knightwebdev/'
   },
   {
      id: 2,
      icon: <BsLinkedin />,
      path: 'https://www.linkedin.com/in/ali-hosaino-490600257/'
      
   },
   {
      id: 3,
      icon: <BsGithub />,
      path: 'https://github.com/alihosaino7'
   },
   {
      id: 4,
      icon: <BsTwitter/>,
      path: 'https://twitter.com/ali_hosaino'
   },
]

export const servicesCardsData = [
   {
      id: 1,
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "I can develope various type of websites with high quality decoration."
   },
   {
      id: 2,
      icon: <FaMobileAlt />,
      title: "Responsive",
      description: "I can develope websites which will be accurately in Laptops as well as Android Mobiles etc."
   },
   {
      id: 3,
      icon: <FaCode />,
      title: "Clean Code",
      description: "I can write clean code in the given languages mentioned in Skills section."
   },
   {
      id: 4,
      icon: <MdOutlineAnimation />,
      title: "Animation",
      description: "I can provide your website nice and smooth animation effects."
   },
   // {
   //    id: 5,
   //    icon: <CgPerformance />,
   //    title: "High Performance",
   //    description: "I can make fast websites"
   // }
]

export const skillsCardsData = [
   {
      id: 1,
      icon: <SiHtml5 />,
      name: "Html",
      percentage: 90,
      color: "#e34f26"
   },
   {
      id: 2,
      icon: <SiCss3 />,
      name: "Css",
      percentage: 90,
      color: "#2965f1"
   },
   {
      id: 3,
      icon: <SiJavascript />,
      name: "JavaScript",
      percentage: 80,
      color: "#f7df1e",
   },
   {
      id: 4,
      icon: <FaSass />,
      name: "Sass",
      percentage: 70,
      color: "#cc6699"
   },
   {
      id: 5,
      icon: <SiTailwindcss />,
      name: "Tailwind css",
      percentage: 80,
      color: "#4db6ac"
   },
   {
      id: 6,
      icon: <SiReact />,
      name: "React js",
      percentage: 70,
      color: "#00d8ff"
   },
   {
      id: 7,
      icon: <SiTypescript />,
      name: "Typescript",
      percentage: 70,
      color: "#3178c6"
   },
   // {
   //    id: 8,
   //    icon: <SiAdobephotoshop />,
   //    name: "Photoshop",
   //    percentage: 70,
   //    color: "#18152e",
   //    secColor: "#4fccfe",
   // }
]

export const contactInfoData = [
   {
      id: 1,
      icon: <FaUser />,
      content: {
         method: "Name",
         info: "Ali Hosaino"
      },
      path: ""
   },
   {
      id: 2,
      icon: <FaPhone />,
      content: {
         method: "Phone",
         info: "+971 542 868 199"
      },
      path: 'tel:+971 542 868 199'
   },
   {
      id: 3,
      icon: <FaMailBulk />,
      content: {
         method: "Email",
         info: "alihosaino938@gmail.com"
      },
      path: `mailto:alihosaino938@gmail.com` 
   },
]

export const portfolioProjectsData = [
   {
      id: 1,
      img: liberty,
      name: "Liberty",
      link: "https://alihosaino7.github.io/liberty-template/",
      category: "templates",
      fullScreenImage: libertyFullScreen,
      usedStack: ["html", "css", "react js"]
   },
   {
      id: 2,
      img: gpt3,
      name: "Gpt3",
      link: "https://alihosaino7.github.io/gpt3-template/",
      category: "templates",
      fullScreenImage: gpt3FullScreen,
      usedStack: ["html", "css", "javascript"]
   },
   {
      id: 3,
      img: doob,
      name: "Doob",
      link: "https://alihosaino7.github.io/doob-template/",
      category: "templates",
      fullScreenImage: doobFullScreen,
      usedStack: ["html", "css", "bootstrap"]
   },
   {
      id: 4,
      img: bondi,
      name: "Bondi",
      link: "https://alihosaino7.github.io/bondi-template/",
      category: "templates",
      fullScreenImage: bondiFullScreen,
      usedStack: ["html", "css", "bootstrap"]
   },
   {
      id: 5,
      img: blogr,
      name: "Blogr",
      link: "https://alihosaino7.github.io/blogr-template/",
      category: "templates",
      fullScreenImage: blogrFullScreen,
      usedStack: ["html", "css"]
   },
   {
      id: 6,
      img: htmlTagsMemoryTest,
      name: 'Html-tags-memory-test',
      link: "https://alihosaino7.github.io/html-tags-memory-test-app/",
      category: "apps",
      fullScreenImage: htmlTagsMemoryTestFullScreen,
      usedStack: ["HTML", "TypeScript", "SCSS"]
   },
   {
      id: 7,
      img: tieTacToeGame,
      name: 'tie-tac-toe-game',
      link: "https://alihosaino7.github.io/tie-tac-toe-game",
      category: "games",
      fullScreenImage: tieTacToeGameFullScreen,
      usedStack: ["HTML", "CSS", "TypeScript"]
   }
]

export const portfolioCategoriesData = [
   {
      id: 1,
      categoryName: "All"
   },
   {
      id: 2,
      categoryName: "Games"
   },
   {
      id: 3,
      categoryName: "Apps"
   },
   {
      id: 4,
      categoryName: "Templates"
   }
]

export const colorsOptionsData = [
   {
      id: 1,
      color: "hsl(273, 88%, 51%)",
      colorHover: "hsla(273, 88%, 51%, .8)",
      default: true
   },
   {
      id: 2,
      color: "hsl(43, 68%, 62%)",
      colorHover: "hsla(43, 68%, 62%, .8)",
   },
   {
      id: 3,
      color: "hsl(180, 100%, 39%)",
      colorHover: "hsla(180, 100%, 39%, .8)",
   },
   {
      id: 4,
      color: "hsl(204, 98%, 60%)",
      colorHover: "hsla(204, 98%, 60%, .8)",
   },
]