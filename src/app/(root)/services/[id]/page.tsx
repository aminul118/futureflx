import getServices from "@/lib/getServices";
import { ParamsType } from "@/lib/types";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

interface ServiceType {
  id: number;
  name: string;
  description: string;
  details: string;
  image: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const services = getServices();
  const service = services.find((s) => s.id.toString() === id);

  return {
    title: `${service?.name} at FutureFlx`,
    description: service?.details,
  };
}

const IndivisualService = async ({ params }: ParamsType) => {
  const { id } = await params;
  const newId = parseInt(id);
  const services: ServiceType[] = getServices();
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
