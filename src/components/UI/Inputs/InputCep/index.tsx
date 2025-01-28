import * as I from "../styles";

interface Props {
  textLabel: string
  value: string
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void
  typeInput?: string
  isDisabled?: boolean
  colorBackgroundLabel?: string
  name?: string
  innerRef?: React.Ref<HTMLInputElement>;
  colorLabel?: string
  maxLength?: string | number
}

export function InputCep({
  typeInput = "text",
  isDisabled = false,
  textLabel,
  value,
  handleChange,
  colorBackgroundLabel,
  name,
  innerRef = null,
  colorLabel,
  maxLength
}: Props) {
  const format = (value: string) => {
    if (value) {
      let newValue = value.replace(/\D/g, "");

      if (newValue.length === 8)
        newValue = newValue.replace(/^(\d{5})(\d{0,3})/, "$1-$2");

      return newValue;
    }

    return "";
  };

  const clearInputRequired = () => {
    if (innerRef && 'current' in innerRef) innerRef.current!.required = false;
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (handleChange) {
      handleChange(e);
    }
    
    clearInputRequired();
  };

  return (
    <I.InputGroup>
      <I.InputText
        type={typeInput}
        $isDisabled={isDisabled}
        $colorLabel={colorLabel}
        value={format(value)}
        onInput={handleInput}
        name={name}
        maxLength={maxLength as number}
        ref={innerRef}
        onBlur={clearInputRequired}
      />

      <I.Label
        $colorBackgroundLabel={colorBackgroundLabel}
      >
        {textLabel}
        <I.RequiredField className="requiredField">
          Campo Obrigatório
        </I.RequiredField>
      </I.Label>
    </I.InputGroup>
  );
}
