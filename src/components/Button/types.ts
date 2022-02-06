export interface IProps {
  onClick?: (element: any) => void;
  color?: string;
  status: string;
  type: "square" | "circle";
  size: "small" | "large";
}
