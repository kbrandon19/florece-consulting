// this is for the rest of the page to reveal the content on scroll
// 'use server'
// import React, {useState,useEffect, useRef} from 'react';
// import {motion, useInView, useAnimation,useIsPresent} from 'framer-motion';

// interface Props{
//     children:JSX.Element;

// }

// export const Reveal = ({children}: Props) => {

//     const ref= useRef(null);
//     const isInView = useInView(ref,{once:true});
//     const mainControls = useAnimation();

//     useEffect(() => {
//        if(isInView){
//         mainControls.start("visible");
//        }
//     },[isInView, mainControls])


//     //Background color change

//     const [header,setHeader] = useState(false)

//      const backgroundChange = () =>{

//         if(window.scrollY >= 97){
//             setHeader(true)
//         }else{
//             setHeader(false)
//         }
//     console.log(window.scrollY)
//      }

//      window.addEventListener('scroll', backgroundChange)
//     return(
//         <div ref={ref} className=''>
//             <motion.div
//             variants={{
//                 hidden:{opacity:0, y:100},
//                 visible:{opacity:1, y:0},
//             }}

//             initial="hidden"
//             animate={mainControls}
//             transition={{ duration: 1, delay: 0.25}}
//             >
//                 {children}
//             </motion.div>
//         </div>
//     );
// };