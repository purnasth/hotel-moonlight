// import { Link } from 'react-router-dom';

// const Services = () => {
//   return (
//     <main>
//       <div className="container mx-auto w-4/5">
//         <h2 className="text-gradient max-w-4xl text-2xl font-medium md:text-4xl lg:text-6xl lg:leading-snug">
//           The Hotel Moonlight offers a variety of services to make your stay
//           more enjoyable.
//         </h2>
//         <div className="mt-16 grid origin-center grid-cols-2 content-center gap-16 gap-y-8">
//           <Link to="/stay" className="relative content-end">
//             <img
//               src="https://dorjes.com/wp-content/themes/yootheme/cache/7c/dorje-suite-home-new-7c10a2c8.webp"
//               alt=""
//               className="aspect-video h-[65vh] w-full object-cover"
//             />
//             <h3 className="text-gradient mt-2 text-2xl capitalize">
//               Accommodation
//             </h3>
//           </Link>
//           <Link to="/dine" className="-translate-y-24 content-end">
//             <img
//               src="https://dorjes.com/wp-content/themes/yootheme/cache/3e/home-delux-room-new1-3e6e23ad.webp"
//               alt=""
//               className="h-[65vh] w-[28rem] object-cover"
//             />
//             <h3 className="text-gradient mt-2 text-2xl capitalize">
//               Fine Dine
//             </h3>
//           </Link>
//           <Link to="/occasions" className="ml-auto">
//             <img
//               src="https://dorjes.com/wp-content/themes/yootheme/cache/7c/dorje-suite-home-new-7c10a2c8.webp"
//               alt=""
//               className="h-[65vh] w-[28rem] object-cover"
//             />
//             <h3 className="text-gradient mt-2 text-2xl capitalize">Occasion</h3>
//           </Link>
//           <Link to="/spa" className="-translate-y-24 content-end">
//             <img
//               src="https://dorjes.com/wp-content/themes/yootheme/cache/3e/home-delux-room-new1-3e6e23ad.webp"
//               alt=""
//               className="h-[65vh] w-full object-cover"
//             />
//             <h3 className="text-gradient mt-2 text-2xl capitalize">SPA</h3>
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Services;

// import { Link } from 'react-router-dom';
// import { servicesContents } from '../../constants/data';

// const Services = () => {
//   return (
//     <main>
//       <div className="container mx-auto w-4/5">
//         <h2 className="text-gradient max-w-4xl text-2xl font-medium md:text-4xl lg:text-6xl lg:leading-snug">
//           {servicesContents[0].title}
//         </h2>
//         <div className="mt-16 grid origin-center grid-cols-2 content-center gap-16 gap-y-8">
//           {servicesContents[0].accomodation.map((service, index) => {
//             const imgClass =
//               index === 1 || index === 2
//                 ? 'h-[65vh] w-[28rem] object-cover'
//                 : 'h-[65vh] w-full object-cover';

//             const containerClass =
//               index === 1
//                 ? '-translate-y-24 content-end'
//                 : index === 2
//                   ? 'ml-auto'
//                   : index === 3
//                     ? '-translate-y-24 content-end'
//                     : 'relative content-end';

//             return (
//               <Link
//                 to={service.router}
//                 key={service.id}
//                 className={containerClass}
//               >
//                 <img
//                   src={service.imageUrl}
//                   alt={service.title}
//                   className={imgClass}
//                 />
//                 <h3 className="text-gradient mt-2 text-2xl capitalize">
//                   {service.title}
//                 </h3>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Services;

import { Link } from 'react-router-dom';
import { servicesContents } from '../../constants/data';
import { HiArrowLongRight } from 'react-icons/hi2';

const Services = () => {
  const imgClasses = [
    'h-[65vh] w-full object-cover',
    'h-[65vh] w-[28rem] object-cover',
    'h-[65vh] w-[28rem] object-cover',
    'h-[65vh] w-full object-cover',
  ];

  const containerClasses = [
    'relative content-end',
    '-translate-y-24 content-end mr-auto',
    'ml-auto',
    '-translate-y-24 content-end',
  ];

  return (
    <main>
      <div className="container mx-auto w-4/5">
        <h2 className="text-gradient max-w-4xl text-2xl font-medium md:text-4xl lg:text-6xl lg:leading-snug">
          {servicesContents[0].title}
        </h2>
        <div className="ul mt-16 grid origin-center grid-cols-2 content-center gap-16 gap-y-8">
          {servicesContents[0].accomodation.map((service, index) => {
            const imgClass = imgClasses[index % imgClasses.length];
            const containerClass =
              containerClasses[index % containerClasses.length];

            return (
              <Link
                to={service.router}
                key={service.id}
                className={`li group ${containerClass}`}
              >
                <div className="group overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className={`${imgClass} transition-300 overflow-hidden group-hover:scale-125 group-hover:contrast-125`}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-gradient mt-2 text-2xl capitalize">
                    {service.title}
                  </h3>
                  <Link
                    type="button"
                    to={service.router}
                    className={`group-hover:bg-gradient group h-6 w-16 items-center justify-center rounded-full bg-light text-2xl text-dark opacity-0 outline outline-1 outline-black/20 transition-all duration-300 ease-linear group-hover:flex group-hover:text-light group-hover:opacity-100`}
                    title="Explore More"
                    aria-label="Explore More"
                  >
                    <HiArrowLongRight
                      className={`hidden transition-all duration-300 ease-linear group-hover:block`}
                    />
                    {/* <span className="text-xs group-hover:hidden">
                      {(index + 1).toString().padStart(2, '0')}
                    </span> */}
                  </Link>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Services;
