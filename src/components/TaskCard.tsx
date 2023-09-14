import { ModalDeleteTask } from ".";


export const TaskCard = (props: {
  title: any;
  description: any;
  priority: any;
  dueDate: any;
}) => {
  const openModal = () => {
    const modal = document.getElementById("deleteTask");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  const statusTask = [
    { key: "Critical", value: "border-[#cc3300] text-[#cc3300]" },
    { key: "High", value: "border-[#ff9966] text-[#ff9966]" },
    { key: "Medium", value: "border-[#ffcc00] text-[#ffcc00]" },
    { key: "Low", value: "border-[#99cc33] text-[#99cc33]" },
  ];

  return (
    <>
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <div className="card-title justify-between content-center text-sm">
            <p>{props?.title}</p>
            <div className="card-actions">
              <button className="btn btn-square btn-sm" onClick={openModal}>
                x
              </button>
            </div>
          </div>
          <div className="divider -mt-2"></div>
          <p className="text-xs">{props?.description}</p>
          <div className="flex justify-end space-x-3 mt-4">
            <div className="card-actions">
              <div className="badge badge-outline border-gray-400 text-gray-400">{props?.dueDate}</div>
            </div>
            <div
              className={`card-actions ${
                statusTask?.find((item) => item.key === props?.priority)?.value
              }`}
            >
              <div className="badge badge-outline">{props?.priority}</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ModalDeleteTask />
      </div>
    </>
  );
};
