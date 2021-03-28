import React, { FunctionComponent, ReactNode } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import Typography from '../typography';

export interface Props {
  name: string;
  required?: boolean;
  placeholder?: string;
  label?: ReactNode;
  type?: string;
  bottom?: number;
  description?: ReactNode;
  validators?: Partial<RegisterOptions>;
}

const Input: FunctionComponent<Props> = ({
  name,
  label,
  placeholder,
  type = 'text',
  required = false,
  bottom = 0,
  description,
  validators,
}) => {
  const { register, errors } = useFormContext();

  return (
    <div className={`mb-${bottom}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-gray-600 text-xs font-medium mb-2"
        >
          {label}
        </label>
      )}
      <input
        className="px-3 py-3 w-full text-gray-700 text-sm leading-none appearance-none border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        ref={register({
          required: { value: required, message: 'This field is required' },
          ...validators,
        })}
      />

      {description && (
        <div className="pt-2">
          <Typography as="div" size="xsmall" color="gray">
            {description}
          </Typography>
        </div>
      )}

      {errors?.[name] && (
        <div className="pt-2">
          <Typography size="xsmall" color="red">
            {errors?.[name]?.message}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Input;
