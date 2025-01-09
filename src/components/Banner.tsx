import React from 'react';

interface BannerProps {
  businessName: string;
  bannerImage: string;
}

const Banner: React.FC<BannerProps> = ({ businessName, bannerImage }) => {
  return (
    <div className="relative h-20 lg:h-72 rounded-lg overflow-hidden">
      <img src={bannerImage} alt={businessName} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">{businessName}</h1>
      </div>
    </div>
  );
};

export default Banner;

