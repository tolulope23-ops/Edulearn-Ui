function CourseCard({ name, backgroundClass, textClass, icon }) {
  return (
    <article
      className={`flex min-h-28 flex-col items-center justify-center gap-2 rounded-card p-4 transition-transform duration-200 hover:-translate-y-1 sm:min-h-36 ${backgroundClass}`}
    >
      {/* Icon container */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90">
            <img
                src={icon}
                alt="course-icon"
                className="h-4 w-4 object-contain"
            />
        </div>

      {/* Subject name */}
      <h3 className={`text-sm font-bold ${textClass}`}>
        {name}
      </h3>
    </article>
  );
}

export default CourseCard;
