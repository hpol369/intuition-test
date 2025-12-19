interface OptionButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  selected?: boolean;
  isCorrect?: boolean;
  showResult?: boolean;
}

export function OptionButton({
  text,
  onClick,
  disabled,
  selected,
  isCorrect,
  showResult
}: OptionButtonProps) {
  const getClasses = () => {
    const base = "w-full px-4 py-4 text-left rounded-lg border transition-all duration-150 ";

    if (showResult) {
      if (isCorrect) {
        return base + "border-emerald-200 bg-emerald-50 text-emerald-900";
      } else if (selected && !isCorrect) {
        return base + "border-red-200 bg-red-50 text-red-900";
      } else {
        return base + "border-zinc-100 bg-zinc-50 text-zinc-400";
      }
    }

    if (selected) {
      return base + "border-zinc-900 bg-zinc-900 text-white";
    }

    if (disabled) {
      return base + "border-zinc-100 bg-zinc-50 text-zinc-400 cursor-not-allowed";
    }

    return base + "border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 cursor-pointer";
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={getClasses()}
    >
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
}
