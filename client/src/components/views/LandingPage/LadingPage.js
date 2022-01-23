import React, { useEffect } from "react";
import axios from "axios";

function LadingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <h3>시작 페이지</h3>
    </div>
  );
}

export default LadingPage;
