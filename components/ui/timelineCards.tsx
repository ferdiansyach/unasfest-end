// import {
//     Card,
//     CardTitle,
//     CardDescription,
//     CardContent,
//     CardFooter,
//   } from "@/components/ui/card";
  
//  import Timeliner, {timelinesDatasProps} from "@/components/ui/timeliner";
//   import React from "react";

//   interface Props extends timelinesDatasProps {
//     title: string;
//     description: string;
//     children?: React.ReactNode;
//   }
  
//   function PosterCard({ title, description, timelines, children }: Props) {
//     return (
//       <section className="relative mt-20 w-full max-w-screen-xl m-auto lg:w-[90%] mb-12">
//         <Card className="pb-2 text-center overflow-hidden">
//           <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
//             {title}
//           </CardTitle>
//           <CardDescription className="text-sm tracking-wide font-normal leading-normal mb-16 lg:text-xl">
//             {description}
//           </CardDescription>
//           <CardContent className="w-full h-full">
//             <div className="">
//               <Timeliner timelines={timelines}/>
//             </div>
//           </CardContent>
//           <CardFooter className="hidden lg:h-2 lg:p-0 lg:w-3/5 lg:m-auto"></CardFooter>
//         </Card>
//         {children}
//       </section>
//     );
//   }
  
//   export default PosterCard;
  