export const TaskCard = (props: {
  title: any;
  description: any;
  priority: any;
  dueDate: any;
}) => {
  return (
    <>
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <div className="card-title justify-between content-center">
            <h2>{props?.title}</h2>
            <div className="card-actions">
              <button
                className="btn btn-square btn-sm"
                // onClick={openModal}
              >
                x
              </button>
            </div>
          </div>
          <div className="divider -mt-2"></div>
          <p>{props?.description}</p>
          <div className="flex justify-end space-x-2">
            <div className="card-actions">
              <div className="badge badge-outline">{props?.dueDate}</div>
            </div>
            <div className="card-actions">
              <div className="badge badge-outline">{props?.priority}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
