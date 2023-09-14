import { useEffect, useState } from "react";
import { ModalCreate } from ".";

export const CreateStatus = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

    // Update the current time every second
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);

  const datePart = currentTime.toLocaleDateString();
  const timePart = currentTime.toLocaleTimeString();

  // console.log("datePart", datePart);

  const openModal = () => {
    const modal = document.getElementById("createWorkStatus");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <button className="btn bg-white border-black" onClick={openModal}>
          Create Work Status
        </button>
        {/*// Modal Work Status //*/}
        <ModalCreate />
      </div>
      {/*/// date time ///*/}
      <div>
        <div className="stat">
          <div className="stat-title" style={{ fontSize: "12px" }}>
            Today
          </div>
          <div className="stat-value text-primary" style={{ fontSize: "17px" }}>
            {datePart}
          </div>
          <div className="stat-desc">{timePart}</div>
        </div>
      </div>
    </div>
  );
};
