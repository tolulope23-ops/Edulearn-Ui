// import Button from "../../components/ui/button";
// import heroLogo from "../../assets/images/hero-logo.png";

// function HeroSection() {
//   return (
//     <section className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 sm:pt-12 lg:px-8 lg:py-20">
//       <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

//         {/* Hero illustration placeholder */}
//         <div className="mb-7 aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-primary/30 bg-white sm:mb-10">
//             <img
//                 src={heroLogo}
//                 alt="hero logo"
//                 className="block h-full w-full object-cover"
//             />
//         </div>

//         {/* Main heading */}
//         <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
//           Learn Anywhere.
//           <span className="block text-primary">
//             Even Offline.
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="mt-5 max-w-md text-sm leading-relaxed text-body sm:text-base">
//           Master new skills with AI-powered support and seamless offline accessibility designed for your pace.
//         </p>

//         {/* Actions */}
//         <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
//           <Button size="large" fullWidth> Get Started </Button>

//           <Button variant="outline" size="large" fullWidth> Browse Subjects </Button>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default HeroSection;


// import Button from "../../components/ui/button";
// import heroLogo from "../../assets/images/hero-logo.png";

// function HeroSection() {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

//       <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">

//         {/* Hero illustration - Left */}
//         <div className="w-full max-w-md shrink-0 md:w-1/2">
//           <img
//             src={heroLogo}
//             alt="Students learning with EduLearn"
//             className="h-auto w-full object-contain"
//           />
//         </div>

//         {/* Hero content - Right */}
//         <div className="w-full text-center md:w-1/2 md:text-left">

//           {/* Main heading */}
//           <h1 className="text-3xl font-bold leading-tight tracking-tight text-heading sm:text-4xl lg:text-5xl">
//             Learn Anywhere.
//             <span className="block text-primary">
//               Even Offline.
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-body sm:text-base md:mx-0">
//             Master new skills with AI-powered support and seamless
//             offline accessibility designed for your pace.
//           </p>

//           {/* Actions */}
//           <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row md:mx-0">

//             <Button size="large" fullWidth>
//               Get Started
//             </Button>

//             <Button variant="outline" size="large" fullWidth>
//               Browse Subjects
//             </Button>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default HeroSection;




import Button from "../../components/ui/button";
import heroLogo from "../../assets/images/hero-logo.png";

function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

      {/* Centre the hero content */}
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 md:flex-row md:gap-12 lg:gap-16">

        {/* Hero illustration - Left */}
        <div className="w-full max-w-md shrink-0 md:w-1/2">
          <img
            src={heroLogo}
            alt="Students learning with EduLearn"
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Hero content - Right */}
        <div className="w-full max-w-lg text-center md:w-1/2">

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-heading sm:text-4xl lg:text-5xl">
            Learn Anywhere.
            <span className="block text-primary">
              Even Offline.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-body sm:text-base">
            Master new skills with AI-powered support and seamless
            offline accessibility designed for your pace.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <Button to="/register" size="large" fullWidth>
              Get Started
            </Button>

            <Button variant="outline" size="large" fullWidth>
              Browse Subjects
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;
