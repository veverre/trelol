'use client';
import Link from "next/link";
import { ButtonType, ButtonVariant, ButtonStyleType } from "@/enums/Button";

type ButtonProps = {
  children: React.ReactNode;
  type?: ButtonType;
  href?: string;
  variant?: ButtonVariant;
  styleType?: ButtonStyleType;
  disabled?: boolean;
  icon?: string;
  onClick?: () => void;   
};

const buttonClassMap = {
  [ButtonVariant.PRIMARY]: {
    [ButtonStyleType.PLAIN]: 'bg-blue-600 text-white hover:bg-blue-700 border-none',
    [ButtonStyleType.OUTLINED]: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent',
    [ButtonStyleType.LINK]: 'text-blue-600 underline hover:text-blue-800 bg-transparent border-none',
  },
  [ButtonVariant.SECONDARY]: {
    [ButtonStyleType.PLAIN]: 'bg-gray-600 text-white hover:bg-gray-700 border-none',
    [ButtonStyleType.OUTLINED]: 'border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white bg-transparent',
    [ButtonStyleType.LINK]: 'text-gray-600 underline hover:text-gray-800 bg-transparent border-none',
  },
  [ButtonVariant.DANGER]: {
    [ButtonStyleType.PLAIN]: 'bg-red-600 text-white hover:bg-red-700 border-none',
    [ButtonStyleType.OUTLINED]: 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent',
    [ButtonStyleType.LINK]: 'text-red-600 underline hover:text-red-800 bg-transparent border-none',
  },
  [ButtonVariant.SUCCESS]: {
    [ButtonStyleType.PLAIN]: 'bg-green-600 text-white hover:bg-green-700 border-none',
    [ButtonStyleType.OUTLINED]: 'border border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent',
    [ButtonStyleType.LINK]: 'text-green-600 underline hover:text-green-800 bg-transparent border-none',
  },
};

  function getButtonClasses(variant: ButtonVariant, styleType: ButtonStyleType, disabled: boolean) {
    if (disabled) {
      return "bg-gray-200 text-gray-400 cursor-not-allowed border-none";
    }

    const v = buttonClassMap[variant] || buttonClassMap[ButtonVariant.PRIMARY]
    return v[styleType] || v[ButtonStyleType.PLAIN]
  }


export default function Button({ 
  children,
  type = ButtonType.BUTTON,
  variant = ButtonVariant.PRIMARY,
  styleType = ButtonStyleType.PLAIN,
  disabled = false,
  icon,
  onClick,
  href 
}: ButtonProps) {

  const buttonClasses = getButtonClasses(variant, styleType, disabled);
  const className = `px-4 py-2 rounded text-base font-medium transition-colors duration-200 focus:outline-none cursor-pointer ${buttonClasses}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {icon && <i className={`icon-${icon}`}></i>}
      {children}
    </button>
  );
}