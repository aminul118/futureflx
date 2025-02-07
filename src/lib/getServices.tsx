const getServices = async () => {
  const data = await fetch("https://easydoc-three.vercel.app/doctors");
  const services = await data.json();
  return services;
};

export default getServices;
