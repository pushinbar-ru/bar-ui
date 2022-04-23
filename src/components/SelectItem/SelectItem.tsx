import React from "react"
import "./SelectItem.css"

export interface SelectItemProps {
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
  value: string | number;
  children: React.ReactNode;
}

const SelectItem = ({ onClick, value, children }: SelectItemProps) => (
  <li className="select-item" onClick={onClick} data-value={value}>{children}</li>
)

export default SelectItem;