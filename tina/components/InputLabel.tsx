type InputLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  value?: string
}

export default function InputLabel({
  value,
  children,
  className = "",
  ...props
}: InputLabelProps) {
  return (
    <label
      className={`block font-semibold text-sm text-gray-700 ${className}`}
      {...props}
    >
      {value ? value : children}
    </label>
  )
}
