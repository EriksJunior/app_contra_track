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
  isCellPhone?: boolean
}

export function InputPhone({
  typeInput = "text",
  isDisabled = false,
  textLabel,
  value,
  handleChange,
  colorBackgroundLabel,
  name,
  innerRef,
  colorLabel,
  isCellPhone = false,
}: Props) {
  const format = (value: string) => {
    if (value) {
      let newValue = value.replace(/\D/g, "");

      if (isCellPhone) {
        newValue = newValue.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      } else {
        newValue = newValue.replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
      }

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
    <I.InputGroup style={{ flexDirection: "column-reverse" }}>
      <I.InputText
        type={typeInput}
        $isDisabled={isDisabled}
        $colorLabel={colorLabel}
        value={format(value)}
        onInput={handleInput}
        name={name}
        maxLength={isCellPhone ? 15 : 14}
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
