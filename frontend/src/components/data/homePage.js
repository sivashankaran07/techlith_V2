import { useHref } from "react-router-dom";
import Images from "../data/Images";
const home = {
  main: {
    title: "Techlith solution  ",
  },

  homepage: {
    title: "Bringing revolution in digital marketing",
    description: "Explore our features and services tailored just for you.",
    button: "Get Started",
  },
  about: {
    lable: "About Company",
    title: "Websites that tell your brand's story",
    description1:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium , totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.",
    description2:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    description3:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
    content: [
      "Ease of Scalability",
      "Expertise and Experience",
      "Full Flexibility",
      "Instant Impact",
      "Time Zone Aligned",
      "Proactive Support",
    ],
  },
  services: [
    {
      title: "Web Development ",
      description:
        "We provide a wide range of services to help you achieve your goals.",
      img: Images.webDev,
    },
    {
      title: "Web Design",
      description: "We create visually appealing and user-friendly websites.",
      img: Images.WebDesign,
    },
    {
      title: "Digital Marketing",
      description:
        "We help you reach your target audience with effective and engaging content.",
      img: Images.digitalMarketing,
    },
    {
      title: "Graphic Design",
      description: "We provide a variety of design and development",
      img: Images.graphicDesign,
    },
    {
      title: "UI/UX Design",
      description: "Creating wireframes and interactive prototypes to visualize website or app designs.",
      img: Images.uiuxDesign,
    
    },
    {
      title: "Logo Design",
      description: "We help you host your website and maintain it over time.",
      img: Images.webHosting,
    },
  ],
  WCU:[
    {
      img: Images.innovation,
      title:"innovation",
      description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    },
    {
      img: Images.qualityFocused,
      title:"quality-focused",
      description:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
    },
    {
      img: Images.valueMoney,
      title:"value for money",
      description:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit ?",
    }
  ],
  WCU2:[
    {
      title: "Do you want to explore our outstanding work?",
      description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.",
      social:[
          {
            title:"Facebook",
            useHref: "http://www.facebook.com"
          },
          {
            title:"Instagram",
            useHref: "http://www.instagram.com"
          },
          {
            title:"Contact Us",
            useHref: "Contact Us"
          }
      ]

    }
  ]
};
export default home;
