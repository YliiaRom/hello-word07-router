import { Outlet } from "react-router";

function Dashboard() {
  return (
    <>
      <div className="sectionWrap">
        <h2> Dashboard</h2>
        <hr />
        <Outlet />
      </div>
    </>
  );
}
export default Dashboard;
