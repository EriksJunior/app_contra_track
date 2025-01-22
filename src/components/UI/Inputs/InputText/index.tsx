import * as I from "../styles";

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
  colorInput?: string
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
  colorInput
}: Props) {
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
        $padding={paddingInput}
        $border={borderInput}
        $color={colorInput}
        value={value || ""}
        onInput={handleInput}
        name={name}
        ref={innerRef}
        onBlur={clearInputRequired}
        placeholder={placeholder && placeholder}
        maxLength={maxLength as number}
      />
      
      <I.Label
        $colorBackgroundLabel={colorBackgroundLabel}
        $colorLabel={colorLabel}
      >
        {textLabel}
        <I.RequiredField className="requiredField">
          Campo Obrigatório
        </I.RequiredField>
      </I.Label>
    </I.InputGroup>
  );
}
