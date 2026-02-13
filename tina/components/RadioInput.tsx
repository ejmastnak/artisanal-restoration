import { forwardRef } from "react"

type RadioInputProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: React.ReactNode
  }

function RadioInput(
  { label, className = "", ...props }: RadioInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <label className={`flex items-center ${className}`}>
      <input
        ref={ref}
        type="radio"
        {...props}
      />
      <span className="ml-2.5 block text-sm/6 font-medium text-gray-900">
        {label}
      </span>
    </label>
  )
}

export default forwardRef<HTMLInputElement, RadioInputProps>(RadioInput)
