import React from "react";
import { useNavigate } from "react-router";

const Select = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Title</h1>
            <div onClick={() => navigate("/student/login")}>학생</div>
            <div onClick={() => navigate("/teacher/login")}>선생님</div>
        </>
    );
};

export default Select;
