import SpotlightCard from "@/components/Spotlightcard";
import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function TherapistCard({ therapist }) {
  return (
    <div className="">
      <SpotlightCard>
        <div className="flex flex-col gap-4 rounded-lg ">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={therapist.image}
              alt={therapist.name}
              height={1080}
              width={720}
              className="w-50 h-50 rounded-full object-cover"
            />

            {/* Details section */}
            <div className="flex flex-col gap-3 justify-start">
              <h2 className="text-2xl md:text-3xl text-[#66a1ff] font-extrabold line-clamp-1">
                {therapist.name}
              </h2>
              <p className="text-lg font-bold line-clamp-1">
                {therapist.specialization}
              </p>
              <p className="text-sm text-gray-500">
                {therapist.experience} experience
              </p>
              <p className="text-sm text-gray-500">
                Fees:
                <span className="font-bold text-white">{therapist.fees}</span>
              </p>
              <p className="text-sm text-gray-500">
                Location: {therapist.location}
              </p>
            </div>
          </div>
          <div className="bg-amber-600 p-2 rounded-lg">
            <Tabs defaultValue="account" className="w-[400px] bg-backdrop/50">
              <TabsList>
                <TabsTrigger value="account">Online</TabsTrigger>
                <TabsTrigger value="password">Offline</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}

export default TherapistCard;
