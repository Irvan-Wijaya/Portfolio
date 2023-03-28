import {
    mobile,
    astra,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    van,
    tfi,
    threejs,
    android,
    laravel,
    sql,
    bs,
    java,
    ReWaste,
    ReBike,
    SC,
    VR,
    backend
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "works",
      title: "Work"
    },
    {
      id: "contact",
      title: "Contact"
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "MySQL",
      icon: sql,
    },
    {
      name: "Bootsrap",
      icon: bs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Android Studio",
      icon: android,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Application Developer",
      company_name: "Asuransi Astra | Intership",
      icon: astra,
      iconBg: "#E6DEDD",
      date: "March 2023 - February 2024",
      points: [
        "Developing and maintaining web applications using React.js and .net framework.",
        "Testing Application Programs, testing programs that have been made so that they produce input, process and output as expected."
      ],
    },
    {
      title: "Laravel Developer",
      company_name: "Freelance",
      icon: van,
      iconBg: "#080c14",
      date: "November 2022 - December 2022",
      points: [
        "Developing and debugging web applications using Laravel, MySQL, and other related libraries.",
        "Developing admin pages by implementing CRUD methods and MVC architecture."
      ],
    },
    {
      title: "Creative Design Activist",
      company_name: "TFI Student Community | Social Organization",
      icon: tfi,
      iconBg: "#E6DEDD",
      date: "March 2022 - February 2023",
      points: [
        "Responsible for designing engaging Instagram stories to enhance the organization social media.",
        "Design an Instagram story for the birthdays of activists and administrators also create event posters, virtual backgrounds, and banners of the event.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ReBike",
      description:
        "Bike service web-application platform where user can call a REBIKE Mechanic to repair their bike.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "bs",
          color: "pink-text-gradient",
        },
      ],
      image: ReBike,
      source_code_link: "https://github.com/Irvan-Wijaya/REBIKE-WEBAPP",
    },
    {
      name: "ReWaste",
      description:
        "By converting trash into points, this mobile application makes recycling easier and raises public awareness. ",
      tags: [
        {
          name: "android",
          color: "blue-text-gradient",
        }
      ],
      image: ReWaste,
      source_code_link: "https://github.com/Irvan-Wijaya/ReWaste",
    },
    {
      name: "SembuhCovid",
      description:
        "Healthcare web application platform that aims to make it easier for Covid patients to get free medicines from the government.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: SC,
      source_code_link: "https://github.com/Irvan-Wijaya/SembuhCovidWeb",
    },
    {
      name: "vanRecipe",
      description:
        "Web application that makes it easy to discover recipes and ideas for everyday home cooking.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        }
      ],
      image: VR,
      source_code_link: "https://github.com/Irvan-Wijaya/vanRecipe",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };