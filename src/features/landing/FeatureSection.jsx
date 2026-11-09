import FeatureCard from "./components/FeatureCard";

import offlineIcon from "../../assets/icons/offline.png"
import aiIcon from "../../assets/icons/ai-support.png";
import progressIcon from "../../assets/icons/track-progress.png";

const features = [
  {
    id: 1,
    title: "Offline Access",
    description: "Download lessons and study without needing an active internet connection.",
    icon: offlineIcon
  },
  {
    id: 2,
    title: "AI Support",
    description: "Get instant answers and guidance from our 24/7 learning companion bot.",
    icon: aiIcon
  },
  {
    id: 3,
    title: "Track Progress",
    description: "Visualize your growth with detailed analytics and performance metrics.",
    icon: progressIcon
  },
];

function FeaturesSection() {
  return (
    <section className="bg-surface px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <h2 className="mb-7 text-center text-xl font-bold text-heading sm:text-2xl">
          How EduLearn Works
        </h2>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;
