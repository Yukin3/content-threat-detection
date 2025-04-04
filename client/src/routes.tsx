import { Routes, Route } from "react-router-dom";
import Home from "./scenes/home";
import ComingSoon from "./scenes/pages/coming-soon";
import Upload from "./scenes/detect";
import UploadPage from "./scenes/detect/upload-content";
import Footer from "./components/footer";
import Navbar from "./components/navbar";



function AppRoutes() {


  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analyze" element={<Upload />}>
                <Route index element={<UploadPage />} />
                <Route path="upload" element={<Upload />} />
            </Route>              
            {/* <Route path="/login" element={<Auth/>} />
            <Route path="/signup" element={<Auth />} /> */}
            <Route path="*" element={<ComingSoon />} />  {/* catch all */}
        </Routes>
        <Footer />
    </>
  );
}

export default AppRoutes;
