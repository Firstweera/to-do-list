export const ModalCreateTask = () => {
  return (
    <dialog id="createTask" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {/*/// header modal ///*/}
        <h3 className="font-bold text-lg">Create your Task!</h3>
        <div className="divider -mt-1"></div>
        {/*/// input fill ///*/}
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">What is your task!</span>
          </label>
          <input
            type="text"
            placeholder="Please fill here !"
            className="input input-bordered input-md w-full max-w-full"
          />
        </div>
        {/*/// button submit ///*/}
        <div className="text-right">
          <input
            type="submit"
            value="Submit"
            className="btn mt-4 hover:bg-blue-500 hover:text-white"
          />
        </div>
      </div>
    </dialog>
  );
};
