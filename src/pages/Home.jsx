import React, { useEffect, useRef, useState } from 'react';
import { useClanStore } from '../store/clan.store';
import Startup from './Startup.jsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {color, motion} from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Home = () => {
  const { user } = useClanStore(); 

  // const [H, setH] = useState(false);

  const [Letter , setLetter] = useState(null);

  // useEffect(() => {
  //   console.log(H);
    
  // },[H]) 

  console.log(user);
  
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    gsap.from('#goodmornin', {

      opacity:0,
      duration:2,
      scrollTrigger:{
        trigger:'#goodmornin',
        scroller: '.custom-scrollbar',
        // markers:true,
        start:'top 80%',
        end:'top 20%',
        scrub:true,
      }
    })
  })

useGSAP(() => {
  gsap.from('.create', {
    y: 200,
    opacity:0,
    duration: 0.2,
    stagger: 0.1,
    scrollTrigger:{
      trigger:'.create',
      scroller: '.custom-scrollbar',
      // markers:true,
      start:'top 80%',
      end:'top 80%',
    }
  });
}, []);

useGSAP(() => {
  gsap.from('.with', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'linear',
    scrollTrigger:{
      trigger:'.create',
      scroller: '.custom-scrollbar',
      // markers:true,
      start:'top 80%',
      end:'top 80%',
    }
  });
}, []);

useGSAP(() => {
  gsap.from('.connect', {
    y: 200,
    opacity:0,
    duration: 0.2,
    stagger: 0.1,
    scrollTrigger:{
      trigger:'.create',
      scroller: '.custom-scrollbar',
      // markers:true,
      start:'top 50%',
      end:'top 50%',
    }
  });
}, []);

useGSAP(() => {
  gsap.from('.compete', {
    y: 200,
    opacity:0,
    duration: 0.2,
    stagger: 0.1,
    scrollTrigger:{
      trigger:'.create',
      scroller: '.custom-scrollbar',
      // markers:true,
      start:'top 20%',
      end:'top 20%',
    }
  });
}, []);

useGSAP(() => {
  gsap.from('.peers', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'linear',
    scrollTrigger:{
      trigger:'.create',
      scroller: '.custom-scrollbar',
      // markers:true,
      start:'top 50%',
      end:'top 50%',
    }
  });
}, []);

useGSAP(() => {
  gsap.from('.purpose', {
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'linear',
    scrollTrigger:{
      trigger:'.create',
      scroller: '.custom-scrollbar',
      // markers:true,
      start:'top 20%',
      end:'top 20%',
    }
  });
}, []);

useGSAP(()=>{
  gsap.from('.omkar', {
    opacity:0,
    y:100,
    stagger:0.1,
    scrollTrigger:{
      trigger:'.omkar',
      scroller:'.custom-scrollbar',
      start:'top 50%'
    }
  })
})

useGSAP(()=>{
  gsap.from('.tanmay', {
    opacity:0,
    y:100,
    stagger:0.1,
    scrollTrigger:{
      trigger:'.tanmay',
      scroller:'.custom-scrollbar',
      start:'top 50%'
    }
  })
})

useGSAP(()=>{
  gsap.from('.soham', {
    opacity:0,
    y:100,
    stagger:0.1,
    scrollTrigger:{
      trigger:'.soham',
      scroller:'.custom-scrollbar',
      start:'top 50%'
    }
  })
})

