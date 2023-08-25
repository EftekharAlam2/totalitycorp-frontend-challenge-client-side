const Banner = () => {
  return (
    <div>
      <div className="carousel rounded-box mt-6 md:mt-10 flex justify-center md:gap-5">
        <div className="carousel-item w-1/3 h-1/3 md:w-1/5 md:h-1/5">
          <img src="https://i.ibb.co/mBSGpX5/dress.jpg" alt="Cothing" />
        </div>
        <div className="carousel-item w-1/3 h-1/3 md:w-1/5 md:h-1/5">
          <img src="https://i.ibb.co/nbhpM1H/gadegt.jpg" alt="Tech" />
        </div>
        <div className="carousel-item w-1/3 h-1/3 md:w-1/5 md:h-1/5">
          <img src="https://i.ibb.co/mBSGpX5/dress.jpg" alt="Cothing" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
