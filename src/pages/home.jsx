import useApp from "../hooks/useApp";

const Home = () => {
  const { pitches } = useApp();

  const data = pitches?.queryResults?.row;

  //console.log(data);

  return (
    <section className="bg-gradient-to-r from-orange-500 to-yellow-300">
      <h1 className="text-center pt-10 mb-6 font-black text-5xl text-black/70">
        Pitch Finder
      </h1>
      <div className="flex flex-col items-center">
        {data?.map((pitch) => (
          <article
            key={pitch.sv_pitch_id}
            className="flex justify-between w-6/12 border-2 border-black/70 p-4 my-2"
          >
            <div className="w-8/12 flex flex-col">
              <p>{`SZ_TOP: ${pitch.sz_top}`}</p>
              <p>{`SZ_BOTTOM: ${pitch.sz_bottom}`}</p>
              <p>{`INITIAL_SPEED: ${pitch.initial_speed}`}</p>
            </div>

            <button className="w-4/12  p-2 text-2xl rounded-md text-white/80 font-bold bg-black/70 hover:bg-black/80 transition-colors">
              View Pitch
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Home;
