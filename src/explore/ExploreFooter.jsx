import React from 'react'

const ExploreFooter = () => {
  return (
    <div className='bg-gradient-to-t from-purple-700 via-gray-950 to-black mt-10 pt-40 pb-20'>
        <div className='relative flex flex-wrap font-poppins justify-evenly'>
            <div className='text-white p-8'>
                <div className='font-semibold md:text-xl bg-gradient-to-r from-pink-600 via-cyan-400 to-gray-200 bg-clip-text text-transparent'>
                    About Hack of Clans 
                </div> 
                <div className='text-xs md:text-sm max-w-md w-full bg-gradient-to-r from-pink-100 via-cyan-200 to-gray-200 bg-clip-text text-transparent'>
                    Hack of Clans is a dynamic platform built to empower aspiring innovators, developers, and creators by providing a space to create, connect, and compete. We aim to break barriers in the hackathon ecosystem by helping individuals find like-minded peers, form powerful teams, and bring transformative ideas to life. Whether you're a first-time coder or a seasoned hacker, Hack of Clans offers the tools, community, and exposure needed to thrive in tech-driven challenges.

                    Our mission is to foster collaboration over competition, cultivate skills, and spark innovation across diverse domains. Join us in redefining what it means to build and grow together.
                </div>
            </div> 
            <div className='hidden md:block md:bg-gray-300 md:w-[2px] md:h-[40vh] md:rounded-lg md:mt-14 md:ml-4'>
            </div>
            <div className='p-8'>
                <div className='font-semibold md:text-xl bg-gradient-to-r from-pink-600 via-cyan-400 to-gray-200 bg-clip-text text-transparent'>
                    Connect With Us 
                </div> 
                <div className='text-xs md:text-sm max-w-md w-full  bg-gradient-to-r from-pink-100 via-cyan-200 to-gray-200 bg-clip-text text-transparent'>
                    We’d love to hear from you! For any queries, partnerships, or feedback, feel free to reach out at:
                </div> 
                <div className='bg-gradient-to-r from-pink-100 via-cyan-200 to-gray-200 bg-clip-text text-transparent'>
                    <a href="mailto:hackofclans.pbl@gmail.com" className="underline decoration-white">hackofclans.pbl@gmail.com</a>
                </div> 
                <div className='text-xs md:text-sm max-w-md w-full bg-gradient-to-r from-pink-100 via-cyan-200 to-gray-200 bg-clip-text text-transparent'>
                    Stay connected. Stay inspired. Be a part of the clan.
                </div> 
            </div>
        </div>
    </div>
  )
}

export default ExploreFooter