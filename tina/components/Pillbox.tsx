type Props = {
  classes: string;
  children: ReactNode;
};

export default function Pillbox({classes, children}: Props) {

  return (
    <span className={`inline-flex items-center rounded-full bg-indigo-50 px-1.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 ${classes ? classes : ''}`}>{children}</span>
  );

}
