import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Select from "./pages/select/Select";

//Student
import SLogin from "./pages/student/SLogin/SLogin";
import SSignup from "./pages/student/SSIgnup/SSignup";
import SGrade from "./pages/student/SGrade/SGrade";
import SNotice from "./pages/student/SNotice/SNotice";
import SReference from "./pages/student/SReference/SReference";
import SMypage from "./pages/student/SMypage/SMypage";

//Teacher
import TLogin from "./pages/teacher/TLogin/TLogin";
import TSignup from "./pages/teacher/TSignup/TSignup";
import TClass from "./pages/teacher/TClass/TClass";
import TStudents from "./pages/teacher/TStudents/TStudents";
import TNotice from "./pages/teacher/TNotice/TNotice";
import TReference from "./pages/teacher/TReference/TReference";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Select />} />
                {/* 학생 사이트 */}
                <Route path="/student/login" element={<SLogin />} />
                <Route path="/student/signup" element={<SSignup />} />
                <Route path="/student/grade" element={<SGrade />} />
                <Route path="/student/notice" element={<SNotice />} />
                <Route path="/student/reference" element={<SReference />} />
                <Route path="/student/mypage" element={<SMypage />} />
                {/* 선생님 사이트 */}
                <Route path="/teacher/login" element={<TLogin />} />
                <Route path="/teacher/signup" element={<TSignup />} />
                <Route path="/teacher/class" element={<TClass />} />
                <Route path="/teacher/students" element={<TStudents />} />
                <Route path="/teacher/notice" element={<TNotice />} />
                <Route path="/teacher/reference" element={<TReference />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
