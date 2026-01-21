/** @format */

import Image from "next/image";
import React from "react";

export default function Duies2ndPart() {
  return (
    <div>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10'>
        <div className='w-full lg:w-1/2'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Duis convallis elit blandit turpis
          </h2>
          <p className='text-gray-700 mb-6 leading-relaxed'>
            Tellus fermentum laoreet dignissim risus scelerisque pretium
            ullamcorper pretium. Sapien ut tellus ut hendrerit mauris. Varius
            dui sed vestibulum quis tellus egestas dolor eget magna. Dui
            imperdiet interdum parturient vitae. Nunc gravida lobortis ut ut in
            nisl facilisis amet. Aenean feugiat ultrices mauris gravida iaculis.
            Amet sem.
          </p>
          <button className='px-6 py-2 bg-white rounded-md shadow hover:bg-gray-100 transition'>
            Start for Free
          </button>
        </div>
        <div className='relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg'>
          <Image
            src='/images/Duis2.png'
            alt='Large project'
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </div>
    </div>
  );
}
