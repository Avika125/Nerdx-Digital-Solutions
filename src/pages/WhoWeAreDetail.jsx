import { Link } from "react-router-dom";
import Section from "../components/Section";
import Button from "../components/Button";

const WhoWeAreDetail = () => {
    return (
        <Section id="who-we-are-detail" crosses>
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <h1 className="h1 font-playfair mb-8 text-center sm:text-left">
                        We are problem solvers…
                    </h1>
                    <p className="body-1 italic text-n-3 mb-12 text-center sm:text-left">
                        Who live for that feeling you get when a problem is solved.
                    </p>
                    <div className="mb-20">
                        <h3 className="h3 mb-6 font-playfair">
                            Our partners choose to work with us because we aren’t…
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Only looking towards digital, and ignoring the reality of outside the screen.",
                                "Scared by ugly solutions (because not everything needs to be pretty to solve big problems).",
                                "Waiting for other people to solve the challenges we all face.",
                                "Only chasing trends (we are also a part of creating them).",
                            ].map((reason, index) => (
                                <li key={index} className="flex items-start body-2 text-n-2">
                                    <span className="mr-4 text-color-1">•</span>
                                    {reason}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-15 mb-20">
                        <div className="space-y-8">
                            <div>
                                <h4 className="h4 font-playfair mb-4">Where we came from</h4>
                                <p className="body-2 text-n-4">
                                    With many years combined in big agencies at the forefront of the ‘digital revolution’, it became clear to us that our jobs were about commercial efficiency, not problem solving effectiveness. Fitting jobs to limited resources, not fitting the right resources to the job which resulted in overpriced and ineffective ‘solutions’. The feeling of effectively solving a problem, was set aside for suffocating process, pursuing awards and margin maximisation. So we abandoned ship and created a new way of doing things.
                                </p>
                            </div>
                            <div>
                                <h4 className="h4 font-playfair mb-4">Where we are now</h4>
                                <p className="body-2 text-n-4">
                                    While others continue to paint zebra stripes on their horses, we continue to connect ourselves with the strategic, design and engineering misfits capable of taking ideas on a piece of scrap paper to an efficiently implementable solution that actually addresses real business problems through our offering. And in doing so, we continue to be lucky enough to work with some incredible people on some incredible projects.
                                </p>
                            </div>
                        </div>
                        <div className="bg-n-7 p-10 rounded-3xl border border-n-6 flex flex-col justify-center">
                            <h4 className="h4 font-playfair mb-4 text-color-1">What’s happened since</h4>
                            <p className="body-2 text-n-4 italic">
                                Eight years since we set out to challenge the offering available, ‘digital’ has become much like teenage sex: everyone talks about it, not many know how to do it, everyone thinks everyone else is doing it, so everyone claims they’re doing it. And despite the growth in options, the industry is still characterised by a low level of technical competence and solution based craftmanship.
                            </p>
                        </div>
                    </div>

                    <div className="text-center py-20 border-t border-n-6">
                        <h2 className="h2 font-playfair mb-8">
                            Let’s make some magic. Together.
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link to="/contact">
                                <Button white>
                                    Get a quote
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button>Back to Home</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WhoWeAreDetail;
