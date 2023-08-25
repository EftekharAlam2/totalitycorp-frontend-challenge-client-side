const Testimonials = () => {
  return (
    <div className="  text-black">
      <div className="text-center py-10">
        <h3 className="text-xl mb-3">Testimonials</h3>
        <h2 className="text-4xl w-96 mx-auto mb-5 font-semibold ">
          Read What Our Clients Has Say
        </h2>
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8 group">
          <div className="bg-white p-8 rounded-xl duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer ">
            <img
              src="https://i.ibb.co/N6sKnBk/user-2.png"
              alt=""
              className="h-28 mx-auto"
            />
            <h4 className="uppercase text-xl font-bold">Alex Ramirez</h4>
            <p className="text-sm leading-7 my-3 font-normal ">
              I&apos;ve been shopping at Uniqueness for my fitness needs, and
              I&apos;m blown away by the quality of their products. The
              activewear is not only stylish but also incredibly comfortable,
              perfect for my intense workouts. The fitness accessories I&apos;ve
              purchased, like the resistance bands and yoga mat, have become an
              integral part of my routine. Thanks to Uniqueness, staying active
              has never been this enjoyable!
            </p>
            <button className="bg-blue-100 py-2.5 px-8 rounded-full">
              Get In Touch
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer ">
            <img
              src="https://i.ibb.co/VCX85Rj/user-1.png"
              alt=""
              className="h-28 mx-auto"
            />
            <h4 className="uppercase text-xl font-bold">Sarah Thompson</h4>
            <p className="text-sm leading-7 my-3 font-normal ">
              As someone who loves spending time outdoors, I can&apos;t thank
              Uniqueness enough for providing top-notch outdoor gear. My recent
              camping trip was a breeze with the high-quality tent and sleeping
              bag I got from them. The staff&apos;s knowledge and
              recommendations ensured I had the right equipment for the
              adventure. Shopping at Uniqueness feels like having a personal
              guide to the great outdoors!
            </p>
            <button className="bg-blue-100 py-2.5 px-8 rounded-full">
              Get In Touch
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer ">
            <img
              src="https://i.ibb.co/ykmkD3V/user-3.png"
              alt=""
              className="h-28 mx-auto"
            />
            <h4 className="uppercase text-xl font-bold">Emily Carter</h4>
            <p className="text-sm leading-7 my-3 font-normal ">
              Running a sports team demands the best gear, and that&apos;s why
              we choose Uniqueness. The range of sports equipment available is
              impressive, and the team&apos;s responsiveness to our needs is
              unparalleled. Our basketball team&apos;s performance improved
              significantly with the new basketballs and training equipment we
              bought. Uniqueness has become our go-to source for quality sports
              gear that helps us stay ahead in the game.
            </p>
            <button className="bg-blue-100 py-2.5 px-8 rounded-full">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
