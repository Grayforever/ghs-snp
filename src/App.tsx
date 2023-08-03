import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import routes from "./pages/routes";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import { Suspense } from "react";
import Lottie from "lottie-react";
import Loader from "./assets/json/loader.json";
import { SharedStateProvider } from "./context/sharedSlateContext";

function AppLayout() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Lottie animationData={Loader} />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

function App() {
  return (
    <SharedStateProvider>
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
    </SharedStateProvider>
  );
}

export default App;
