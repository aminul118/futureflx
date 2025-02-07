import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  service: {
    id: number;
    name: string;
    description: string;
    details: string;
    image: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { id, name, image, description } = service;

  return (
    <Link href={`/services/${id}`}>
      <div className="text-center bg-white h-72 p-8 space-y-4 w-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <Image
          src={image}
          width={50}
          height={50}
          alt={name}
          className="mx-auto"
        />
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
