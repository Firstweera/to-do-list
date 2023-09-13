import { ModalCreate } from ".";

export const CreateStatus = () => {
  const openModal = () => {
    const modal = document.getElementById("createWorkStatus");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  const dateTime = new Date();
  const datePart = dateTime.toLocaleDateString();
  const timePart = dateTime.toLocaleTimeString();

  // console.log("datePart", datePart);

  return (
    <div className="flex justify-between items-center">
      <div>
        <button className="btn" onClick={openModal}>
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
