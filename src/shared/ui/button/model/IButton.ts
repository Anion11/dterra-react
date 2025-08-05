export interface IButton {
  variant?: string[] | string;
  text?: string;
  link?: string;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
}
