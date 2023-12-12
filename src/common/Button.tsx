import clsx from "clsx";

interface ButtonPropsType {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  additionalClasses?: string;
  onClick?: () => void;
  className?: string;
}

export function Button(props: ButtonPropsType) {
  const { children, additionalClasses, type = "button", onClick } = props;
  return (
    <button
      type={type}
      className={clsx("border border-black px-6 py-3  text-white bg-black rounded-xl", additionalClasses)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
