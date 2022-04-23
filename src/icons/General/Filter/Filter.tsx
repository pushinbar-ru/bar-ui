import React from "react";
import '../../../colors.css'
import '../../icons.css'
import { ReactComponent as Filter } from "./Filter.svg"

export interface FilterProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  selected?: boolean;
}

const FilterIcon = ({ size = 'medium', selected = false }: FilterProps) => (
  <Filter className={`icon icon_${size}` + (selected ? ' icon_selected' : '')} />
)

export default FilterIcon