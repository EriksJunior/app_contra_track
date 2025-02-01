import { MaskCpf } from "@/utils/maskCpf";
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
        $isLarge={isLarge}
        $backColor={backColorInput}
        $colorLabel={colorLabel}
        $padding={paddingInput}
        $border={borderInput}
        $color={colorInput}
        value={MaskCpf(value)}
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
