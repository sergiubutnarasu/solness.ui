import { Color, Size } from '../../enums';
import { ColorType, SizeType } from '../../types';

export const ButtonTheme =
  'flex items-center relative cursor-pointer rounded-md select-none outline-none focus:outline-none';

export const ButtonContentTheme = (loading?: boolean) => {
  let result = 'visible';

  if (loading) {
    result = 'invisible';
  }

  return `flex items-center ${result}`;
};

export const ButtonColorTheme: Record<ColorType, string> = {
  [Color.black]: 'shadow-md bg-black color text-white',
  [Color.blue]: 'shadow-md bg-blue-500 hover:bg-blue-600 text-white',
  [Color.gray]: 'shadow-md bg-gray-500 hover:bg-gray-600 text-white',
  [Color.green]: 'shadow-md bg-green-500 hover:bg-green-600 text-white',
  [Color.indigo]: 'shadow-md bg-indigo-500 hover:bg-indigo-600 text-white',
  [Color.orange]: 'shadow-md bg-orange-500 hover:bg-orange-600 text-white',
  [Color.pink]: 'shadow-md bg-pink-500 hover:bg-pink-600 text-white',
  [Color.purple]: 'shadow-md bg-purple-500 hover:bg-purple-600 text-white',
  [Color.red]: 'shadow-md bg-red-500 hover:bg-red-600 text-white',
  [Color.teal]: 'shadow-md bg-teal-500 hover:bg-teal-600 text-white',
  [Color.white]: 'shadow-md bg-white text-current',
  [Color.yellow]: 'shadow-md bg-yellow-500 hover:bg-yellow-600 text-white',
};

export const ButtonSizeTheme: Record<SizeType, string> = {
  [Size.base]: 'text-base px-3 py-2',
  [Size.extra]: 'text-2xl px-6 py-5',
  [Size.large]: 'text-lg px-4 py-3',
  [Size.small]: 'text-sm p-2',
  [Size.xlarge]: 'text-xl px-5 py-4',
  [Size.xsmall]: 'text-xs px-2 py-1',
};
