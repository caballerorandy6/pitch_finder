import useApp from "../hooks/useApp";

const Pitch = ({ pitch }) => {
  const {
    sz_top,
    sz_bottom,
    initial_speed,
    init_pos_x,
    init_pos_y,
    init_pos_z,
    init_vel_x,
    init_vel_y,
    init_vel_z,
    init_accel_x,
    init_accel_y,
    init_accel_z,
    plate_speed,
    plate_x,
    plate_y,
    plate_z,
  } = pitch;

  return (
    <article className="w-full flex justify-center gap-10 p-4">
      {/* SZ and Initial Speed */}
      <div className="w-2/12">
        <p className="text-orange-400 mb-2">
          sz_top (feet):{" "}
          <span className="text-white/70 font-bold">{sz_top}</span>
        </p>
        <p className="text-orange-400 mb-2">
          sz_bottom (feet):{" "}
          <span className="text-white/70 font-bold">{sz_bottom}</span>
        </p>
        <p className="text-orange-400 mb-2">
          initial_speed (mph):{" "}
          <span className="text-white/70 font-bold">{initial_speed}</span>
        </p>
      </div>

      {/* Init Pos */}
      <div>
        <p className="text-orange-400 mb-2">
          init_pos_x (feet):{" "}
          <span className="text-white/70 font-bold">{init_pos_x}</span>
        </p>
        <p className="text-orange-400 mb-2">
          init_pos_y (feet):{" "}
          <span className="text-white/70 font-bold">{init_pos_y}</span>
        </p>
        <p className="text-orange-400 mb-2">
          init_pos_z (feet):{" "}
          <span className="text-white/70 font-bold">{init_pos_z}</span>
        </p>
      </div>

      {/* Init Vel */}
      <div>
        <p className="text-orange-400 mb-2">
          init_vel_x (feet/s):{" "}
          <span className="text-white/70 font-bold">{init_vel_x}</span>
        </p>
        <p className="text-orange-400 mb-2">
          init_vel_y (feet/s):{" "}
          <span className="text-white/70 font-bold">{init_vel_y}</span>
        </p>
        <p className="text-orange-400 mb-2">
          init_vel_z (feet/s):{" "}
          <span className="text-white/70 font-bold">{init_vel_z}</span>
        </p>
      </div>

      {/* Init Accel */}
      <div>
        <p className="text-orange-400 mb-2">
          init_accel_x (feet/s/s):{" "}
          <span className="text-white/70 font-bold">{init_accel_x}</span>
        </p>
        <p className="text-orange-400 mb-2">
          init_accel_y (feet/s/s):{" "}
          <span className="text-white/70 font-bold">{init_accel_y}</span>
        </p>
        <p className="text-orange-400 mb-2">
          init_accel_z (feet/s/s):{" "}
          <span className="text-white/70 font-bold">{init_accel_z}</span>
        </p>
      </div>

      {/* Plate Speed */}
      <div className="w-2/12">
        <p className="text-orange-400 mb-2">
          plate_speed (mph):{" "}
          <span className="text-white/70 font-bold">{plate_speed}</span>
        </p>
        <p className="text-orange-400 mb-2">
          plate_x (feet):{" "}
          <span className="text-white/70 font-bold">{plate_x}</span>
        </p>
        <p className="text-orange-400 mb-2">
          plate_y (feet):{" "}
          <span className="text-white/70 font-bold">{plate_y}</span>
        </p>
        <p className="text-orange-400 mb-2">
          plate_z (feet):{" "}
          <span className="text-white/70 font-bold">{plate_z}</span>
        </p>
      </div>
    </article>
  );
};

export default Pitch;
