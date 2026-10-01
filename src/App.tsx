import { useState, useEffect } from "react";
import AdviceCard from "./Components/AdviceCard";
import DiceButton from "./Components/DiceButton";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  async function getAdvice() {
    setLoading(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setAdviceId(data.slip.id);
    setLoading(false);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(218,23%,16%)] flex items-center justify-center p-6">
      <div className="relative bg-[hsl(217,19%,24%)] rounded-2xl p-8 sm:p-10 max-w-lg w-full text-center shadow-2xl">
        <AdviceCard advice={advice} adviceId={adviceId} loading={loading} />
        <DiceButton onClick={getAdvice} />
      </div>
    </div>
  );
}