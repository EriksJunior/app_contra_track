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
}

export function InputCpfCnpj({
  typeInput = "text",
  isDisabled = false,
  textLabel,
  value,
  handleChange,
  colorBackgroundLabel,
  name,
  innerRef,
  colorLabel,
}: Props) {
  const format = (value: string) => {
    if (value) {
      let newValue = value.replace(/\D/g, "");

      if (newValue.length === 11)
        newValue = newValue.replace(
          /^(\d{3})(\d{0,3})(\d{0,3})(\d{0,2})/,
          "$1.$2.$3-$4"
        );
      else if (newValue.length === 14)
        newValue = newValue.replace(
          /^(\d{2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/,
          "$1.$2.$3/$4-$5"
        );

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
      clearInputRequired();
    }
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
        maxLength={18}
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
