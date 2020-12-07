import { FunctionComponent } from 'react';
import {
  HiBell,
  HiChevronDown,
  HiCog,
  HiDotsVertical,
  HiDownload,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineCheck,
  HiOutlineCollection,
  HiOutlineDocumentDuplicate,
  HiOutlineHome,
  HiOutlineOfficeBuilding,
  HiOutlinePlus,
  HiOutlineUser,
  HiOutlineUsers,
  HiX,
} from 'react-icons/hi';
import { Icon } from '../enums';
import { IconProps } from '../types';

export const ICON_CONFIG: Record<Icon, FunctionComponent<IconProps>> = {
  [Icon.bell]: HiBell,
  [Icon.briefcase]: HiOutlineBriefcase,
  [Icon.calendar]: HiOutlineCalendar,
  [Icon.check]: HiOutlineCheck,
  [Icon.close]: HiX,
  [Icon.cog]: HiCog,
  [Icon.collection]: HiOutlineCollection,
  [Icon.documents]: HiOutlineDocumentDuplicate,
  [Icon.dots]: HiDotsVertical,
  [Icon.down]: HiChevronDown,
  [Icon.download]: HiDownload,
  [Icon.home]: HiOutlineHome,
  [Icon.office]: HiOutlineOfficeBuilding,
  [Icon.users]: HiOutlineUsers,
  [Icon.user]: HiOutlineUser,
  [Icon.plus]: HiOutlinePlus,
};
