const OurNumbers = () => {
  const Data = {
    activeClients: 4000,
    carModels: 30000,
    countriesServed: 36,
  };

  return (
    <section id="our-numbers">
      <div id="title">
        our <span className="text-orange">numbers</span>
      </div>
      <div id="numbers">
        <div className="number">
            <div className="mark">
                <span className="text-orange">{Data.activeClients}</span>+
            </div>
            <div className="desc">
                Active Clients 
            </div>
        </div>
        <div className="seperate"></div> 
        <div className="number">
            <div className="mark">
                <span className="text-orange">{Data.carModels}</span>+
            </div>
            <div className="desc">Car Models</div>
        </div>
        <div className="seperate"></div>
        <div className="number">
            <div className="mark">
                <span className="text-orange">{Data.countriesServed}</span>+
            </div>
            <div className="desc">Countries Served</div>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
