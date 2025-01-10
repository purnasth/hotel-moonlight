import * as TbIcons from 'react-icons/tb';
import * as MdIcons from 'react-icons/md';

const iconMap = {
  ...TbIcons,
  ...MdIcons,
};

export const getIconComponent = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap] || null;
};
