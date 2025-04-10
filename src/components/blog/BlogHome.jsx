import React from 'react'
import { LeftSifebar } from './LeftSifebar'
import { RightSide } from './RightSide'
import Link from 'next/link';



export const BlogHome = ({cards}) => {




    return (
        <div className='container mx-auto p-6 flex flex-col md:flex-row gap-6'>

            <div className=' w-full md:w-1/5'>
                <LeftSifebar />
            </div>

            <div className=' w-full md:w-3/5 shadow-md p-4'>

                <div className=' w-full shadow-md h-[200px]'>
                    Ads
                </div>

                <div className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {cards.map((card,index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                                <div className="p-4 text-center">
                                    <h4 className="text-xl font-semibold">
                                        

                                        <Link href={`/${card?.base}/${card.title.replace(/ /g, "-")}`}>
                                        {card.title}
                                        </Link>
                                        
                                        
                                        </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className=' w-full md:w-1/5'>
                <RightSide />
            </div>

        </div>
    )
}
