import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// FrontEnd
import jsIcon from "./assets/favicons/javascript-original.svg";
import tsIcon from "./assets/favicons/typescript-original.svg";
import reawctIcon from "./assets/favicons/react-original-wordmark.svg";
import htmlIcon from "./assets/favicons/html5-original-wordmark.svg";
import cssIcon from "./assets/favicons/css3-original-wordmark.svg";
import materialUiIcon from "./assets/favicons/materialui-original.svg";
import tailwindIcon from "./assets/favicons/tailwindcss-plain.svg";

// BackEnd
import expressIcon from "./assets/favicons/express-white.svg";
import expressLight from "./assets/favicons/express-original.svg";

import pythonIcon from "./assets/favicons/python-original.svg";
import nodejsIcon from "./assets/favicons/nodejs-original.svg";
import postgresIcon from "./assets/favicons/postgresql-original-wordmark.svg";
import mongodbIcon from "./assets/favicons/mongodb-original-wordmark.svg";
import prismaIcon from "./assets/favicons/prisma-blue.svg";
import passportIcon from "./assets/favicons/passport.svg";
import flaskIcon from "./assets/favicons/flask-dark.svg";
import flaskIconLight from "./assets/favicons/flask-original.svg";

// Devops
import githubIcon from "./assets/favicons/github-white.svg";
import githubIconLight from "./assets/favicons/github-original.svg";
import gitIcon from "./assets/favicons/git-original.svg";
import jestIcon from "./assets/favicons/jest-plain.svg";
import vitestIcon from "./assets/favicons/vitest-original.svg";
import railwaysIcon from "./assets/favicons/railway-dark.svg";
import railwaysIconLight from "./assets/favicons/railway.svg";
import webpackIcon from "./assets/favicons/webpack-original.svg";
import viteIcon from "./assets/favicons/vite.svg";

