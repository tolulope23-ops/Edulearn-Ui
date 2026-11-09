function TestimonialCard({name, role, message, avatar, rating=5}) {
  return (
    <article className="flex h-full flex-col rounded-card border border-slate-100 bg-white p-5 shadow-sm">

      {/* Student information */}
        <div className="flex items-center gap-3">
            {/* Avatar placeholder */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-light">
            {avatar ? (
                <img
                src={avatar}
                alt={`${name}'s profile`}
                className="h-full w-full object-cover"/>
            ) : (
                <span className="text-sm font-bold text-primary">
                {name.charAt(0)}
                </span>
            )}
            </div>

            <div>
                <h3 className="text-sm font-bold text-heading">
                    {name}
                </h3>

                <p className="mt-0.5 text-xs text-body">
                    {role}
                </p>
            </div>
      </div>

        {/* Testimonial */}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-body">
            "{message}"
        </p>

        {/* Dynamic rating */}
        <div className="mt-4 flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={
                index < rating
                    ? "text-amber-500"
                    : "text-slate-300"
                }
                aria-hidden="true"
            >
                ★
            </span>
            ))}

            <span className="ml-1 text-xs text-body">
            {rating.toFixed(1)}
            </span>
        </div>

    </article>
  );
}

export default TestimonialCard;
