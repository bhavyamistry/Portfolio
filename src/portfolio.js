/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bhavya's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Bhavya Mistry Portfolio",
    type: "website",
    url: "http://BhavyaMistry.com/",
  },
};

//Home Page
const greeting = {
  title: "Bhavya Mistry",
  logo_name: "BhavyaMistry",
  nickname: "Logan",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/Bhavya1919/masterPortfolio",
  githubProfile: "https://github.com/bhavyamistry",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Bhavya1919",
  // linkedin: "https://www.linkedin.com/in/Bhavya-Mistry-88710b138/",
  // gmail: "BhavyaMistry98@gmail.com",
  // gitlab: "https://gitlab.com/BhavyaMistry98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Bhavya_1919",
  // instagram: "https://www.instagram.com/Logan/"

  {
    name: "Github",
    link: "https://github.com/bhavyamistry",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bhavyamistry/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "www.youtube.com/@bhavyamevada4291",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:bhavyamistry.ms@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/Mist93208Bhavya",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/bhavyamistrymark42/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing and developing responsive front-end interfaces compatible across various browsers.",
        "⚡ Developing a reliable and scalable backend infrastructure.",
        "⚡ Implementing efficient database design, optimization, and querying techniques.",
        "⚡ Expertise in building and consuming RESTful APIs, including integration with third-party APIs such as Google Maps, Twitter, Graph, OpenWeatherMap, Stripe, and GitHub.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#8511fa",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#323330",
            color: "#f7df1e",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#404d59",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#dd0031",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777bb4",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#ff2d20",
          },
        },
        {
          skillName: "Codeigniter",
          fontAwesomeClassname: "simple-icons:codeigniter",
          style: {
            color: "#ff2d20",
          },
        },
        {
          skillName: "Jquery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769ad",
          },
        },
        {
          skillName: "Java",
          imageSrc: "java.png",
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6db33f",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092e20",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#239120",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#5c2d91",
          },
        },
        {
          skillName: "MySQL",
          imageSrc: "mysql.png",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          imageSrc: "mongodb.png",
        },
        {
          skillName: "Microsoft SQL Server",
          imageSrc: "mssql.png",
        },
        {
          skillName: "SQLite",
          imageSrc: "sqlite.png",
        },
        {
          skillName: "AWS DynamoDB",
          imageSrc: "dynamodb.png",
        },
      ],
    },
    {
      title: "Cloud Deployment with CI/CD Automation",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying AI / ML models on serverless cloud infrastructure",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on Microsoft Azure and AWS",
        "⚡ Implementing (CI/CD) pipelines for automated testing and deployment",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Jenkins",
          imageSrc: "jenkins.png",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0a0fff",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#ff6c37",
          },
        },
      ],
    },
    {
      title: "Data Analysis & ML / AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing and implementing scalable machine learning models for diverse real-world applications",
        "⚡ Familiarity with various machine learning algorithms for predictive modeling and classification tasks",
        "⚡ Skilled in data storytelling, analyzing them, finding insights presenting them in clear and understandable manner to stakeholders",
        "⚡ Integrating Generative AI for prompt engineering to enhance project outcomes ",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#3f4f75",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          imageSrc: "pytorch.png",
        },
        {
          skillName: "Scikit-Learn",
          imageSrc: "scikit-learn.png",
        },
        {
          skillName: "Google Analytics",
          imageSrc: "google_analytics.png",
        },
        {
          skillName: "Power BI",
          imageSrc: "power_bi.png",
        },
        {
          skillName: "Chat-GPT",
          imageSrc: "chatgpt.png",
        },
        {
          skillName: "Gemini",
          imageSrc: "gemini.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Logan/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/Logan",
    },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/Logan",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indiana University Bloomington",
      subtitle: "Masters in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "Aug 2022 - May 2024",
      location: "Bloomington, IN, USA",
      descriptions: [
        "⚡ With GPA - 3.8, I've completed key courses in Algorithms, Data Visualization, Data Mining, Applied ML, Computer Networks, Cloud Computing",
        "⚡ Apart from this,  I completed a Research Assistantship at Kelley School of Business, where I collaborated with the finance department to create a database through web scraping and conducted analysis to generate insights.",
      ],
      website_link: "https://www.indiana.edu/",
    },
    {
      title: "KJ Somaiya Institue of Engineering & Information Technology",
      subtitle:
        "Bachelor of Technology in Information Technology, University Of Mumbai",
      logo_path: "somaiya.png",
      alt_name: "Somaiya",
      duration: "Aug 2019 - May 2022",
      location: "Mumbai, MH, India",
      descriptions: [
        "⚡ With GPA - 3.7, I have studied core software engineering courses like Data Structures, DBMS, OS, Networks, DevOps, AI, ML etc.",
        "⚡ Received 2 Letters of Appreciation from the University in recognition of outstanding contributions to the creation and deployment of departmental projects.",,
      ],
      website_link: "https://kjsit.somaiya.edu.in",
    },
    {
      title: "Shri Bhagubhai Mafatlal Polytechnic",
      subtitle: "Diploma in Information Technology",
      logo_path: "bhagubhai.png",
      alt_name: "Bhagubhai",
      duration: "Aug 2016 - May 2019",
      location: "Mumbai, MH, India",
      descriptions: [
        "⚡ With GPA - 3.6, For the first time, I delved into learning coding with foundational languages like Java, C, and C++, and also delved into web development.",
        "⚡ Additionally, I actively participated in hackathons and coding competitions alongside my learning journey."
      ],
      website_link: "https://sbmp.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      logo_path: "cloud_practioner.png",
      certificate_link:
        "https://www.credly.com/badges/718a008b-4cd5-4cd0-b7f3-02945ad08c45/public_url",
      alt_name: "Cloud Quest - Cloud Practitioner",
      color_code: "#0C9D5899",
    },
    {
      title: "AWS Certified Cloud Practitioner Foundational",
      logo_path: "cloud_practioner_foundational.png",
      certificate_link:
        "https://www.credly.com/badges/0e825ef4-bff1-4e88-94f5-3741249bcff8/public_url",
      alt_name: "Cloud Practitioner Foundational",
      color_code: "#00000099",
    },
    {
      title: "AWS Certified Developer – Associate",
      logo_path: "developer_associate.png",
      certificate_link:
        "https://www.credly.com/badges/ed863451-15ef-4c9e-be82-8199beaa532f/public_url",
      alt_name: "Developer Associate",
      color_code: "#8092f9",
    },
    {
      title: "AWS Cloud Quest: Serverless Developer",
      logo_path: "cloud_quest_serverless.png",
      certificate_link:
        "https://www.credly.com/badges/a4fa9b0e-f985-4de8-bb38-b15646156cc5/public_url",
      alt_name: "Cloud Quest: Serverless Developer",
      color_code: "#4d71c0",
    },
    {
      title: "Letter Of Apprection - Final Year Project Somaiya",
      logo_path: "somaiya.png",
      certificate_link:
        "https://drive.google.com/file/d/11tpYI856uDMg37_4VlWS5ypHM9oMOJKN/view?usp=sharing",
      alt_name: "Somaiya",
      color_code: "#FFFFFF",
    },
    {
      title: "HackerRank - Java",
      logo_path: "hackerrank_java.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/072c5c0838d0",
      alt_name: "hackerrank_java",
      color_code: "#b8dbb4",
    },
    {
      title: "HackerRank - Python",
      logo_path: "hackerrank_python.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/210cea2ada3e",
      color_code: "#b8dbb4",
    },
  ],
};

