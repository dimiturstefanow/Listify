import React, { useCallback, useState } from "react";
import Header from "./components/Header";
import Center from "./components/Center";
import useDarkMode from "./Hooks/useDarkMode";
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "./redux/boardsSlice";

function App() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const activeBoard = boards.find((board) => board.isActive);

  if (!activeBoard && boards.length === 0){
    dispatch(boardsSlice.actions.setBoardActive({index: 0}))
  }

  const [boardModalOpen, setBoardModalOpen] = useState(false);

  return (
    <div>
      {/* Header Section */}

      <Header
        boardModalOpen={boardModalOpen}
        setBoardModalOpen={setBoardModalOpen}
      />

      {/* Center Section */}

      <Center />
    </div>
  );
}

export default App;
