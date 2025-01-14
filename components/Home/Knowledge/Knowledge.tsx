import KnowledgeHeading from '@/components/Helper/KnowledgeHeading'
import React from 'react'
import {skillset} from '@/Data/data'
import KnowledgeCard from './KnowledgeCard'

const Knowledge = () => {
  return (
    <div className='pt-16 pb-[150px] bg-[#0f0715]'>
        <KnowledgeHeading>Knowledge</KnowledgeHeading>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-[60%]
        items-center gap-10 mt-20 mx-auto'>
            {
             skillset.map((skill)=>{
                return <div key={skill.id}>
                <KnowledgeCard skill={skill}/>
                </div>
             })   
            }
        </div>
    </div>
  )
}

export default Knowledge