import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { roundNumber } from "../helpers/index.js";

const PitchDetailsModal = ({ modal, setModal, pitch }) => {
  console.log(pitch);

  const {
    pitch_name,
    pitch_type,
    pitcher_name,
    inning,
    batter_name,
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
    <Transition.Root show={modal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => setModal(false)}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setModal(false)}
                >
                  <span className="sr-only">Cerrar</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-bold text-gray-900"
                  >
                    <h1 className="text-2xl mb-2 font-semibold">
                      {pitch_name}
                    </h1>
                    <div className="rounded border-2 shadow p-4 font-normal flex justify-between mb-6 text-orange-400">
                      <h3>{`Inning ${inning}`}</h3>
                      <p>{pitch_type}</p>
                      <p>{`(${batter_name} vs ${pitcher_name})`}</p>
                    </div>
                    <h3 className="font-normal mb-2">Details</h3>
                    <div className="rounded border-2 shadow p-4 font-normal mb-4">
                      <p className="text-orange-400 mb-1 text-sm">
                        sz_top:{" "}
                        <span className="text-black/70">{`${sz_top} (feet)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        sz_bottom:{" "}
                        <span className="text-black/70 mb-1">{`${sz_bottom} (feet)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        initial_speed:{" "}
                        <span className="text-black/70 mb-1">{`${roundNumber(
                          initial_speed
                        )} (mph)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        init_pos_x:{" "}
                        <span className="text-black/70 mb-1">{`${init_pos_x} (feet)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        init_pos_y:{" "}
                        <span className="text-black/70 mb-1">{`${init_pos_y} (feet)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        init_pos_z:{" "}
                        <span className="text-black/70 mb-1">{`${init_pos_z} (feet)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        init_vel_x:{" "}
                        <span className="text-black/70 mb-1">{`${init_vel_x} (feet/s)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        init_vel_y:{" "}
                        <span className="text-black/70 mb-1">{`${init_vel_y} (feet/s)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        init_vel_z:{" "}
                        <span className="text-black/70 mb-1">{`${init_vel_z} (feet/s)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        init_accel_x:{" "}
                        <span className="text-black/70 mb-1">{`${init_accel_x} (feet/s/s)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        init_accel_y:{" "}
                        <span className="text-black/70 mb-1">{`${init_accel_y} (feet/s/s)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        init_accel_z:{" "}
                        <span className="text-black/70 mb-1">{`${init_accel_z} (feet/s/s)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        plate_speed:{" "}
                        <span className="text-black/70 mb-1">{`${plate_speed} (mph)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        plate_x:{" "}
                        <span className="text-black/70 mb-1">{`${plate_x} (feet)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        plate_y:{" "}
                        <span className="text-black/70 mb-1">{`${plate_y} (feet)`}</span>
                      </p>
                      <p className="text-orange-400  text-sm">
                        plate_z:{" "}
                        <span className="text-black/70 mb-1">{`${plate_z} (feet)`}</span>
                      </p>
                    </div>
                  </Dialog.Title>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PitchDetailsModal;
