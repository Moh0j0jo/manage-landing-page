import Button from "./Button";
import { ReactSVG } from "react-svg";
import scgGraphs from "../Assets/images/illustration-intro.svg"


const Graphs = () => {
  return (
    <section className="flex flex-wrap items-center justify-between">
      <ReactSVG className="md:order-last"
        src={scgGraphs}
        title="Graphs"
        useRequestCache={false}
        wrapper="span"
      />
      <div className="flex flex-col items-center justify-center gap-4  text-center text-dark-bue">
        <h1 className="w-96 text-4xl font-semibold">
          Bring everyone together to build better products.
        </h1>
        <p className="w-80 text-md font-bold text-gray-600">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button label={"Get Started"} styles='w-44 h-8 bg-bright-red text-white' />
      </div>
    </section>
  );
};

export default Graphs;
