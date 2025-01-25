import * as I from "../styles";

interface Props {
  textLabel?: string
  value: string
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  typeInput?: string
  isDisabled?: boolean
  colorBackgroundLabel?: string
  name?: string
  innerRef?: React.Ref<HTMLInputElement>
  colorLabel?: string
  isLarge?: boolean
  backColorInput?: string
  paddingInput?: string
  borderInput?: string
  colorInput?: string
}

export function InputCpfCnpj({
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
  isLarge,
  backColorInput,
  paddingInput,
  borderInput,
  colorInput
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
        $isLarge={isLarge}
        $backColor={backColorInput}
        $colorLabel={colorLabel}
        $padding={paddingInput}
        $border={borderInput}
        $color={colorInput}
        value={format(value)}
        onInput={handleInput}
        name={name}
        maxLength={18}
        ref={innerRef}
        onBlur={clearInputRequired}
        placeholder={placeholder && placeholder}
      />

      <I.Label
        $colorBackgroundLabel={colorBackgroundLabel}
      >
        {textLabel}
        <I.RequiredField className="requiredField" $isLarge={isLarge}>
          Campo Obrigatório
        </I.RequiredField>
      </I.Label>
    </I.InputGroup>
  );
}
