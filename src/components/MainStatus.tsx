import { ModalCreateTask, TaskCard } from ".";

// Define the structure of mockStatusHeader
type TGroup = {
  id: number;
  title: string;
  description: string;
};

const mockTask = [
  {
    id: 1,
    title: "Task 1",
    description: "test description 1",
    dueDate: "9/15/2023",
    completed: false,
    priority: "Critical",
    groupId: 3,
  },
  {
    id: 2,
    title: "Task 2",
    description: "test description 2",
    dueDate: "9/17/2023",
    completed: false,
    priority: "Medium",
    groupId: 2,
  },
  {
    id: 3,
    title: "Task 3",
    description: "test description 3",
    dueDate: "9/21/2023",
    completed: false,
    priority: "Medium",
    groupId: 2,
  },

  {
    id: 4,
    title: "Task 4",
    description: "test description 4",
    dueDate: "9/13/2023",
    completed: false,
    priority: "Critical",
    groupId: 2,
  },
  {
    id: 5,
    title: "Task 5",
    description: "test description 5",
    dueDate: "9/20/2023",
    completed: true,
    priority: "High",
    groupId: 1,
  },
  {
    id: 6,
    title: "Task 6",
    description: "test description 6",
    dueDate: "10/2/2023",
    completed: true,
    priority: "Low",
    groupId: 1,
  },
  {
    id: 7,
    title: "Task 7",
    description: "test description 7",
    dueDate: "9/16/2023",
    completed: false,
    priority: "High",
    groupId: 4,
  },
  {
    id: 8,
    title: "Task 8",
    description: "test description 8",
    dueDate: "9/19/2023",
    completed: false,
    priority: "Critical",
    groupId: 2,
  },
  {
    id: 9,
    title: "Task 9",
    description: "test description 9",
    dueDate: "10/1/2023",
    completed: true,
    priority: "Low",
    groupId: 1,
  },
  {
    id: 10,
    title: "Task 10",
    description: "test description 10",
    dueDate: "9/30/2023",
    completed: false,
    priority: "High",
    groupId: 4,
  },
];

export const MainStatus = (props: { mockGroup: TGroup[] }) => {
  const { mockGroup } = props; // Correct destructuring
  const openModal = () => {
    const modal = document.getElementById("createTask");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  console.log("mockGroup", mockGroup); // Correct variable name

  return (
    <>
      {mockGroup?.map((item: TGroup, idx: number) => (
        <div className="w-full" key={idx}>
          <div className="card bg-base-100 shadow-xl overflow-y-auto h-screen hover:bg-slate-100">
            <div className="card-body">
              <div className="card-title justify-between content-center">
                <h3>
                  {item.title} /{" "}
                  {mockTask?.filter((i: any) => i.groupId === item.id).length}
                </h3>
                <div className="card-actions">
                  <button
                    className="btn btn-square btn-sm text-xl"
                    onClick={openModal}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="divider -mt-2"></div>

              {/*task*/}
              {mockTask
                ?.filter((r: any) => r.groupId === item.id)
                .map((t: any, idx: number) => (
                  <div className="" key={idx}>
                    <TaskCard
                      title={t.title}
                      description={t.description}
                      priority={t.priority}
                      dueDate={t.dueDate}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}

      <div>
        {/*// Modal task //*/}
        <ModalCreateTask />
      </div>
    </>
  );
};
