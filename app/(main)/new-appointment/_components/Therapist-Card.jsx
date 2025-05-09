import SpotlightCard from '@/components/Spotlightcard';
import Image from 'next/image';
import React from 'react';

function TherapistCard({ therapist }) {
  return (
    <div className="p-2">
      <SpotlightCard spotlightColor={"rgba(102, 161, 255, 0.5)"}>
        <div className="flex items-center gap-4 p-4 rounded-lg ">
          {/* Thumbnail-style image */}
          <Image
            src={therapist.image}
            alt={therapist.name}
            height={300}
            width={200}
            className="w-36 h-36 rounded-full object-cover"
          />
          
          {/* Details section */}
          <div className="flex flex-col justify-between">
            <h2 className="text-lg font-bold line-clamp-1">{therapist.name}</h2>
            <p className="text-sm text-gray-600 line-clamp-1">{therapist.specialization}</p>
            <p className="text-sm text-gray-500">{therapist.experience} experience</p>
            <p className="text-sm text-gray-500">
              Languages: {therapist.languages.join(', ')}
            </p>
            <p className="text-sm text-gray-500">Location: {therapist.location}</p>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}

export default TherapistCard;
