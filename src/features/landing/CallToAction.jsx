import Button from "../../components/ui/button";

function CallToAction() {
  return (
    <section className="bg-surface px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-2xl bg-primary px-6 py-12 text-center sm:px-12 sm:py-16">

                {/* CTA content */}
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                        Ready to Transform Your Learning Experience?
                    </h2>

                    <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-blue-100 sm:text-base">
                        Join thousands of learners who are taking control of
                        their education with EduLearn. Start your learning
                        journey today!
                    </p>

                    {/* CTA button */}
                    <div className="mt-8 flex justify-center">
                        <Button to="/register" variant="light" size="large">
                            Create Free Account
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default CallToAction;
