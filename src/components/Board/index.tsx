import React, { useState } from "react";

const Board = () => {
  const [isLogin, setIsLogin] = useState(false);
  
  return (
    <>
      {isLogin ? <div>Board Page Components</div> : <div>로그인 후 이용</div>}
    </>
  );
};

export default Board;
