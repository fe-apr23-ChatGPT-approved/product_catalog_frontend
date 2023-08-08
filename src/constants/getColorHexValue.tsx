export const getColorHexValue = (color: string): string => {
  switch (color) {
  case 'spacegray':
    return '#717378';
  case 'black':
    return '#20211A';
  case 'gold':
    return '#FFD971';
  case 'rosegold':
    return '#CBA3B2';
  case 'silver':
    return '#B0B5B9';
  case 'midnightgreen':
    return '#32494B';
  case 'green':
    return '#66A586';
  case 'purple':
    return '#D3C2CF';
  case 'red':
    return '#C8102E';
  case 'white':
    return '#F2F0EB';
  case 'coral':
    return '#ED846D';
  case 'yellow':
    return '#FFFF9F';
  default:
    return color;
  }
};