import { Outlet } from "react-router";
import Header from "./Header/Header";
import NawBar from "./NavBar/NawBar";
// import Navbar from "./Navbar";
function Layout() {
  return (
    <div>
      <Header />

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
      <footer className="footer">
        <NawBar />
      </footer>
    </div>
  );
}
export default Layout;
