export const ModalDeleteTask = () => {
  return (
    <>
      <dialog id="deleteTask" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete this task?</h3>
          <p className="py-4">Do you really want to delete this task?</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex justify-end space-x-3">
              <button className="btn">Close</button>
              <button className="btn bg-[#cc3300] text-white">Ok</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
