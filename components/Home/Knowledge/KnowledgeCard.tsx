"use client"
import React from 'react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image';

type props={
    skill: {
        id: number;
        title: string;
        image: string;
        percent: string;
    };
};

const KnowledgeCard = ({skill}:props) => {

  return (
   <Tilt className='shadow-2xl p-6 rounded-lg hover:bg-red-900 text-center rounded-lg bg-gray-900'>
    <Image src={skill.image} alt='image' width={80} height={80} className='mx-auto'></Image>
    <p className='text-red-100  text-opacity-60 text-center'>{skill.title}</p>
   </Tilt>
  )
}

export default KnowledgeCard