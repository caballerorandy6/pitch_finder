const Footer = () => {
  return (
    <div className="bg-black w-full">
      <div className="flex flex-col lg:flex-row justify-center p-8 gap-4 lg:gap-10 items-center">
        <div className="flex items-center gap-2">
          <h3 className="text-orange-400 font-bold mb-4 text-base mt-4">
            Social Networks
          </h3>
          <div className="flex items-center gap-4 resort transition-transform">
            {" "}
            <a
              href="https://github.com/caballerorandy6"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="./github.png"
                alt="github image"
              />
            </a>
          </div>

          <div className="flex items-center gap-4 resort transition-transform">
            {" "}
            <a
              href="https://linkedin.com/in/caballerorandy"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="./linkedin.png"
                alt="linkedin image"
              />
            </a>
          </div>

          <div className="flex items-center gap-4 resort transition-transform">
            {" "}
            <a
              href="https://twitter.com/caballerorandy6"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="./twitter.png"
                alt="twitter image"
              />
            </a>
          </div>
        </div>
        <div className="flex  items-center gap-4">
          <p className="text-orange-400 font-bold text-base">Developed with</p>
          <img
            className="w-8 h-8 rounded-full"
            src="./vite.webp"
            alt="Vite Image"
          />
        </div>
        <p className="font-bold text-base text-center mb-8 mt-7 text-orange-300 text-opacity-80">
          Pitch Finder{" "}
          <span className="text-white/80">
            {" "}
            {`@${new Date().getFullYear()}`}{" "}
          </span>
          all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
