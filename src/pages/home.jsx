import PitchPreview from "../components/PitchPreview";

import useApp from "../hooks/useApp";

const Home = () => {
  const { pitches, pitchType } = useApp();

  const data = pitches?.queryResults?.row;

  const filteredPitches =
    pitchType === "All Pitches"
      ? data
      : data.filter((item) => item.pitch_type === pitchType);

  return (
    <section className="from-gray-900 to-gray-600 bg-gradient-to-r pt-52">
      {data ? (
        <div className="px-10 pb-10 flex flex-col gap-4">
          {filteredPitches?.map((pitch) => (
            <PitchPreview key={pitch.sv_pitch_id} pitch={pitch} />
          ))}
        </div>
      ) : (
        <div className="px-10 pb-10 flex flex-col gap-4">
          {data?.map((pitch) => (
            <PitchPreview key={pitch.sv_pitch_id} pitch={pitch} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