useGSAP(()=>{
  gsap.from('.pavi', {
    opacity:0,
    y:100,
    stagger:0.1,
    scrollTrigger:{
      trigger:'.pavi',
      scroller:'.custom-scrollbar',
      start:'top 90%'
    }
  })
})

  return (
    <>
      <div className='relative w-full h-screen bg-black overflow-y-scroll custom-scrollbar overflow-x-hiddden'>
        <div className='relative w-full h-screen  flex flex-col items-center justify-center overflow-hidden'>
            <motion.div
            className=' w-full text-center flex justify-center cursor-default'>

            <motion.span
            initial={{y:120, opacity:0}}
            animate={{y:0, opacity:100}}
            transition={{duration: 1, ease:"backInOut"}}
            className='text-white md:text-7xl text-3xl font-black-ops hover:text-fuchsia-800 transition duration-300'
            >
              <motion.div
              whileHover={{scale: 1.2}}
              transition={{duration:0.2}}
              onHoverStart={() => setLetter('H')}
              onHoverEnd={() => setLetter(null)}
              >
                H
              </motion.div>
            </motion.span>

            <motion.span
            initial={{y:520, opacity:0}}
            animate={{y:0, opacity:100,}}
            transition={{duration: 1, ease:"backInOut", delay:0.5}}
            className='text-white md:text-7xl text-3xl font-black-ops hover:text-fuchsia-700 transition duration-300'
            >
              <motion.div
              whileHover={{scale: 1.2}}
              transition={{duration:0.2}}
              onHoverStart={() => setLetter('A')}
              onHoverEnd={() => setLetter(null)}
              >
                A
              </motion.div>
            </motion.span>
            <motion.span
            initial={{y:520, opacity:0}}
            animate={{y:0, opacity:100,}}
            transition={{duration: 1, ease:"backInOut", delay:0.7}}
            className='text-white md:text-7xl text-3xl font-black-ops hover:text-fuchsia-500 transition duration-300'
            >
              <motion.div
              whileHover={{scale: 1.2}}
              transition={{duration:0.2}}
              onHoverStart={() => setLetter('C')}
              onHoverEnd={() => setLetter(null)}
              >
                C
              </motion.div>
            </motion.span>
            <motion.span
            initial={{y:520, opacity:0}}
            animate={{y:0, opacity:100,}}
            transition={{duration: 1, ease:"backInOut", delay:0.8}}
            className='text-white md:text-7xl text-3xl font-black-ops hover:text-fuchsia-300 transition duration-300'
            >
              <motion.div
              whileHover={{scale: 1.2}}
              transition={{duration:0.2}}
              onHoverStart={() =>setLetter('K')}
              onHoverEnd={() => setLetter(null)}
              >
                K
              </motion.div>
            </motion.span>
            </motion.div>

            {/* OF Wala div */}
            <motion.div
            className=' w-full text-center flex justify-center mt-6 cursor-default'>

            <motion.span
            initial={{x:120, opacity:0}}
            animate={{x:0, opacity:100}}
            transition={{duration: 1, ease:"backInOut", delay:1}}
            className='text-white md:text-7xl text-3xl font-black-ops hover:text-cyan-700 transition duration-300'
            >
              <motion.div
              whileHover={{scale: 1.2}}
              transition={{duration:0.2}}
              onHoverStart={() => setLetter('O')}
              onHoverEnd={() => setLetter(null)}
              >
                O
              </motion.div>
            </motion.span>
            <motion.span
            initial={{x:520, opacity:0}}
            animate={{x:0, opacity:100,}}
            transition={{duration: 1, ease:"backInOut", delay:1.25}}
            className='text-white md:text-7xl text-3xl font-black-ops hover:text-cyan-900 transition duration-300'
            >
              <motion.div
              whileHover={{scale: 1.2}}
              transition={{duration:0.2}}
              onHoverStart={() => setLetter('F')}
              onHoverEnd={() => setLetter(null)}
              >
                F
              </motion.div>
            </motion.span>
            </motion.div>

            {/* CLANS */}
            <motion.div
            
            className='w-full mt-6 flex justify-center cursor-default'
            >
                <motion.span
                initial={{y:520, opacity:0}}
                animate={{y:0, opacity:100,}}
                transition={{duration: 1.75, ease:"backInOut", delay:1.25}}
                className='text-white md:text-7xl text-3xl font-black-ops hover:text-fuchsia-900 transition duration-300'
                >
                  <motion.div
                  whileHover={{scale: 1.2}}
                  transition={{duration:0.2}}
                  onHoverStart={() => setLetter('X')}
                  onHoverEnd={() => setLetter(null)}
                  >
                    C
                  </motion.div>
                </motion.span>

                <motion.span
                initial={{x:520, opacity:0}}
                animate={{x:0, opacity:100,}}
                transition={{duration: 1.25, ease:"backInOut", delay:1.25}}
                className='text-white md:text-7xl text-3xl font-black-ops hover:text-fuchsia-700 transition duration-300'
                >
                  <motion.div
                  whileHover={{scale: 1.2}}
                  transition={{duration:0.2}}
                  onHoverStart={() => setLetter('L')}
                  onHoverEnd={() => setLetter(null)}
                  >
                    L
                  </motion.div>
                </motion.span>

                <motion.span
                initial={{y:-520, opacity:0}}
                animate={{y:0, opacity:100,}}
                transition={{duration: 1.5, ease:"backInOut", delay:1.25}}
                className='text-white md:text-7xl text-3xl font-black-ops hover:text-purple-500 transition duration-300'
                >
                  <motion.div
                  whileHover={{scale: 1.2}}
                  transition={{duration:0.2}}
                  onHoverStart={() => setLetter('Y')}
                  onHoverEnd={() => setLetter(null)}
                  >
                    A
                  </motion.div>
                </motion.span>

                <motion.span
                initial={{x:-520, y:400, opacity:0}}
                animate={{x:0, y:0, opacity:100,}}
                transition={{duration: 1, ease:"backInOut", delay:1.25}}
                className='text-white md:text-7xl text-3xl font-black-ops hover:text-purple-700 transition duration-300'
                >
                  <motion.div
                  whileHover={{scale: 1.2}}
                  transition={{duration:0.2}}
                  onHoverStart={() => setLetter('N')}
                  onHoverEnd={() => setLetter(null)}
                  >
                    N
                  </motion.div>
                </motion.span>

                <motion.span
                initial={{x:-320, y:-320, opacity:0}}
                animate={{x:0, y:0, opacity:100,}}
                transition={{duration: 1.25, ease:"backInOut", delay:1.25}}
                className='text-white md:text-7xl text-3xl font-black-ops hover:text-purple-800 transition duration-300'
                >
                  <motion.div
                  whileHover={{scale: 1.2}}
                  transition={{duration:0.2}}
                  onHoverStart={() => setLetter('S')}
                  onHoverEnd={() => setLetter(null)}
                  >
                    S
                  </motion.div>
                </motion.span>

            </motion.div>

            {
              Letter === 'H' ? 
              <motion.div
                  initial={{x:240,opacity:0, scale:0}}
                  animate={{x:0,scale:1,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='absolute top-[25%] left-[5%] max-w-md w-full backdrop-blur-lg bg-gray-950/80 p-4 rounded-lg text-white text-center  drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  >
                      <div className='text-lg font-bold text-white'>H – Hackathons: The Forge of Innovation</div> 
                      Hackathons are more than coding sprints—they are collaborative cauldrons of creativity where minds come together to solve real-world problems in real time. In these high-energy environments, individuals push their boundaries, discover new technologies, and most importantly, learn by doing. Whether you're a designer, developer, or strategist, hackathons challenge you to think fast, collaborate effectively, and ship ideas into reality. They foster an ecosystem where failure is a step towards growth and experimentation is encouraged. Participating in hackathons not only sharpens technical skills but also nurtures resilience and adaptability—traits vital in any successful team.
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'H' ? 
              <motion.div
                  initial={{y:-240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='absolute top-[15%] left-[75%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Baloon.png" alt="COC_IMAGE" className="w-40 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'H' ? 
              <motion.div
                  initial={{y:200,opacity:0}}
                  animate={{y:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='absolute top-[76%] left-[70%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Skeleton.png" alt="COC_IMAGE" className="w-28 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'A' ? 
              <motion.div
                  initial={{x:-240,opacity:0, scale:0}}
                  animate={{x:0,scale:1,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='absolute top-[25%] left-[65%] max-w-md w-full backdrop-blur-lg bg-gray-950/80 p-4 rounded-lg text-white text-center  drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  >
                      <div className='text-lg font-bold text-white'>A - Alignment: The Power of Shared Vision</div> 
                      Alignment within a team is the glue that holds diverse minds together. In the chaos of a hackathon, where the clock is always ticking, its essential that everyone on the team shares a common understanding of the goal. When team members align on their mission, tasks become more purposeful, communication flows naturally, and synergy amplifies the teams efficiency. Alignment turns individual efforts into collective momentum. It transforms a group of skilled individuals into a cohesive unit moving in the same direction. In hackathons, its not just about what you build—its about building it together, with purpose.
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'A' ? 
              <motion.div
                  initial={{y:440,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='absolute top-[62%] left-[15%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Hog_Rider.png" alt="COC_IMAGE" className="w-56 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'C' ? 
              <motion.div
                  initial={{x:240,opacity:0, scale:0}}
                  animate={{x:0,scale:1,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='absolute top-[25%] left-[5%] max-w-md w-full backdrop-blur-lg bg-gray-950/80 p-4 rounded-lg text-white text-center  drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  >
                      <div className='text-lg font-bold text-white'>C - Communication: The Unsung Hero of Every Project</div> 
                      Clear, honest, and respectful communication is the heartbeat of every successful hackathon team. In the absence of effective communication, even the most talented teams can falter. Sharing ideas openly, asking questions without hesitation, and giving and receiving feedback constructively help create a culture of trust. Communication also bridges knowledge gaps—developers learn from designers, and vice versa. Especially under time pressure, the ability to articulate thoughts quickly and understand others’ perspectives becomes the defining factor between confusion and clarity, chaos and creativity.
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'C' ? 
              <motion.div
                  initial={{y:240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='absolute top-[52%] left-[75%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Valkyrie.png" alt="COC_IMAGE" className="w-56 h-auto"/>
                  </motion.div>
              
              : <></>
            }


            {
              Letter === 'K' ? 
              <motion.div
                  initial={{x:-240,opacity:0, scale:0}}
                  animate={{x:0,scale:1,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='absolute top-[25%] left-[65%] max-w-md w-full backdrop-blur-lg bg-gray-950/80 p-4 rounded-lg text-white text-center  drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  >
                      <div className='text-lg font-bold text-white'>K - Knowledge Sharing: Multiplying Intelligence</div> 
                      Every hackathon is an opportunity not just to showcase what you know, but to learn from others. Knowledge sharing builds collective intelligence within a team. A single line of shared code, a quick tip on version control, or an insight into user experience can elevate the entire project. It fosters humility, curiosity, and openness. When teammates freely offer their knowledge and seek out others’, the team grows together. The spirit of "I’ll teach you, you teach me" leads to unexpected innovation and lifelong friendships formed over midnight debugging sessions and shared breakthroughs.
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'K' ? 
              <motion.div
                  initial={{y:240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='absolute top-[64%] left-[15%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Builder.png" alt="COC_IMAGE" className="w-56 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'O' ? 
              <motion.div
                  initial={{x:240,opacity:0, scale:0}}
                  animate={{x:0,scale:1,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='absolute top-[25%] left-[5%] max-w-md w-full backdrop-blur-lg bg-gray-950/80 p-4 rounded-lg text-white text-center  drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  >
                      <div className='text-lg font-bold text-white'>O - Openness: The Key to Diverse Ideas</div> 
                      Openness is about being receptive—to feedback, to different perspectives, and to wild ideas that just might work. Diverse teams thrive when each voice is valued. Being open doesn't just mean accepting different roles or tasks—it means embracing ambiguity, change, and the unknown with courage. In hackathons, this often leads to unconventional but brilliant solutions. Teams that foster openness become incubators for innovation, because every idea gets its moment in the light before being tested and refined. Great teams build great products when they’re unafraid to dream out loud.
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'O' ? 
              <motion.div
                  initial={{y:240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='absolute top-[65%] left-[70%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Giant.png" alt="COC_IMAGE" className="w-56 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'F' ? 
              <motion.div
                  initial={{x:-240,opacity:0, scale:0}}
                  animate={{x:0,scale:1,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='absolute top-[25%] left-[65%] max-w-md w-full backdrop-blur-lg bg-gray-950/80 p-4 rounded-lg text-white text-center  drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  >
                      <div className='text-lg font-bold text-white'>F - Friendship: The Unexpected Prize</div> 
                      Though hackathons are often competitions, their real reward is connection. Working intensely with strangers or acquaintances builds bonds that last far beyond the event. There's a special camaraderie in sleepless nights spent brainstorming, designing, and debugging together. These friendships are rooted in shared struggle, laughter, and growth. They often blossom into long-term collaborations, co-founders, or simply trusted peers in your tech network. Friendship formed through creation is one of the most authentic kinds—and hackathons are fertile ground for them.
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'F' ? 
              <motion.div
                  initial={{y:-240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='absolute top-[15%] left-[15%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Baby Dragon.png" alt="COC_IMAGE" className="w-56 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'X' ? 
              <motion.div
                  initial={{x:240,opacity:0, scale:0}}
                  animate={{x:0,scale:1,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='absolute top-[25%] left-[5%] max-w-md w-full backdrop-blur-lg bg-gray-950/80 p-4 rounded-lg text-white text-center  drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  >
                      <div className='text-lg font-bold text-white'>C - Collaboration: The Superpower of Teams</div> 
                      At the heart of any successful hackathon project lies seamless collaboration. It’s not about one person doing everything—it’s about everyone doing their part and helping others shine. Collaboration is where roles overlap, ideas evolve through discussion, and feedback strengthens the output. It’s where trust is built not just in ability, but in reliability. The magic of collaboration is that it creates something greater than the sum of its parts. And when a team truly collaborates, you can feel it in the product—it just works.
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'X' ? 
              <motion.div
                  initial={{x:240,opacity:0, }}
                  animate={{x:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='absolute top-[52%] left-[75%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Archer.png" alt="COC_IMAGE" className="w-56 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'L' ? 
              <motion.div
                  initial={{x:-240,opacity:0, scale:0}}
                  animate={{x:0,scale:1,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='absolute top-[25%] left-[65%] max-w-md w-full backdrop-blur-lg bg-gray-950/80 p-4 rounded-lg text-white text-center  drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  >
                      <div className='text-lg font-bold text-white'>L - Leadership: Leading by Empowering</div> 
                      Clear, honest, and respectful communication is the heartbeat of every successful hackathon team. In the absence of effective communication, even the most talented teams can falter. Sharing ideas openly, asking questions without hesitation, and giving and receiving feedback constructively help create a culture of trust. Communication also bridges knowledge gaps—developers learn from designers, and vice versa. Especially under time pressure, the ability to articulate thoughts quickly and understand others’ perspectives becomes the defining factor between confusion and clarity, chaos and creativity.
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'L' ? 
              <motion.div
                  initial={{y:240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='absolute top-[52%] left-[15%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Barbarian King.png" alt="COC_IMAGE" className="w-80 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'Y' ? 
              <motion.div
                  initial={{x:240,opacity:0, scale:0}}
                  animate={{x:0,scale:1,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='absolute top-[25%] left-[5%] max-w-md w-full backdrop-blur-lg bg-gray-950/80 p-4 rounded-lg text-white text-center  drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  >
                      <div className='text-lg font-bold text-white'>A - Adaptability: Thriving in Uncertainty</div> 
                      If hackathons teach one skill above all, it’s adaptability. APIs fail, plans shift, and timelines shrink. Teams that thrive are those that don’t cling to a rigid plan but adapt quickly with a positive mindset. Adaptability is about staying calm in chaos, reprioritizing smartly, and pivoting with grace. It’s what allows a team to still present something meaningful even when half the features didn’t make it in. The ability to adapt is not just useful for hackathons—it’s essential for life.
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'Y' ? 
              <motion.div
                  initial={{y:240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='absolute top-[50%] left-[70%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Villager.png" alt="COC_IMAGE" className="w-56 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'N' ? 
              <motion.div
                  initial={{x:-240,opacity:0, scale:0}}
                  animate={{x:0,scale:1,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='absolute top-[25%] left-[65%] max-w-md w-full backdrop-blur-lg bg-gray-950/80 p-4 rounded-lg text-white text-center  drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  >
                      <div className='text-lg font-bold text-white'>N - Networking: Building Beyond Code</div> 
                      Hackathons are networking goldmines. You meet peers, mentors, judges, and sponsors—all in one place. But the best kind of networking here isn’t transactional—it’s authentic. It’s about conversations sparked by curiosity, collaboration that grows into camaraderie. These connections can lead to jobs, co-founders, ideas, or simply a new perspective. Hackathons open doors, but it’s up to you to step through and keep them open by staying genuine, helpful, and eager to learn.
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'N' ? 
              <motion.div
                  initial={{x:-240,opacity:0, }}
                  animate={{x:0,opacity:1}}
                  transition={{duration:1.6, ease:"backInOut"}}
                  className='absolute top-[5%] left-[5%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Dragon.png" alt="COC_IMAGE" className="w-96 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'S' ? 
              <motion.div
                  initial={{x:240,opacity:0, scale:0}}
                  animate={{x:0,scale:1,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='absolute top-[25%] left-[5%] max-w-md w-full backdrop-blur-lg bg-gray-950/80 p-4 rounded-lg text-white text-center  drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  >
                      <div className='text-lg font-bold text-white'>S - Synergy: When Everything Clicks</div> 
                      Synergy is that rare, electric moment when everyone in the team is in sync. Ideas flow, hands type faster, eyes shine with shared excitement. It’s the feeling of momentum building as you inch closer to your demo deadline. Synergy isn't random—it comes from alignment, trust, shared effort, and joy in the process. When synergy hits, you don’t just finish a project—you create an experience. It’s the ultimate reward of a well-bonded hackathon team.
                  </motion.div>
              
              : <></>
            }

            {
              Letter === 'S' ? 
              <motion.div
                  initial={{y:240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='absolute top-[52%] left-[65%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Witch.png" alt="COC_IMAGE" className="w-80 h-auto transform -scale-x-100"/>
                  </motion.div>
              
              : <></>
            }

            {
              !Letter ? 
              <motion.div
                  initial={{y:240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='hidden md:block md:absolute top-[32%] left-[85%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Witch.png" alt="COC_IMAGE" className="w-44 h-auto transform -scale-x-100"/>
                  </motion.div>
              
              : <></>
            }
            

              {
              !Letter ? 
              <motion.div
              initial={{x:-240,opacity:0, }}
                  animate={{x:0,opacity:1}}
                  transition={{duration:1.2, ease:"backInOut"}}
                  className='hidden md:block md:absolute top-[15%] left-[5%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Baloon.png" alt="COC_IMAGE" className="w-40 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              !Letter ? 
              <motion.div
                  initial={{y:-240,x:-480,opacity:0, scale:0.6}}
                  animate={{y:0,x:0,opacity:1, scale:1}}
                  transition={{duration:1.6, ease:"anticipate"}}
                  className='hidden md:block md:absolute -top-[5%] left-[15%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Dragon.png" alt="COC_IMAGE" className="w-96 h-auto"/>
                  </motion.div>
              
              : <></>
            }
            {
              !Letter ? 
              <motion.div
                  initial={{y:200,opacity:0}}
                  animate={{y:0,opacity:1}}
                  transition={{duration:0.8, ease:"backInOut"}}
                  className='hidden md:block md:absolute -bottom-7 left-[0%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Skeleton.png" alt="COC_IMAGE" className="w-28 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              !Letter ? 
              <motion.div
                  initial={{y:440,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:0.8, ease:"backInOut"}}
                  className='hidden md:block md:absolute -bottom-9 left-[10%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Hog_Rider.png" alt="COC_IMAGE" className="w-40 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              !Letter ? 
              <motion.div
                  initial={{y:240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='hidden md:block md:absolute -bottom-9 left-[65%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Valkyrie.png" alt="COC_IMAGE" className="w-36 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              !Letter ? 
              <motion.div
                  initial={{y:240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:0.4, ease:"backInOut"}}
                  className='hidden md:block md:absolute -bottom-5 left-[52%] md:max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Builder.png" alt="COC_IMAGE" className="w-44 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              !Letter ? 
              <motion.div
                  initial={{y:240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:0.8, ease:"backInOut"}}
                  className='hidden md:block md:absolute -bottom-5 left-[80%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Giant.png" alt="COC_IMAGE" className="w-64 h-auto"/>
                  </motion.div>
              
              : <></>
            }
          
            {
              !Letter ? 
              <motion.div
                  initial={{y:-240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:1, ease:"backInOut"}}
                  className='hidden md:block md:absolute top-[10%] left-[65%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Baby Dragon.png" alt="COC_IMAGE" className="w-44 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              !Letter ? 
              <motion.div
                  initial={{x:240,opacity:0, }}
                  animate={{x:0,opacity:1}}
                  transition={{duration:0.6, ease:"backInOut"}}
                  className='hidden md:block md:absolute bottom-0 left-[25%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Archer.png" alt="COC_IMAGE" className="w-28 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              !Letter ? 
              <motion.div
                  initial={{y:240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:0.4, ease:"backInOut"}}
                  className='hidden md:block md:absolute -bottom-9 left-[33%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Barbarian King.png" alt="COC_IMAGE" className="w-56 h-auto"/>
                  </motion.div>
              
              : <></>
            }

            {
              !Letter ? 
              <motion.div
                  initial={{y:240,opacity:0, }}
                  animate={{y:0,opacity:1}}
                  transition={{duration:0.2, ease:"backInOut"}}
                  className='hidden md:block md:absolute -bottom-10 left-[45%] max-w-md w-full p-4 rounded-lg text-white text-center'
                  >
                    <img src="./Villager.png" alt="COC_IMAGE" className="w-36 h-auto"/>
                  </motion.div>
              
              : <></>
            }
          <div className='absolute bottom-0 md:hidden flex flex-col justify-start items-start w-full p-8'>

          <div className='md:hidden text-white text-start w-full font-bold'>
              Hackathon 
          </div>
          <div className='md:hidden text-white text-end w-full font-bold'>
              Alignment
          </div>
          <div className='md:hidden text-white text-start w-full font-bold'>
              Collaboration 
          </div>
          <div className='md:hidden text-white text-end w-full font-bold'>
              Knowledge 
          </div>
          <div className='md:hidden text-white text-start w-full font-bold'>
              Openness 
          </div>
          <div className='md:hidden text-white text-end w-full font-bold'>
              Friendship 
          </div>
          <div className='md:hidden text-white text-start w-full font-bold'>
              Communication
          </div>
          <div className='md:hidden text-white text-end w-full font-bold'>
              Leadership 
          </div>
          <div className='md:hidden text-white text-start w-full font-bold'>
              Adaptability 
          </div>
          <div className='md:hidden text-white text-end w-full font-bold'>
              Networking 
          </div>
          <div className='md:hidden text-white text-start w-full font-bold'>
              Synergy 
          </div>
          </div>

        
        </div>

        <div className='relative w-full h-screen p-4 flex justify-center items-center flex-col'>
            <div id='goodmornin' className='absolute top-10 left-5 md:text-4xl font-poppins font-semibold text-white mt-8'>
                Hey There <span className='bg-gradient-to-r from-pink-600 via-purple-700 to-gray-400 bg-clip-text text-transparent'> {`${user.name}`} </span>  !
            </div>  

            {/* create */}
            <div className='flex text-white text-4xl md:text-9xl font-bold font-poppins w-full'>
              <span className='create'>C</span><span className='create'>R</span><span className='create'>E</span><span className='create'>A</span><span className='create'>T</span><span className='create'>E</span>
              <div className='text-sm md:text-2xl bg-gradient-to-r from-cyan-500 via-purple-700 to-gray-400 bg-clip-text text-transparent'>
                <span className='with'>&nbsp;W</span><span className='with'>I</span><span className='with'>T</span><span className='with'>H</span><span className='with'>{` `}P</span><span className='with'>A</span><span className='with'>S</span><span className='with'>S</span><span className='with'>I</span><span className='with'>O</span><span className='with'>N</span>
              </div>
            </div>
            
            {/* connect */}
            <div className='flex text-white text-4xl md:text-9xl font-bold font-poppins w-full mt-8 justify-center'>
              <span className='connect'>C</span><span className='connect'>O</span><span className='connect'>N</span><span className='connect'>N</span><span className='connect'>E</span><span className='connect'>C</span><span className='connect'>T</span>
              <div className='text-sm md:text-2xl bg-gradient-to-r from-pink-500 via-red-700 to-gray-400 bg-clip-text text-transparent'>
                <span className='peers'>&nbsp;W</span><span className='peers'>I</span><span className='peers'>T</span><span className='peers'>H</span><span className='peers'>{` `}P</span><span className='peers'>E</span><span className='peers'>E</span><span className='peers'>R</span><span className='peers'>S</span>
              </div>
            </div>

            {/* compete */}
            <div className='flex text-white text-4xl md:text-9xl font-bold font-poppins w-full mt-8 justify-end'>
              <span className='compete'>C</span><span className='compete'>O</span><span className='compete'>M</span><span className='compete'>P</span><span className='compete'>E</span><span className='compete'>T</span><span className='compete'>E</span>
              <div className='text-sm md:text-2xl bg-gradient-to-r from-amber-500 via-teal-400 to-rose-800 bg-clip-text text-transparent'>
                <span className='purpose'>&nbsp;W</span><span className='purpose'>I</span><span className='purpose'>T</span><span className='purpose'>H</span><span className='purpose'>{` `}P</span><span className='purpose'>U</span><span className='purpose'>R</span><span className='purpose'>P</span><span className='purpose'>O</span><span className='purpose'>S</span><span className='purpose'>E</span>
              </div>
            </div>
            <div className='flex justify-center max-w-md w-full rounded-lg text-white font-semibold font-poppins text-lg absolute bottom-10'> 
                Teams joined : {`${user.teams.length}`}
            </div>
        </div>
        
        <div className='w-full h-screen'>
            <div className='text-center font-poppins text-gray-200 font-semibold text-3xl'>
              Meet the developers 
            </div>
            <div className='flex flex-wrap justify-evenly mt-6'>

              <div className='relative max-w-md w-full font-poppins text-white  p-2 pl-14 rounded-lg'>
                <div className='absolute top-0 left-0 mt-10 bg-gray-700 rounded-2xl p-2 mr-4 omkar'>
                  <motion.div 
                  whileHover={{scale:1.2}}
                  className='py-1'>
                    <a href="https://github.com/Omkar-Sankpal" target='blank'>
                    <Github className='size-5 omkar'/>
                    </a>
                  </motion.div>
              
                </div>
                <motion.div 
                className='font-bold text-xl md:text-2xl z-30 w-full cursor-default'>
                  <span className='omkar hover:text-gray-800'>O</span>
                  <span className='omkar hover:text-gray-700'>M</span>
                  <span className='omkar text-gray-100 hover:text-gray-600'>K</span>
                  <span className='omkar text-gray-100 hover:text-gray-500'>A</span>
                  <span className='omkar text-gray-200 hover:text-gray-400'>R&nbsp;</span>
                  <span className='omkar text-gray-300 hover:text-gray-300'>S</span>
                  <span className='omkar text-gray-400 hover:text-gray-300'>A</span>
                  <span className='omkar text-gray-500 hover:text-gray-200'>N</span>
                  <span className='omkar text-gray-600 hover:text-gray-200'>K</span>
                  <span className='omkar text-gray-700 hover:text-gray-100'>P</span>
                  <span className='omkar text-gray-800 hover:text-gray-100'>A</span>
                  <span className='omkar text-gray-900 hover:text-gray-50'>L</span> 
                </motion.div>
                <div className='omkar text-xs md:text-sm font-semibold mt-2 bg-gradient-to-br from-gray-300 to-gray-600 bg-clip-text text-transparent z-20'>
                  "I designed the complete UI/UX of Hack of Clans in Figma, ensuring a seamless and intuitive user experience. I built the real-time chatting feature using Socket.io, allowing users to communicate instantly. I developed and integrated the backend for user authentication, team creation, and database handling. On the frontend, I connected APIs and maintained design consistency throughout the platform. I made sure every element functioned smoothly, from user login to team dashboards. My goal was to shape a platform that feels both powerful and user-friendly from the ground up."
                </div>
              </div>
              <div className='relative max-w-md w-full text-white p-2 pl-14'>
                <div className='absolute top-0 left-0 mt-10 bg-gray-700 rounded-2xl p-2 mr-4 tanmay'>
                  <motion.div whileHover={{scale:1.2}} className='py-1'>
                    <a href="https://github.com/TanmayNawlakhe" target='blank'>
                    <Github className='size-5 tanmay '/>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{scale:1.2}} className='py-1'>
                    <a href="https://in.linkedin.com/in/tanmay-nawlakhe" target='blank'>
                    <Linkedin className='size-5 tanmay '/>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{scale:1.2}} className='py-1'>
                    <a href="https://www.instagram.com/tanawlakhe?igsh=MXE3dGJ5NmRwMHc0Mg==" target='blank'>
                    <Instagram className='size-5 tanmay '/>
                    </a>
                  </motion.div>
              
                </div>
                <div className='font-bold text-xl md:text-2xl cursor-default'>
                  <span className='tanmay text-gray-50 hover:text-gray-800'>T</span>
                  <span className='tanmay text-gray-100 hover:text-gray-800'>A</span>
                  <span className='tanmay text-gray-100 hover:text-gray-800'>N</span>
                  <span className='tanmay text-gray-200 hover:text-gray-700'>M</span>
                  <span className='tanmay text-gray-200 hover:text-gray-600'>A</span>
                  <span className='tanmay text-gray-300 hover:text-gray-500'>Y&nbsp;</span>
                  <span className='tanmay text-gray-300 hover:text-gray-400'>N</span>
                  <span className='tanmay text-gray-400 hover:text-gray-400'>A</span>
                  <span className='tanmay text-gray-500 hover:text-gray-300'>W</span>
                  <span className='tanmay text-gray-600 hover:text-gray-200'>L</span>
                  <span className='tanmay text-gray-700 hover:text-gray-200'>A</span>
                  <span className='tanmay text-gray-800 hover:text-gray-100'>K</span>
                  <span className='tanmay text-gray-800 hover:text-gray-100'>H</span>
                  <span className='tanmay text-gray-800 hover:text-gray-50'>E</span>
                </div>
                <div className='tanmay text-xs md:text-sm font-semibold mt-2 bg-gradient-to-br from-gray-300 to-gray-600 bg-clip-text text-transparent'>
                  "I worked on building the frontend interface for Hack of Clans. I converted the Figma designs into responsive and interactive web components using modern React practices. I focused on ensuring a clean user flow, smooth animations, and visually consistent layouts across devices. I optimized user interactions, handled page transitions, and brought the UI to life. I collaborated closely with Omkar to align frontend behavior with backend functionality. My goal was to deliver an intuitive experience that makes users feel right at home from their first visit."
                </div>
              </div>
              <div className='relative max-w-md w-full text-white p-2 pl-14 '>
                <div className='absolute top-0 left-0 mt-10 bg-gray-700 rounded-2xl p-2 mr-4 soham'>
                  <motion.div whileHover={{scale:1.2}} className='py-1'>
                    <a href="https://github.com/soham-patil-05" target='blank'>
                    <Github className='size-5 soham '/>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{scale:1.2}} className='py-1'>
                    <a href="https://in.linkedin.com/in/soham-patil-27a9b2287" target='blank'>
                    <Linkedin className='size-5 soham '/>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{scale:1.2}} className='py-1'>
                    <a href="https://www.instagram.com/soham05_?igsh=MWRqems4ZThvZ2Y2Yw==" target='blank'>
                    <Instagram className='size-5 soham'/>
                    </a>
                  </motion.div>
              
                </div>
                <div className='font-bold text-xl md:text-2xl cursor-default'>
                  <span className='soham text-gray-50 hover:text-gray-800'>S</span>
                  <span className='soham text-gray-100 hover:text-gray-800'>O</span>
                  <span className='soham text-gray-200 hover:text-gray-700'>H</span>
                  <span className='soham text-gray-300 hover:text-gray-600'>A</span>
                  <span className='soham text-gray-300 hover:text-gray-500'>M&nbsp;</span>
                  <span className='soham text-gray-400 hover:text-gray-400'>P</span>
                  <span className='soham text-gray-500 hover:text-gray-300'>A</span>
                  <span className='soham text-gray-600 hover:text-gray-200'>T</span>
                  <span className='soham text-gray-700 hover:text-gray-100'>I</span>
                  <span className='soham text-gray-800 hover:text-gray-50'>L</span>
                </div>
                <div className='soham text-xs md:text-sm font-semibold mt-2 bg-gradient-to-br from-gray-300 to-gray-600 bg-clip-text text-transparent'>
                  "I focused on gathering quality hackathon data for Hack of Clans. I developed a Python-based web scraper that fetches up-to-date hackathon listings from multiple trusted sources. I ensured the scraped data stays clean, accurate, and ready for display. I handled dynamic websites and implemented automated extraction workflows. My aim was to keep users updated with the latest hackathons without manual effort. By handling the backend logic for event sourcing, I helped enhance the platform’s core utility—bringing fresh opportunities straight to our users."
                </div>
              </div>
              <div className='relative max-w-md w-full text-white p-2 pl-14'>
                <div className='absolute top-0 left-0 mt-10 bg-gray-700 rounded-2xl p-2 mr-4 pavi'>
                  <motion.div whileHover={{scale:1.2}} className='py-1'>
                    <a href="https://github.com/pavigupta21" target='blank'>
                    <Github className='size-5 pavi '/>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{scale:1.2}} className='py-1'>
                    <a href="https://in.linkedin.com/in/pavi-gupta" target='blank'>
                    <Linkedin className='size-5 pavi '/>
                    </a>
                  </motion.div>
              
                </div>
                <div className='font-bold text-xl md:text-2xl'>
                  <span className='pavi text-gray-50 hover:text-gray-800'>P</span>
                  <span className='pavi text-gray-100 hover:text-gray-700'>A</span>
                  <span className='pavi text-gray-200 hover:text-gray-600'>V</span>
                  <span className='pavi text-gray-300 hover:text-gray-500'>I&nbsp;</span>
                  <span className='pavi text-gray-400 hover:text-gray-400'>G</span>
                  <span className='pavi text-gray-500 hover:text-gray-300'>U</span>
                  <span className='pavi text-gray-600 hover:text-gray-200'>P</span>
                  <span className='pavi text-gray-700 hover:text-gray-100'>T</span>
                  <span className='pavi text-gray-800 hover:text-gray-50'>A</span>
                </div>
                <div className=' pavi text-xs md:text-sm font-semibold mt-2 bg-gradient-to-br from-gray-300 to-gray-600 bg-clip-text text-transparent'>
                  "I developed the team logic for the backend of Hack of Clans. I implemented core functionality like creating teams, adding members, managing roles, and validating team data. I ensured the backend properly handles team-related actions, securely and efficiently. I focused on scalability and clean structure, enabling seamless integration with the frontend. My work ensured that users could easily form and manage their teams within the platform. I contributed to making team collaboration intuitive and reliable from the technical side."
                </div>
              </div>
            </div>
        </div>
      </div>

      {user.newUser && <Startup />}
    </>
  );
};

export default Home;
