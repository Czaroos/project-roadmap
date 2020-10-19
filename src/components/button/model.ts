type Variant = 'default' | 'round';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  variant?: Variant;
  children?: React.ReactNode;
}
