import React, { ReactNode } from 'react';
import { FormProvider, useForm, UseFormOptions } from 'react-hook-form';

export interface Props<TFormValues> {
  defaultValues?: UseFormOptions<TFormValues>['defaultValues'];
  children?: ReactNode;
  onSubmit: (values: Partial<TFormValues>) => void;
}

const Form = <TFormValues extends object>({
  defaultValues,
  onSubmit,
  children,
}: Props<TFormValues>) => {
  const methods = useForm<TFormValues>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
