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
