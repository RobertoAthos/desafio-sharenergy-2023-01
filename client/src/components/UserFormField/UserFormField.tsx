import React from "react";

export const UserFormField = ({value, onChange, inputType,placeholder,name,required}:any) => {
  return (
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
  );
};
