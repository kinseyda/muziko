import { ChangeEventHandler } from "react";

export interface InputFields {
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  labelText?: string;
  labelFor?: string;
  id: string;
  name: string;
  type?: string;
  isRequired?: boolean;
  placeholder?: string;
  customClass?: string;
}

export default function Input({
  handleChange,
  value = "",
  labelText = "",
  labelFor = "",
  id = "",
  name = "",
  type = "",
  isRequired = false,
  placeholder = "",
  customClass = "",
}: InputFields) {
  return (
    <div className="form-control w-full max-w-x">
      <label htmlFor={labelFor} className="label">
        <span className="label-text">{labelText}</span>
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={"input input-bordered w-full max-w-xs " + customClass}
        placeholder={placeholder}
      />
    </div>
  );
}
