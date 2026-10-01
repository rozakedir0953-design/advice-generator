import patternDivider from "../assets/images/pattern-divider-desktop.svg";

type AdviceCardProps = {
  advice: string;
  adviceId: number | null;
  loading: boolean;
};

export default function AdviceCard({
  advice,
  adviceId,
  loading,
}: AdviceCardProps) {
  return (
    <>
      <p className="text-[hsl(150,100%,66%)] text-xs sm:text-sm font-bold tracking-[0.3em] mb-6">
        {adviceId ? `ADVICE #${adviceId}` : "LOADING..."}
      </p>

      <h1 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-8 min-h-18">
        {loading ? "..." : `“${advice}”`}
      </h1>

      <img src={patternDivider} alt="" className="w-full mb-0" />
    </>
  );
}