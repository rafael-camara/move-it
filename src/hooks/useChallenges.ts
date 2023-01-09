import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengeContext";

export function useChallenges() {
  const context = useContext(ChallengesContext);

  return context;
}
