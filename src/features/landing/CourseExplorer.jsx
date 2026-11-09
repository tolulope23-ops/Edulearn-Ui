import CourseCard from "./components/CourseCard";

import mathIcon from "../../assets/icons/math.png"
import englishIcon from "../../assets/icons/english.png";
import ictIcon from "../../assets/icons/ict.png";
import scienceIcon from "../../assets/icons/science.png";

const courses = [
  {
    id: 1,
    name: "Mathematics",
    backgroundClass: "bg-mathematics",
    textClass: "text-blue-900",
    icon: mathIcon
  },
  {
    id: 2,
    name: "Science",
    backgroundClass: "bg-science",
    textClass: "text-green-900",
    icon: scienceIcon
  },
  {
    id: 3,
    name: "English",
    backgroundClass: "bg-english",
    textClass: "text-red-800",
    icon: englishIcon
  },
  {
    id: 4,
    name: "ICT",
    backgroundClass: "bg-ict",
    textClass: "text-amber-900",
    icon: ictIcon
  },
];

function CourseExplorer() {
  return (
    <section id="courses" className="bg-page px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <h2 className="mb-6 text-xl font-bold text-heading sm:text-2xl">
          Course Explorer
        </h2>

        {/* Course cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              name={course.name}
              backgroundClass={course.backgroundClass}
              textClass={course.textClass}
              icon={course.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default CourseExplorer;
