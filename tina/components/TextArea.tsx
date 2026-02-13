import { forwardRef } from "react"

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

function TextArea(
  { className = "", ...props }: TextAreaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <textarea
      ref={ref}
      className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm !text-base ${className}`}
      {...props}
    />
  )
}

export default forwardRef<HTMLTextAreaElement, TextAreaProps>(TextArea)
