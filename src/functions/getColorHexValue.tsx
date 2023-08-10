export const getColorHexValue = (color: string): string => {
  switch (color) {
  case 'spacegray':
    return '#717378';
  case 'space-gray':
  case 'space gray':
    return '#535150';
  case 'black':
    return '#20211A';
  case 'gold':
    return '#F9E5C9';
  case 'rosegold':
  case 'rose gold':
    return '#CBA3B2';
  case 'silver':
    return '#B0B5B9';
  case 'midnightgreen':
    return '#32494B';
  case 'purple':
    return '#B8AFE6';
  case 'red':
    return '#C8102E';
  case 'white':
    return '#F2F0EB';
  case 'coral':
    return '#ED846D';
  case 'yellow':
    return '#FFFF9F';
  case 'sierrablue':
    return '#9BB5CE';
  case 'midnight':
    return '#171E27';
  case 'graphite':
    return '#5C5B57';
  case 'pink':
    return ' #FAE0D8';
  case 'blue':
    return '#215E7C';
  case 'green':
    return ' #AEE1CD';
  case 'starlight':
    return '#F4EDC6';
  case 'sky-blue':
  case 'sky blue':
    return '#87CEEB';
  case 'spaceblack':
    return '#333334';
  default:
    return color;
  }
};