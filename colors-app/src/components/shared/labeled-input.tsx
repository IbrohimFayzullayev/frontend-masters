import { ComponentPropsWithoutRef, useId } from 'react';

type LabeledInputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'autoFocus'
> & {
  label: string;
};

const LabeledInput = ({ label, id, onChange, ...props }: LabeledInputProps) => {
  id = useId() + id;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} readOnly={!onChange} {...props} />
    </div>
  );
};

export default LabeledInput;
