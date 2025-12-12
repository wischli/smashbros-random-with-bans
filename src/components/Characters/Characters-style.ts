import { color } from '../../layout/themeStyle'

// Fixed cell size for the grid
const CELL_SIZE = 75;
const CELL_GAP = 2;

// Container with horizontal scroll
// Note: padding is handled via CSS class 'grid-container' for responsive behavior
export const gridContainerStyle: React.CSSProperties = {
  backgroundColor: color.background,
  overflowX: 'auto',
  overflowY: 'hidden',
  boxSizing: 'border-box',
}

// Fixed width grid (13 columns)
export const gridStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: `${CELL_GAP}px`,
  // Fixed width: 13 cells + gaps
  width: `${13 * CELL_SIZE + 12 * CELL_GAP}px`,
  margin: '0 auto',
}

// Row of 13 characters
export const gridRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: `${CELL_GAP}px`,
}

// Empty cell placeholder (for Random slot or hidden characters)
export const emptyCellStyle: React.CSSProperties = {
  width: CELL_SIZE,
  height: CELL_SIZE,
  backgroundColor: 'transparent',
  flexShrink: 0,
}
