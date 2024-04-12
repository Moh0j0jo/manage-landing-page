const About = () => {
  return (
    <section className="section pl-5 gap-10">
      {/* <div className="csmBackTablet"></div> */}
      <div 
        className="h-1/2 flex flex-col items-center gap-7 px-5 md:w-1/2  md:justify-start">
      <h2 
        className="w-66 text-4xl font-bold text-dark-bue text-center md:w-2/3 md:text-start md:text-5xl">What’s different about Manage?
      </h2>
      <p 
        className="desc4p text-center w-80 md:text-start md:w-2/3 md:px-0">
        Manage provides all the functionality your team needs, without the
        complexity. Our software is tailor-made for modern digital product
        teams.
      </p>
      </div>
      <div 
        className="h-1/2 flex flex-col gap-7 md:w-1/2 md:p-5 md:gap-4">
      <h4 className="desc4p_title">
        <span className="bg-bright-red px-7 py-3 rounded-3xl text-very-light-gray font-bold mr-3 inline-block align-middle"> 01</span> Track company-wide progress
      </h4>
      <p className="desc4p">
        See how your day-to-day tasks fit into the wider vision. Go from
        tracking progress at the milestone level all the way done to the
        smallest of details. Never lose sight of the bigger picture again.
      </p>
      <h4 className="desc4p_title">
        <span className="bg-bright-red px-7 py-3 rounded-3xl text-very-light-gray font-bold mr-3 inline-block align-middle"> 02</span> Advanced built-in reports
      </h4>
      <p className="desc4p">
      Set internal delivery estimates and track progress toward company goals.
      Our customisable dashboard helps you build out the reports you need to
      keep key stakeholders informed.
      </p>

      <h4 className="desc4p_title" >
        <span className="bg-bright-red px-7 py-3 rounded-3xl text-very-light-gray font-boldmr-3 inline-block align-middle">03</span> Everything you need in one place
      </h4>
      <p className="desc4p">
        Stop jumping from one service to another to communicate, store files,
        track tasks and share documents. Manage offers an all-in-one team
        productivity solution.
      </p>
      </div>
    </section>
  );
};

export default About;
