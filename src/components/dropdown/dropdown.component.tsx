import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useOnClickOutside } from '../../hooks';

export interface Props {
  children: ReactNode;
  menu: ReactNode;
  open?: boolean;
  persist?: boolean;
  onClose?: () => void;
}

const Dropdown: FunctionComponent<Props> = ({
  children,
  menu,
  open = false,
  persist = false,
  onClose,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(open);

  useOnClickOutside(ref, () => {
    setIsOpen(false);
    onClose?.();
  });

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      onClose?.();
    }
  };

  const theme = isOpen ? 'open' : '';

  return (
    <div ref={ref} className={`sln-dropdown ${theme}`}>
      <div onClick={toggleDropdown}>{children}</div>

      <div
        className="sln-dropdown-menu rounded shadow"
        onClick={() => !persist && toggleDropdown()}
      >
        {menu}
      </div>
    </div>
  );
};

export default Dropdown;
