import React, { FunctionComponent, ReactNode, useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks';
import './styles.css';

export interface Props {
  children: ReactNode;
  menu: ReactNode;
}

const Dropdown: FunctionComponent<Props> = ({ children, menu }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(ref, () => setIsOpen(false));

  const theme = isOpen ? 'open' : '';
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div ref={ref} className={`sln-dropdown ${theme}`}>
      <div onClick={toggleDropdown}>{children}</div>

      <div className="sln-dropdown-menu rounded shadow">{menu}</div>
    </div>
  );
};

export default Dropdown;
