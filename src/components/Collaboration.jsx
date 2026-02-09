import { Link } from "react-router-dom";
import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section id="how-we-work" crosses>
      <div className="container lg:flex">
        <div className="max-w-[30rem]">
          <h2 className="h2 mb-4 md:mb-8">
            Put simply, we are nerds.
          </h2>

          <ul className="max-w-[28rem] mb-10 md:mb-14">
            {[
              {
                letter: "N",
                title: "NAVIGATE",
                text: "We start by exploring your business, objectives and what makes it all tick.",
              },
              {
                letter: "e",
                title: "EXPLODE",
                text: "We pull it apart in search of all opportunities. We love good ol' blue sky thinking.",
              },
              {
                letter: "r",
                title: "REFINE",
                text: "After some hustling and huddling, we refine our ideas into elegant solutions.",
              },
              {
                letter: "d",
                title: "DEFINE",
                text: "Lastly we craft user-centric products for you to take on the world. And win.",
              },
            ].map((item, index) => (
              <li className="mb-6 md:mb-10" key={index}>
                <div className="flex items-center mb-2">
                  <div className="w-[3rem] h-[3rem] flex items-center justify-center bg-n-7 rounded-xl border border-n-6 mr-5">
                    <span className="font-playfair text-[2rem] text-color-1 leading-none pt-1">
                      {item.letter}
                    </span>
                  </div>
                  <h6 className="h6 uppercase tracking-wider text-n-1">
                    {item.title}
                  </h6>
                </div>
                <p className="body-2 text-n-4 ml-[4.25rem]">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>

          <p className="body-2 text-n-3 italic">
            Somewhat curious? Here’s a bit more about{" "}
            <Link to="/how-we-work-detail" className="text-n-1 underline font-semibold">
              the uncommon way we work
            </Link>{" "}
            and{" "}
            <a href="#what-we-do" className="text-n-1 underline font-semibold">
              what we do.
            </a>
          </p>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            We don't just build apps; we engineer solutions that solve real-world problems. Our process is designed to be as unconventional as our team.
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="nerdx"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45
                    }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45
                      }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
