import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res.data));
  }, []);

  const onCLickHandler = () => {
    axios.get("/api/user/logout").then((response) => {
      console.log(response.data);
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("logout fail");
      }
    });
  };

  return (
    <div>
      <h3>시작 페이지</h3>
      <button onClick={onCLickHandler}>로그아웃</button>
    </div>
  );
}

export default LadingPage;
