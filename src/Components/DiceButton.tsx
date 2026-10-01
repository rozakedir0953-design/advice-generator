import iconDice from "../assets/images/icon-dice.svg";

type DiceButtonProps = {
  onClick: () => void;
};

export default function DiceButton({ onClick }: DiceButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Generate new advice"
      className="absolute left-1/2 -translate-x-1/2 -bottom-7 w-14 h-14 rounded-full bg-[hsl(150,100%,66%)] flex items-center justify-center hover:shadow-[0_0_0_16px_hsla(150,100%,66%,0.15)] transition-shadow"
    >
      <img src={iconDice} alt="" className="w-5 h-5" />
    </button>
  );
}