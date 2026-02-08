import { ChevronRightIcon } from '@heroicons/react/24/outline'

type Props = {
  href: string;
  classes?: string;
  tinaField?: string;
  children: ReactNode;
};

export default function LinkButton({ href, classes, tinaField, children }: Props) {

  return (
    <a href={href} data-tina-field={tinaField} className={`inline-flex gap-x-1 items-center text-center rounded-full bg-[#bea992] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600  ${classes ? classes : ''}`}>
      {children}
      <ChevronRightIcon className="size-5 shrink-0"/>
    </a>
  );

}
