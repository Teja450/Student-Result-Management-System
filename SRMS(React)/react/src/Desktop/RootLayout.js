import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";

function RootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default  RootLayout;