// ML Tools
import pytorchIcon from "./assets/favicons/pytorch-svgrepo-com.svg";
import tensorFlowIcon from "./assets/favicons/tensorflow-svgrepo-com.svg";
import tableauIcon from "./assets/favicons/tableau-icon-svgrepo-com.svg";
import chartjsIcon from "./assets/favicons/chartjs.svg";
import {openAiDark, openAiLight} from "./assets/projectStackIcon";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Farhan Maulana",
  title: "Farhan Maulana",
  secondTitle: "Full Stack Developer",
  subTitle:
    "Building web applications with passion and creativity. Data science and machine learning enthusiast",
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1RvFBNkdacXi6DbCtyQLCrpkomzYvV20k",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/etativel",
  linkedin: "https://www.linkedin.com/in/muhammad-farhan-maulana-a39371369/",
  gmail: "farhanmaulana.dev@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  frontEndSkills: [
    {
      skillName: "JavaScript",
      skillIcon: jsIcon
    },
    {
      skillName: "TypeScript",
      skillIcon: tsIcon
    },
    {
      skillName: "React",
      skillIcon: reawctIcon
    },
    {
      skillName: "HTML",
      skillIcon: htmlIcon
    },
    {
      skillName: "CSS",
      skillIcon: cssIcon
    },
    {
      skillName: "MUI",
      skillIcon: materialUiIcon
    },
    {
      skillName: "Tailwind",
      skillIcon: tailwindIcon
    }
  ],
  backEndSkills: [
    {
      skillName: "Express.js",
      skillIcon: expressIcon,
      skillIconLight: expressLight
    },
    {
      skillName: "Python",
      skillIcon: pythonIcon
    },
    {
      skillName: "Node.js",
      skillIcon: nodejsIcon
    },
    {
      skillName: "PostgreSQL",
      skillIcon: postgresIcon
    },
    {
      skillName: "MongoDB",
      skillIcon: mongodbIcon
    },
    {
      skillName: "Prisma",
      skillIcon: prismaIcon
    },
    {
      skillName: "Passport.js",
      skillIcon: passportIcon
    },
    {
      skillName: "Flask",
      skillIcon: flaskIcon,
      skillIconLight: flaskIconLight
    }
  ],
  devOpsSkills: [
    {
      skillName: "GitHub",
      skillIcon: githubIcon,
      skillIconLight: githubIconLight
    },
    {
      skillName: "Git",
      skillIcon: gitIcon
    },
    {
      skillName: "Jest",
      skillIcon: jestIcon
    },
    {
      skillName: "Vitest",
      skillIcon: vitestIcon
    },
    {
      skillName: "Railway",
      skillIcon: railwaysIcon,
      skillIconLight: railwaysIconLight
    },
    {
      skillName: "Webpack",
      skillIcon: webpackIcon
    },
    {
      skillName: "Vite",
      skillIcon: viteIcon
    }
  ],

  dataAndTools: [
    {
      skillName: "Python",
      skillIcon: pythonIcon
    },
    {
      skillName: "TensorFlow",
      skillIcon: tensorFlowIcon
    },
    {
      skillName: "Tableau",
      skillIcon: tableauIcon
    },
    {
      skillName: "Chart Js",
      skillIcon: chartjsIcon
    },
    {
      skillName: "PyTorch",
      skillIcon: pytorchIcon
    },
    {
      skillName: "OpenAi SDK",
      skillIcon: openAiDark,
      skillIconLight: openAiLight
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Airlangga University",
      logo: require("./assets/images/unairLogo.png"),
      subHeader: "Bachelor of Data Science (GPA: 3.6 / 4)",
      duration: "September 2020 - September 2024",
      desc: "Thesis Title: Optimization of Convolutional Neural Network (CNN) Using Genetic Algorithm for Pneumonia Disease Detection in Thoracic X-Ray Images.",
      descBullets: [
        "Developed a pneumonia detection model using CNNs optimized with Genetic Algorithms (GA) for enhanced diagnostic accuracy.",
        "Applied Contrast Limited Adaptive Histogram Equalization (CLAHE) to improve thoracic X-ray image contrast.",
        "Achieved 96% accuracy and 95% F1-score, outperforming the baseline models without CLAHE"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Analyst Intern",
      company: "BMKG",
      companylogo: require("./assets/images/bmkgLogo.png"),
      date: "Jun 2023 – Sep 2023",
      desc: "Conducting research to predict fire-prone areas utilizing Convolutional Neural Networks (CNN) and estimating the extent of area burned through regression analysis.",
      companyUrl: "https://www.bmkg.go.id/",
      credentials: false,
      credLink: "",
      project: "firecast"
    },
    {
      role: "Machine Learning Cohort",
      company: "Bangkit",
      companylogo: require("./assets/images/bangkitLogo.jpg"),
      date: "Feb 2023 – Jul 2023",
      desc: "Developed an ML app to detects chicken diseases by analyzing images of it waste. Implementing Flask as REST API to serve the model. Deployed on Google Cloud Platform.",
      companyUrl:
        "https://grow.google/intl/id_id/bangkit/?tab=machine-learning",
      credentials: true,

      credLink:
        "https://drive.google.com/file/d/1Q9zX01pdWjR7mgtLiSXxj4sFNvlCYguR/view?usp=sharing",
      project: ""
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Achievement Section
// Include certificates

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle: "Achievements and Certifications",

  achievementsCards: [
    {
      title: "TensorFlow Developer Certificate",
      subtitle:
        "Selected as one of only few hundreds students from over 5.000 participants in the Bangkit Academy program to receive the TensorFlow Developer Certificate exam, awarded as part of Bangkit’s recognition for the most outstanding and high-impact students.",
      image: require("./assets/images/TensorFlowLogo.png"),
      imageAlt: "TensorFlow Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credential.net/7a419c85-1477-4c4f-af03-2451b5b59053#gs.26qzq9"
        }
      ]
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62-82145479632",
  email_address: "farhanmaulana.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
