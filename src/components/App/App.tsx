import css from "./App.module.css";

import { useState } from "react";

import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";

import { type Votes, type VoteType } from "../Type/votes";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType): void => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  function resetVotes(): void {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions />
      </div>
    </>
  );
}

export default App;
