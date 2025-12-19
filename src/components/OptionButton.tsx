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
  let classes = "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ";

  if (showResult) {
    if (isCorrect) {
      classes += "border-green-500 bg-green-50 text-green-800";
    } else if (selected && !isCorrect) {
      classes += "border-red-500 bg-red-50 text-red-800";
    } else {
      classes += "border-gray-200 bg-gray-50 text-gray-400";
    }
  } else if (selected) {
    classes += "border-indigo-600 bg-indigo-50 text-indigo-800";
  } else if (disabled) {
    classes += "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed";
  } else {
    classes += "border-gray-200 bg-white hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer";
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      <span className="text-lg font-medium">{text}</span>
    </button>
  );
}
