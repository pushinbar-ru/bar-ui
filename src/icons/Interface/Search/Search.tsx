import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Search } from "./Search.svg"

export interface SearchProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const SearchIcon = ({ size = 'medium', selected = false }: SearchProps) => (
  <Search className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default SearchIcon