import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineCompass,
  AiOutlineBulb,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

import { IoLocationOutline } from "react-icons/io";

import { BsGraphUp, BsLaptop } from "react-icons/bs";

import { FiSettings } from "react-icons/fi";

import { MdOutlineMobileFriendly } from "react-icons/md";

export const bannerData = {
    title:"Give You Business an Effective Online Presence",
    description:"myname",
    buttonText:"call us",
    bannerImage:"/images/bannerImage2.svg"
  }




export const socialsData = [
  {
    id:1,
    icon: <AiFillFacebook></AiFillFacebook>,
    path: "#",
  },
  {
    id:2,
    icon: <AiFillLinkedin></AiFillLinkedin>,
    path: "#",
  },
  {
    id:3,
    icon: <AiOutlineTwitter></AiOutlineTwitter>,
    path: "#",
  },
];

export const servicesCards = [
  {
    id: "1",
    backgroundImage: "tech_image1",
    title: "WEB DESIGN",
    info: "VIEW PROJECTS",
  },
  {
    id: "2",
    backgroundImage: "tech_image2",
    title: "APP DESIGN",
    info: "VIEW PROJECTS",
  },
  {
    id: "3",
    backgroundImage: "tech_image3",
    title: "GRAPHIC DESIGN",
    info: "VIEW PROJECTS",
  },
];

export const purposesData = [
  {
    id: 1,
    icon: <AiOutlineCompass></AiOutlineCompass>,
    title: "Creativity",
    description:
      "From digital strategy to implementation, we brainstorm and work together to ensure you get the best possible results.",
  },
  {
    id: 2,
    icon: <BsGraphUp></BsGraphUp>,
    title: "Productivity",
    description:
      "We maximize your profit with pay-per-click campaigns, data analytics & website testing to help our you win & spend less.",
  },
  {
    id: 3,
    icon: <AiOutlineBulb></AiOutlineBulb>,
    title: "Innovation",
    description:
      "We are an innovative agency with a wealth of experience from handling diverse brands across East Africa & beyond.",
  },
  {
    id: 4,
    icon: <AiOutlineCompass></AiOutlineCompass>,
    title: "We Care",
    description:
      "We care about you and your success and handle all the technical things for you, so you can focus on what grows your brand.",
  },
];

export const projectsData = [
  {
    title: "MERN Memories",
    description:
      "Using React, Python, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    image: "/images/1.png",
    tags: ["Mongo", "Express", "React", "Node"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 0,
  },
  {
    title: "E-Commerce",
    description:
      "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
    image: "/images/2.png",
    tags: ["React", "JavaScript"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 1,
  },
  {
    title: "WebRTC App",
    description:
      "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
    image: "/images/3.jpg",
    tags: ["React", "WebRTC"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 2,
  },
  {
    title: "Unichat",
    description:
      "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: "/images/4.jpg",
    tags: ["React", "ChatEngine", "Firebase"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  },
];

export const testimonialData = [
  {
    id: 1,
    name: "Danny Higuston",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    userName: "@Danny_Hill",
    rating: 1,
    title: "Design Quality and performance",
    comment:
      "Got working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer ",
  },
  {
    id: 2,
    name: "Danny Higuston",
    userName: "@Danny_Hill",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    rating: 4,
    title: "Design Quality and performance",
    comment:
      "Got working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer ",
  },
  {
    id: 3,
    name: "Danny Higuston",
    userName: "@Danny_Hill",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    rating: 5,
    title: "Design Quality and performance",
    comment:
      "Got working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer ",
  },
  {
    id: 4,
    name: "Danny Higuston",
    userName: "@Danny_Hill",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    rating: 4,
    title: "Design Quality and performance",
    comment:
      "Got working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer ",
  },
  {
    id: 5,
    name: "Danny Higuston",
    userName: "@Danny_Hill",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    rating: 5,
    title: "Design Quality and performance",
    comment:
      "Got working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer ",
  },
  {
    id: 6,
    name: "Danny Higuston",
    userName: "@Danny_Hill",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    rating: 5,
    title: "Design Quality and performance",
    comment:
      "Got working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer ",
  },
  {
    id: 7,
    name: "Danny Higuston",
    userName: "@Danny_Hill",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    rating: 4,
    title: "Design Quality and performance",
    comment:
      "Got working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer ",
  },
  {
    id: 8,
    name: "Danny Higuston",
    userName: "@Danny_Hill",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    rating: 5,
    title: "Design Quality and performance",
    comment:
      "Got working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer ",
  },
];

export const contactinfoData = [
  {
    id: 1,
    icon: <AiOutlinePhone></AiOutlinePhone>,
    info: "+254707181331",
  },
  {
    id: 2,
    icon: <AiOutlineMail></AiOutlineMail>,
    info: "philipoti2012@gmail.com",
  },
  {
    id: 3,
    icon: <AiOutlineMail></AiOutlineMail>,
    info: "Kenya ,Nairobi, Kangundo Rd, Ruai",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: <BsLaptop></BsLaptop>,
    title: "Web development",
    description:
      "We deliver our website that convert for your business in a timely manner and on cost effective budgets",
    path: "/services/web-development",
  },
  {
    id: 2,
    icon: <FiSettings />,
    title: "Search Engine Optimization",
    description:
      "We deliver our website that convert for your business in a timely manner and on cost effective budgets",
    path: "/services/search-engine-optimization",
  },
  {
    id: 3,
    icon: <MdOutlineMobileFriendly></MdOutlineMobileFriendly>,
    title: "Social Media Marketing",
    description:
      "We deliver our website that convert for your business in a timely manner and on cost effective budgets",
    path: "/services/social-media-marketing",
  },
];



