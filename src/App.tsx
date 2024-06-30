import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "@/components/Layout/RootLayout.tsx";
import DisplayModeProvider from "@/providers/DisplayModeProvider";
import LayerContainer from "@/components/LayerContainer";
const Home = lazy(() => import("@/pages/Home"));
const VideosDetail = lazy(() => import("@/pages/VideosDetail"));

export const App = () => {
  return (
    <DisplayModeProvider>
      <LayerContainer>
        <RootLayout>
          <Suspense fallback={<p>로딩중..</p>}>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/videos/:id"} element={<VideosDetail />} />
            </Routes>
          </Suspense>
        </RootLayout>
      </LayerContainer>
    </DisplayModeProvider>
  );
};

export default App;
