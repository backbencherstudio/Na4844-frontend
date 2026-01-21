/** @format */

"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Project Name",
    description:
      "Share your footage and any relevant media assets via the upload portal",
    imageSrc: "/images/upload (2).png",
  },
  {
    id: 2,
    title: "Project Name",
    description:
      "Your video is given an eye-catching thumbnail, tags, optimized for success and posted using our full service process.",
    imageSrc: "/images/home-page/workflow-3.png",
  },
  {
    id: 3,
    title: "Project Name",
    description:
      "Our team of editors cuts, polishes, and optimizes a video to match your goals and audience.",
    imageSrc: "/images/home-page/workflow-2.png",
  },
];

export default function ProjectShowcase() {
  return (
    <section
      className='relative '
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #7EA7CC 37.29%, rgba(255, 255, 255, 0) 100%)",
      }}>
      <Image
        src='/images/back/border.svg'
        alt='sdf'
        height={5000}
        width={5000}
        className='h-full w-full absolute'></Image>
      <Image
        src='/images/back/dhew.png'
        alt='sdf'
        height={500}
        width={500}
        className='h-full w-full absolute'></Image>
      {/* Top cards */}
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
        {projects.map(({ id, title, description, imageSrc }) => (
          <div
            key={id}
            className='bg-white bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg p-4 flex flex-col'>
            <div className='relative w-full h-40 rounded-lg overflow-hidden mb-4'>
              <Image src={imageSrc} alt={title} fill className='object-cover' />
            </div>
            <h3 className='font-semibold text-lg mb-2'>{title}</h3>
            <p className='text-gray-700 text-sm'>{description}</p>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-10'>
        <div className='relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg'>
          <Image
            src='/images/Duis2.png'
            alt='Large project'
            fill
            className='object-cover rounded-xl'
          />
        </div>

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
      </div>
    </section>
  );
}
