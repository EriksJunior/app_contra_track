import { useState } from "react";
import * as I from "../styles";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface Props {
  value: string
  textLabel?: string
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  typeInput?: string
  isDisabled?: boolean
  colorBackgroundLabel?: string
  name?: string
  innerRef?: React.Ref<HTMLInputElement>;
  colorLabel?: string
  maxLength?: string | number
  isLarge?: boolean
  backColorInput?: string
  paddingInput?: string
  borderInput?: string
  borderColorOnFocus?: string
  colorInput?: string
  isPassword?: boolean
}

export function InputLabel({
  typeInput = "text",
  isDisabled = false,
  textLabel,
  placeholder,
  value,
  handleChange,
  colorBackgroundLabel,
  name,
  innerRef,
  colorLabel,
  maxLength,
  isLarge,
  backColorInput,
  paddingInput,
  borderInput,
  borderColorOnFocus,
  colorInput,
  isPassword = false
}: Props) {
  const [pass, setPass] = useState(isPassword)

  const clearInputRequired = () => {
    if (innerRef && 'current' in innerRef) innerRef.current!.required = false;
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (handleChange) {
      handleChange(e);
    }
    
    clearInputRequired();
  };

  const toggleToPassword = () => {
    setPass(state => !state)
  }

  return (
    <I.InputGroup>
      {pass ? (
        <I.InputText
          type={'password'}
          $isDisabled={isDisabled}
          $isLarge={isLarge}
          $backColor={backColorInput}
          $padding={paddingInput}
          $border={borderInput}
          $borderColorOnFocus={borderColorOnFocus}
          $color={colorInput}
          $isPassword={isPassword}
          value={value || ""}
          onInput={handleInput}
          name={name}
          ref={innerRef}
          onBlur={clearInputRequired}
          placeholder={placeholder && placeholder}
          maxLength={maxLength as number}
        />
      ) : (
        <I.InputText
          type={typeInput}
          $isDisabled={isDisabled}
          $isLarge={isLarge}
          $backColor={backColorInput}
          $padding={paddingInput}
          $border={borderInput}
          $borderColorOnFocus={borderColorOnFocus}
          $color={colorInput}
          value={value || ""}
          onInput={handleInput}
          name={name}
          ref={innerRef}
          onBlur={clearInputRequired}
          placeholder={placeholder && placeholder}
          maxLength={maxLength as number}
        />
      )}

      <I.Label
        $colorBackgroundLabel={colorBackgroundLabel}
        $colorLabel={colorLabel}
      >
        {textLabel}
        <I.RequiredField className="requiredField" $isLarge={isLarge}>
          Campo Obrigatório
        </I.RequiredField>
      </I.Label>


      {isPassword && (
        <div style={{
          height: '100%',
          width: 45,
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }} onClick={toggleToPassword}>
          {pass ? <FiEye size={20} color="gray" /> : <FiEyeOff size={20} color="gray" />}
        </div>
      )}
    </I.InputGroup>
  );
}
