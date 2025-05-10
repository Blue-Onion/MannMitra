import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"


function TherapistCard({ therapist }) {
  return (
    <div>
      <Card className="bg-[#1e1e2f] border-0 shadow-none">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 rounded-lg">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src={therapist.image}
                alt={therapist.name}
                height={1080}
                width={720}
                className="h-40 w-40 rounded-full object-cover"
              />

              {/* Details section */}
              <div className="flex flex-col gap-2 justify-start">
                <h2 className="text-2xl md:text-3xl text-[#66a1ff] font-extrabold line-clamp-1">
                  {therapist.name}
                </h2>
                <p className="text-lg font-bold text-white line-clamp-1">
                  {therapist.specialization}
                </p>
                <p className="text-sm text-gray-500">
                  {therapist.experience} experience
                </p>
                <p className="text-sm text-gray-500">
                  Fees: <span className="font-bold text-white">{therapist.fees}</span>
                </p>
                <p className="text-sm text-gray-500 flex gap-2">
                  Expertise: <span className="flex gap-3">
                    {therapist.expertise.map((expert,i)=>{
                    return <Badge variant="secondary" className="font-bold" key={i}>{expert}</Badge>

                  })}
                    </span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="p-2 text-white">
              <Tabs defaultValue={therapist.sessionMode.online ? "online" : "offline"} className="w-[300px]">
                  <TabsList className="bg-primary/90">
                  {therapist.sessionMode.online &&<TabsTrigger value="online" className="text-white">
                      Online
                    </TabsTrigger>}
                  {therapist.sessionMode.offline &&  <TabsTrigger value="offline" className="text-white">
                      Offline
                    </TabsTrigger>}
                    
                  
                  </TabsList>
                  <TabsContent className={"flex flex-col gap-3"} value="online">
                  Available Via: <span className="flex gap-3">
                    {therapist.sessionMode.online?.map((expert,i)=>{
                    return <Badge variant="secondary" className="font-bold" key={i}>{expert}</Badge>

                  })}
                    </span>
                  </TabsContent>
                  <TabsContent className={"flex flex-col gap-3"} value="offline">
                  Available In: <span className="flex gap-3">
                    {therapist.sessionMode.offline?.map((expert,i)=>{
                    return <Badge variant="secondary" className="font-bold" key={i}>{expert}</Badge>

                  })}
                    </span>
                  </TabsContent>
                </Tabs>
              </div>
              <div className="flex items-center justify-start">

              <Link href="/">
                <Button variant="book">Book Now</Button>
              </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TherapistCard;
