import useApp from "../hooks/useApp";
import PitchPreview from "../components/PitchPreview";

const Home = () => {
  const { pitches } = useApp();

  const data = pitches?.queryResults?.row;

  //console.log(data);

  return (
    <section className="from-gray-900 to-gray-600 bg-gradient-to-r pt-20">
      <h1 className="text-center pt-20 mb-14 font-black text-6xl text-orange-400 up">
        Pitch Finder
      </h1>
      <div className="px-10 pb-10 flex flex-col gap-4">
        {data?.map((pitch) => (
          <PitchPreview key={pitch.sv_pitch_id} pitch={pitch} />
        ))}
      </div>
    </section>
  );
};

export default Home;

// <div
//key={pitch.sv_pitch_id}
//className="w-11/12 border-2 rounded-md border-black/70 shadow-md p-4 my-2 mx-auto bg-black/70"
//>
//{/* {console.log(pitch)} */}
//<article className="w-full flex justify-center gap-10 p-4">
//{/* SZ and Initial Speed */}
//<div className="w-2/12">
// <p className="text-orange-400 mb-2">
// sz_top (feet):{" "}
// <span className="text-white/70 font-bold">{` ${pitch.sz_top}`}</span>
//</p>
//<p className="text-orange-400 mb-2">
// sz_bottom (feet):{" "}
// <span className="text-white/70 font-bold">{`${pitch.sz_bottom}`}</span>
//</p>
// <p className="text-orange-400 mb-2">
//initial_speed (mph):{" "}
// <span className="text-white/70 font-bold">{`${pitch.initial_speed}`}</span>
// </p>
// </div>

{
  /* Init Pos */
}
// <div>
// <p className="text-orange-400 mb-2">
// init_pos_x (feet):{" "}
//  <span className="text-white/70 font-bold">{`${pitch.init_pos_x}`}</span>
// </p>
// <p className="text-orange-400 mb-2">
// init_pos_y (feet):{" "}
// <span className="text-white/70 font-bold">{`${pitch.init_pos_y}`}</span>
// </p>
// <p className="text-orange-400 mb-2">
// init_pos_z (feet):{" "}
// <span className="text-white/70 font-bold">{`${pitch.init_pos_z}`}</span>
// </p>
// </div>

{
  /* Init Vel */
}
// <div>
// <p className="text-orange-400 mb-2">
// init_vel_x (feet/s):{" "}
// <span className="text-white/70 font-bold">{`${pitch.init_pos_x}`}</span>
// </p>
// <p className="text-orange-400 mb-2">
//  init_vel_y (feet/s):{" "}
//   <span className="text-white/70 font-bold">{`${pitch.init_pos_y}`}</span>
// </p>
// <p className="text-orange-400 mb-2">
//   init_vel_z (feet/s):{" "}
//     <span className="text-white/70 font-bold">{`${pitch.init_pos_z}`}</span>
//   </p>
// </div>

// {/* Init Accel */}
// <div>
//   <p className="text-orange-400 mb-2">
//     init_accel_x (feet/s/s):{" "}
//     <span className="text-white/70 font-bold">{`${pitch.init_accel_x}`}</span>
//   </p>
//   <p className="text-orange-400 mb-2">
//     init_accel_y (feet/s/s):{" "}
//     <span className="text-white/70 font-bold">{`${pitch.init_accel_y}`}</span>
//   </p>
//   <p className="text-orange-400 mb-2">
//     init_accel_z (feet/s/s):{" "}
//     <span className="text-white/70 font-bold">{`${pitch.init_accel_z}`}</span>
//   </p>
// </div>

//   {/* Plate Speed */}
//   <div className="w-2/12">
//     <p className="text-orange-400 mb-2">
//       plate_speed (mph):{" "}
//       <span className="text-white/70 font-bold">{`${pitch.plate_speed}`}</span>
//     </p>
//     <p className="text-orange-400 mb-2">
//       plate_x (feet):{" "}
//       <span className="text-white/70 font-bold">{`${pitch.plate_x}`}</span>
//     </p>
//     <p className="text-orange-400 mb-2">
//       plate_y (feet):{" "}
//       <span className="text-white/70 font-bold">{`${pitch.plate_y}`}</span>
//     </p>
//     <p className="text-orange-400 mb-2">
//       plate_z (feet):{" "}
//       <span className="text-white/70 font-bold">{`${pitch.plate_z}`}</span>
//     </p>
//   </div>
// </article>
// <button className="block w-6/12 text-lg p-2 mt-4 mx-auto rounded-md text-black/70 font-bold bg-orange-400 hover:bg-orange-500 transition-colors">
//   View Pitch
// </button>
// <Pitch />
// </div>
