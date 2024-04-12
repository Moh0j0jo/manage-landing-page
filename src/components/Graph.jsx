import Button from "./Button";
import IllustrationSvg from "./IllustrGraphSVG";


const Graphs = () => {
  return (
    <section className="section px-5 bg-transparent  @apply md:flex-row-reverse md:gap-7 md:mt-10 md:px-10">
      {/* <div className="csmBackTablet"></div> */}
      <IllustrationSvg width={"w-5/6"} height={"h-2/5"} backgroundColor={"transparent"}/>
      <div 
        className="flex flex-col items-center justify-center gap-4  text-center text-dark-bue  
          md:w-2/3 md:gap-7 md:items-start">
        <h1 
          className="md:w-96 text-4xl font-semibold  md:text-5xl md:text-left">
          Bring everyone together to build better products.
        </h1>
        <p className="w-80 md:w-96 text-md font-bold text-gray-600 md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button label={"Get Started"} styles='w-44 h-8 bg-bright-red text-white' />
      </div>
    </section>
  );
};

export default Graphs;
