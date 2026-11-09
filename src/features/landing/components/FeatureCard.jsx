function FeatureCard({ title, description, icon }) {
  return (
    <article className="flex items-start gap-3 rounded-card border border-slate-100 bg-surface-muted p-4 sm:gap-4 sm:p-5">
      {/* Icon container */}
        <div className="mb-4 flex h-8 w-12 items-center justify-center rounded-lg bg-primary/10">
            <img
                src={icon}
                alt=""
                className="h-4 w-4 object-contain"
            />
        </div>

      {/* Feature information */}
      <div>
        <h3 className="text-sm font-bold text-heading sm:text-base">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-relaxed text-body sm:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
}

export default FeatureCard;
