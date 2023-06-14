const Subs = () => {
  return (
    <section id="subs">
      <div id="left">
        <div id="title">
          <span className="text-orange">be the first</span> to see the news
        </div>
        <div id="desc">
          Your company may not be in the software business, but eventually, a
          software company will be in your business.
        </div>
        <div id="interaction">
          <form onSubmit={(e: any) => {
            e.preventDefault();
          }}>
            <input autoComplete="off" type="text" id="email" placeholder="Email Here..." />
            <button id="button">Submit now</button>
          </form>
        </div>
      </div>
      <div id="right">
        <img src="/cars/lambo.png" />
      </div>
    </section>
  );
};

export default Subs;
