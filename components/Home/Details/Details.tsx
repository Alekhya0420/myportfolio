import { contactData } from '@/Data/data';
import React from 'react';
import KnowledgeHeading from '@/components/Helper/KnowledgeHeading';
import {education} from '@/Data/data';

const Details = () => {


  return (
    <div className="pt-16 pb-[150px] bg-[#0f0715] text-white">
      <KnowledgeHeading>My Details</KnowledgeHeading>
      <div className="container mx-auto flex  gap-8 mt-8 px-4">

        {/* Left Side: Educational Qualifications */}
        <div className="flex-1 bg-gradient-to-b from-[#1c1a29] to-[#302d46] p-8 rounded-lg shadow-md">
          <div className="text-2xl font-bold mb-8 text-[#f54291]">
            Educational Qualifications
          </div>
          {education.map((item, index) => (
            <div
              key={index}
              className="mb-6 bg-[#2e2743] p-5 rounded-lg shadow-lg hover:bg-[#3a3551] hover:scale-105  duration-500"
            >
              <div className="text-lg font-semibold text-[#ffb3d9]">{item.title}</div>
              <div className="text-sm text-gray-300 mt-1">{item.details}</div>
            </div>
          ))}
        </div>

        {/* Right Side: Contact Information */}
        <div className="flex-1 bg-gradient-to-b from-[#1c1a29] to-[#302d46] p-8 rounded-lg shadow-md">
          <div className="text-2xl font-bold mb-8 text-[#f54291]">Contact Information</div>
          <div className="mb-6">
            <div className="text-lg font-semibold text-[#ffb3d9]">Phone</div>
            <div className="text-sm text-gray-300 mt-1">{contactData.phone}</div>
          </div>
          <div className="mb-6">
            <div className="text-lg font-semibold text-[#ffb3d9]">Email</div>
            <div className="text-sm text-gray-300 mt-1">{contactData.email}</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-[#ffb3d9]">Address</div>
            <div className="text-sm text-gray-300 mt-1">{contactData.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

