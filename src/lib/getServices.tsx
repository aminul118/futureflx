export interface ServiceType {
  id: number;
  name: string;
  description: string;
  details: string;
  image: string;
}

const getServices = (): ServiceType[] => {
  return [
    {
      id: 1,
      name: "Web Application Development",
      description:
        "Custom web application development tailored to your business needs.",
      details:
        "We build scalable, high-performance web applications using modern frameworks such as React, Next.js, and Node.js. Our solutions are designed to be secure, user-friendly, and optimized for performance.",
      image: "https://i.ibb.co.com/1wkpXbR/web-development.png",
    },
    {
      id: 2,
      name: "Android Application Development",
      description:
        "Robust and user-friendly Android applications to enhance your mobile presence.",
      details:
        "Our Android development team creates high-quality mobile applications using the latest technologies like Kotlin and Flutter. We ensure seamless performance, engaging UI/UX, and smooth integration with backend services.",
      image: "https://i.ibb.co.com/354w0wrz/android.png",
    },
    {
      id: 3,
      name: "Application UI/UX Design",
      description:
        "Intuitive and engaging UI/UX designs for web and mobile applications.",
      details:
        "We focus on user-centric design principles to create visually appealing and easy-to-use applications. Our design process includes wireframing, prototyping, and user testing to ensure a seamless experience.",
      image: "https://i.ibb.co.com/NGpmxdr/ui-ux.png",
    },
    {
      id: 4,
      name: "SEO Optimization",
      description:
        "Enhance your website’s visibility with our expert SEO services.",
      details:
        "We provide on-page and off-page SEO, keyword research, site audits, and performance optimization to improve search engine rankings and drive organic traffic to your website.",
      image: "https://i.ibb.co.com/KxVtGKB0/search-engine-optimization.png",
    },
    {
      id: 5,
      name: "Website Maintenance & Support",
      description:
        "Reliable maintenance and support services for your web applications.",
      details:
        "We offer regular updates, security patches, performance monitoring, and bug fixes to ensure your web application runs smoothly without downtime.",
      image: "https://i.ibb.co.com/Kzwr7QPc/maintenance.png",
    },
    {
      id: 6,
      name: "Digital Marketing",
      description:
        "Comprehensive digital marketing solutions to grow your online presence.",
      details:
        "We provide social media marketing, content marketing, PPC advertising, and branding strategies to enhance engagement, increase conversions, and build your brand’s reputation online.",
      image: "https://i.ibb.co.com/7NvyPJ1b/campaign.png",
    },
  ];
};

export default getServices;
