import { useState } from "react";
import { roundNumber } from "../helpers/index.js";
import PitchDetailsModal from "../components/PitchDetailsModal";

const PitchPreview = ({ pitch }) => {
  const [modal, setModal] = useState(false);

  const {
    pitch_type,
    pitcher_name,
    inning,
    balls,
    strikes,
    batter_name,
    event_result,
    initial_speed,
  } = pitch;

  //console.log(pitch);

  return (
    <div className="flex justify-between items-center from-gray-900 rounded-md shadow-md to-gray-600 bg-gradient-to-r border border-gray-500 p-4">
      <div className="flex items-center gap-4">
        <h3 className="text-white/80 text-2xl">{`Inning ${inning}`}</h3>
        <p className="text-xl text-orange-400">{`(${balls}-${strikes})`}</p>
        <p className="text-2xl text-white/80">{pitch_type}</p>
        <p className="text-xl text-orange-400">{`${roundNumber(
          initial_speed
        )} mph`}</p>
        <p className="text-2xl text-white/80">{`(${batter_name} vs ${pitcher_name})`}</p>
        <p className="text-xl text-orange-400">{event_result}</p>
      </div>

      <button
        onClick={() => setModal(true)}
        className="flex text-white/80 font-semibold border border-orange-600 bg-orange-400 p-2 rounded-md transition-transform duration-300 hover:scale-110"
      >
        View more details ...
      </button>
      <PitchDetailsModal modal={modal} setModal={setModal} pitch={pitch} />
    </div>
  );
};

export default PitchPreview;
