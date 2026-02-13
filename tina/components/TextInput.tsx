import React, { forwardRef } from "react"

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ${className}`}
        {...props}
      />
    )
  }
)

TextInput.displayName = "TextInput"

export default TextInput