const projects = {
  projects: [
    {
      title: "Unified Job Aggregation System (UJAS)",
      logo_path: "UJAS.png",
      certificate_link:
        "https://github.com/bhavyamistry/UJAS-Unified-Job-Aggregation-System/tree/main",
      alt_name: "Job Aggregation System",
      color_code: "#85b6f0",
      desc: "A robust job platform utilizing GraphQL to aggregate listings from Glassdoor, LinkedIn, and Indeed. Integrated NLP for job resume matching and sorting, while offering resume improvement suggestions with GenAI. Efficiently scaled the platform on AWS using ASG and SageMaker."
    },
    {
      title: "Shatranj - Chess Tutor",
      logo_path: "chess.gif",
      certificate_link:
        "https://github.com/bhavyamistry/Shatranj-Chess-Openings-Analyzer-with-GenAI-for-Explainable-AI",
      alt_name: "Shatranj - Chess Tutor",
      color_code: "#00000099",
      desc: "Shatranj, the chess tutor, analyzes openings, predicts leverage, and suggests opponent moves with the assistance of Google based Generative AI, Gemini AI. It aids in understanding openings and improving chess strategies"
    },
    {
      title: "Hanabi Yuga - Event Management System",
      logo_path: "event.jpg",
      certificate_link:
        "https://github.com/bhavyamistry/Hanabi-Yuga_EventManagementSystem",
      alt_name: "Event Management System",
      color_code: "#FFFFFF",
      desc: "Discover, book, and manage venues effortlessly on our MERN platform. With integrated Stripe payments, chatbot support, and easy invite sharing, organizing events has never been simpler. Enjoy direct interaction between customers and venue owners for a seamless booking experience, all powered by a versatile CRUD system."
    },
    {
      title: "Online Examination Portal with Anti-Cheating",
      logo_path: "exam.gif",
      certificate_link:
        "https://github.com/bhavyamistry/Testwise-OnlineExamPortal-with-AntiCheating",
      alt_name: "Online Examination Portal",
      color_code: "#FFFFFF",
      desc: "Modernizes exam processes with scalable remote proctoring and automated assessment features. It ensures secure authentication via JSON web token & Google SSO, facilitates test creation, and enables rapid score release. With measures to detect and prevent cheating during exams, as well as intuitive visualization of results, it enhances efficiency for educators and students alike."
    },
    {
      title: "Akamai - Smart Voice Assistant",
      logo_path: "virtual-assistant.png",
      certificate_link:
        "https://github.com/bhavyamistry/Akamai-Smart-Desktop-Assistant-for-Windows",
      alt_name: "Smart Voice Assistant",
      color_code: "#FFFFFF",
      desc: "Voice-based personal assistant, developed with C#, .NET, and the Google Web Speech API for Windows 7, expanded to Windows 8 and 10. It operates seamlessly in the background, responding to voice commands for tasks like basic computer functions, application control, file management, speech-to-text notes and web search, enhancing productivity in enterprise environments."
    },
    {
      title: "Bloomington Bike Project",
      logo_path: "cycle.gif",
      certificate_link:
        "https://github.com/bhavyamistry/bloomington-bike-project",
      alt_name: "Bloomington Bike Project",
      color_code: "#b8dbb4",
      desc: "Analyzing and Visualizing bicycle sales data using Python and its libraries, revealing customer preferences by location, occupation, gender, age, commute distance, and vehicle ownership.  This information aids sellers in making informed decisions and tailoring offerings to better meet customer needs, ultimately improving sales and customer satisfaction"
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    }
  ],
};

