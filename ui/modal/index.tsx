"use client";
import { useRef, useState } from "react";

export default function Modal(props: any) {
  const [open, setOpen] = useState(props.open || false);

  const hideRef = useRef(true);

  const close = () => {
    console.log("closing");

    setOpen(false);
    setTimeout(() => {
      hideRef.current = false;
      if (props?.onClose) {
        props.onClose();
      }
    }, 300);
  };

  if (!hideRef.current) {
    return null;
  }

  return (
    <div
      className="relative"
      style={{
        zIndex: 1000,
      }}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}

      <div
        onClick={close}
        className={
          open
            ? "ease-out z-30 duration-300 opacity-100 fixed inset-0 bg-black bg-opacity-75 transition-opacity"
            : "ease-in z-30 opacity-0 duration-200 fixed inset-0 bg-transparent bg-opacity-75 transition-opacity"
        }
      ></div>

      <div className="fixed inset-0 z-40 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
          <div
            className={
              open
                ? "ease-in duration-200 opacity-100 translate-y-0 sm:scale-100 relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8"
                : "ease-out duration-300 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8"
            }
          >
            <div
              style={{
                width: "50vw",
              }}
              className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-hidden"
            >
              <button
                className="justify-end text-white flex w-full"
                onClick={close}
              >
                Close
              </button>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
