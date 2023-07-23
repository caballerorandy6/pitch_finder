import useApp from "../hooks/useApp";

const Pitch = () => {
  const { pitches } = useApp();

  const data = pitches?.queryResults?.row;

  //console.log(data);

  return <></>;
};

export default Pitch;
