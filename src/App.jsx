import { ClearTask } from "./components/ClearTask";
import { Filters } from "./components/Filters";
import { Navbar } from "./components/Navbar";
import { Sort } from "./components/Sort";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="d-flex justify-content-center">
          <div className="col col-md-10 col-l g-8 col-xl-7">
            <div className="d-flex justify-content-between mb-3 sort-clear">
              <Sort />
              <ClearTask />
            </div>
            <TaskList />
            <Filters />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