const experience2 = [
  {
    id: 1,
    title: "Graduate Research Assistant",
    company: "Kelley School Of Business",
    location: "Bloomington, IN, USA",
    website_link: "https://kelley.iu.edu/index.html",
    description:
      "Applied problem-solving skills to engineer a database solution for the Finance Department, conducting extensive research for scrapping Millions of records from the U.S. Federal Server. Implemented innovative parallel processing techniques on a university supercomputer, increasing PDF download speed to 15/min. Leveraged Python for efficient analysis and seamlessly integrated findings with OneDrive using Graph REST-API.",
    date: "August 2023 - present",
    icon: "work",
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "Tech For Good Inc.",
    location: "Boston, MA, USA",
    website_link: "https://www.techforgoodinc.org/",
    description:
      "Collaboratively built open-source Job Applicant Management for Employer. Led code review sessions, debugging efforts, and team-building activities. Implemented an in-house E-signature solution, reducing processing time by 60% for 50 nonprofits. Innovated NLP and Regex-based resume parser, fostering efficient candidate evaluation and eliminating ATS costs.",
    date: "May 2023 - August 2023",
    icon: "work",
  },
  {
    id: 3,
    title: "Freelance Full Stack Developer",
    company: "Mevada Engineering Works Pvt Ltd.",
    location: "Mumbai, MH, India",
    website_link: "https://saturnvalves.com",
    description:
      "Developed an end-to-end supply chain software. Facilitated client communication and stakeholder engagement, integrating CRM solutions to manage 100+ clients. Ensured client satisfaction through weekly sprint meetings, while designing visually appealing front-end and reliable APIs.",
    date: "March 2021 - April 2022",
    icon: "work",
  },
  {
    id: 4,
    title: "Freelance Web Developer",
    company: "Programmatix Institute",
    location: "Mumbai, MH, India",
    website_link: "https://programmatixinstitute.com/",
    description:
      "Revamped the website frontend by integrating new design elements with PHP, Wordpress, and React.js, significantly enhancing user experience and visual appeal. Concurrently, I implemented advanced SEO techniques, leading to a remarkable 35% increase in SEO score and a substantial 50% growth in organic traffic.",
    date: "May 2020 - September 2020",
    icon: "work",
  },
  {
    id: 5,
    title: "Junior Developer Intern",
    company: "Mark Web Solutions",
    location: "Mumbai, MH, India",
    website_link: "https://www.markweb.in",
    description:
      "Proactively learned tech stack, developed app features, collaborated with leaders in code reviews, debugging, and testing. Employed creative problem-solving, grasped new frameworks, attended client meetings, and understood project requirements.",
    date: "May 2019 - August 2019",
    icon: "work",
  }
];

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "online examination system with Anti Cheating",
      name: "Online Examination System with Measures for Prevention of Cheating along with Rapid Assessment and Automatic Grading",
      createdAt: "2023-02-13T00:00:00Z",
      description: "Paper published in IEEE Explore 2023",
      url: "https://ieeexplore.ieee.org/document/10039552",
    }
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "background.gif",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.BhavyaMistry.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  projects,
  experience,
  experience2,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
