import clsx from "clsx";

interface InputPropsType {
  type: string;
  placeholder: string;
  additionalClasses?: string;
}

export function Input({ placeholder, additionalClasses,type="text" }: InputPropsType) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={clsx(
        "border border-black rounded-lg py-3 px-4 outline-none",
        additionalClasses
      )}
    />
  );
}
