type ProjectType = {
  id: number;
  project_name: string;
  description: string;
  image: string;
  technologies: string[];
  live_link: string;
};

const getAllProjects = (): ProjectType[] => {
  return [
    {
      id: 1,
      project_name: "Smart HealthCare",
      description:
        "A healthcare management system that offers online consultations, appointment booking, and medical record tracking.",
      image: "/projects/smart-healtchcare.png",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      live_link: "https://www.shrlbd.com",
    },
    {
      id: 2,
      project_name: "Percel Point",
      description:
        "A healthcare management system that offers online consultations, appointment booking, and medical record tracking.",
      image: "/projects/percel-point.svg",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      live_link: "https://percel-point.netlify.app",
    },
    {
      id: 3,
      project_name: "Alpha Sports",
      description:
        "An e-commerce platform for purchasing sports equipment, featuring filtering, cart management, and secure checkout.",
      image: "/projects/smart-healtchcare.png",
      technologies: ["MERN Stack", "Redux", "Stripe API"],
      live_link: "https://alphasports.com",
    },
    {
      id: 4,
      project_name: "Career Counseling",
      description:
        "A platform providing career advice, job recommendations, and resume-building tools for job seekers.",
      image: "/projects/smart-healtchcare.png",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      live_link: "https://careercounseling.com",
    },
    {
      id: 5,
      project_name: "FutureFLX",
      description:
        "A web and mobile application development service provider specializing in UI/UX design and SEO.",
      image: "/projects/smart-healtchcare.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      live_link: "https://futureflx.com",
    },
    {
      id: 6,
      project_name: "Bookshop",
      description:
        "An online bookstore where users can browse books, add them to a wishlist, and purchase with real-time order tracking.",
      image: "/projects/smart-healtchcare.png",
      technologies: ["React", "Node.js", "MongoDB"],
      live_link: "https://bookshop.com",
    },
  ];
};

export default getAllProjects;
