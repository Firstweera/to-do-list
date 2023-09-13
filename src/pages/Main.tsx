import { CreateStatus, MainStatus } from "../components";

const mockGroup = [
  { id: 1, title: "Stuck", description: "test data in stuck" },
  { id: 2, title: "Not Started", description: "test data in not started" },
  { id: 3, title: "Working on", description: "test data in working on" },
  { id: 4, title: "Done", description: "test data in done" },
];

export const MainPage = () => {
  return (
    <>
      <div className="text-lg ml-5 mt-5">
        <p className="text-blue-500 text-2xl">To-do-list</p>
      </div>
      <div className="mt-5 ml-5 ">
        <CreateStatus />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-5 w-full">
        <MainStatus mockGroup={mockGroup} />
      </div>
    </>
  );
};
