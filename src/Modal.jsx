import React, { useState, useRef, useEffect } from "react";
import { VeganismContent } from "./veganismContent";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerButtonRef = useRef(null);
  const headingRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    triggerButtonRef.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      headingRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <button ref={triggerButtonRef} onClick={handleOpen}>
        Open Modal
      </button>
      {isOpen && (
        <>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-heading"
            onKeyDown={handleKeyDown}
          >
            <h2 id="modal-heading" tabIndex={-1} ref={headingRef}>
              Modal Heading
            </h2>
            <VeganismContent />
            <button onClick={handleClose}>Close</button>
          </div>
          <div onClick={handleClose} />
        </>
      )}
    </>
  );
}

export default Modal;
