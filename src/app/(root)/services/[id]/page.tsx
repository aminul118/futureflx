import getServices from "@/lib/getServices";
import Image from "next/image";
import React from "react";

export interface ParamsType {
  params: {
    id: string;
  };
}

interface ServiceType {
  id: number;
  name: string;
  description: string;
  details: string;
  image: string;
}

const IndivisualService = async ({ params }: ParamsType) => {
  const { id } = await params;
  const newId = parseInt(id, 10);

  const services: ServiceType[] = await getServices;

  const specific = services.find((service) => service.id === newId);

  if (!specific) {
    return (
      <div className="text-center text-red-500">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  const { name, details, image } = specific;

  return (
    <div className="max-w-3xl mx-auto space-y-4 bg-white p-12 mt-12">
      <Image
        src={image}
        width={150}
        height={150}
        alt={name}
        className="mx-auto"
      />
      <h1 className="text-4xl font-bold text-center mt-8">{name}</h1>
      <p className="text-justify">{details}</p>
    </div>
  );
};

export default IndivisualService;
