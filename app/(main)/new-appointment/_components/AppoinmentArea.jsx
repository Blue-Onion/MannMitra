"use client";
import React, { useEffect, useState } from "react";
import TherapistCard from "./Therapist-Card";
import { Button } from "@/components/ui/button";
import { LucideListFilter, MapPin, XIcon } from "lucide-react";

const AppoinmentArea = ({ data }) => {
  const [mode, setMode] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState('');
  const [experience, setExperience] = useState('');
  const [filteredData, setFilteredData] = useState([...data]);

  useEffect(() => {
    let filtered = [...data];

    if (mode) {
      filtered = filtered.filter(
        (therapist) =>
          therapist.sessionMode[mode] && therapist.sessionMode[mode].length > 0
      );
    }
    if (location) {
      filtered = filtered.filter(
        (therapist) =>
          therapist.sessionMode["offline"] &&
          therapist.sessionMode["offline"].some((place) =>
            place.toLowerCase().includes(location.toLowerCase())
          )
      );
    }
    if (experience) {
      filtered = filtered.filter(
        (therapist) => parseInt(therapist.experience) >= parseInt(experience)
      );
    }
    if (price) {
      filtered = filtered.filter(
        (therapist) => parseInt(therapist.fees) <= parseInt(price)
      );
    }
    setFilteredData(filtered);
  }, [mode, location, price, experience, data]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center justify-end">
        <Button><MapPin className="h-8 w-8 mr-2"/> Location</Button>
        <Button className="">
          <LucideListFilter className="h-8 mr-2 w-8 " />
          <span className="font-bold">Filters</span>
        </Button>
        {(mode|| location|| price|| experience)&&<Button variant={"desctructive"}><XIcon className="w-4 h-4 mr-2" />Clear Filters</Button>}
        
      </div>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-5">
        {filteredData.map((therapist, index) => (
          <TherapistCard therapist={therapist} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AppoinmentArea;
