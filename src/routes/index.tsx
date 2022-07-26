import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages/home"));

const ROOT = "/";

export default function MainRouter() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path={ROOT} element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}
