import useApp from "../hooks/useApp";

const SelectPitch = () => {
  const { pitchType, handlePitchType, pitchesTypeOptions } = useApp();

  return (
    <select
      label="pitches"
      onChange={handlePitchType}
      value={pitchType}
      className="p-2 rounded focus:outline-none bg-white/80"
      name="pitches"
      id="pitches"
    >
      <option>{pitchType}</option>
      {pitchesTypeOptions.map((pitchesSelected) => (
        <option key={pitchesSelected.value} value={pitchesSelected.value}>
          {pitchesSelected.label}
        </option>
      ))}
    </select>
  );
};

export default SelectPitch;
