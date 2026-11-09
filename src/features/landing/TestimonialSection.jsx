import TestimonialCard from "./components/TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Junior High School Student",
    rating: 4,
    message:"EduLearn has made studying so much easier for me. I can download my lessons and continue learning even when I don't have internet access.",
  },
  {
    id: 2,
    name: "David Williams",
    role: "Senior High School Student",
    rating: 5,
    message: "The AI learning assistant is amazing. Whenever I don't understand a topic, I ask questions and get helpful explanations.",
  },
  {
    id: 3,
    name: "Grace Thompson",
    role: "Senior High School Student",
    rating: 4.5,
    message: "I love being able to track my learning progress. It motivates me to study consistently and improve my performance.",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-surface-muted px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto mb-9 max-w-xl text-center">
          <h2 className="text-2xl font-bold text-heading sm:text-3xl">
            What Our Students Say
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">
            Discover how EduLearn is helping students learn better,
            stay motivated and achieve their academic goals.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              message={testimonial.message}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
