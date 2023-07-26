import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import routes from "./pages/routes";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={"/"} element={<AppLayout />}>
          {routes.map((route) => (
            <Route
              key={route.name}
              element={<route.element />}
              path={route.path}
              index={route.index}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
