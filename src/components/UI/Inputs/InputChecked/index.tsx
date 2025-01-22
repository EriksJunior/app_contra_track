import { InputGroup } from "../styles";
import { Checked, Label, FalseInputChecked, DefaultIconChecked } from "./styles";

interface Props {
  textLabel: string
  value: string
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void
  typeInput?: string
  isDisabled?: boolean
  checked?: boolean
  colorBackgroundLabel?: string
  name?: string
  innerRef?: React.Ref<HTMLInputElement>;
  colorLabel?: string
}

export function InputChecked({
  textLabel,
  handleChange,
  name,
  innerRef,
  colorLabel = '',
  checked = false,
}: Props) {
  const clearInputRequired = () => {
    if (innerRef && 'current' in innerRef) innerRef.current!.required = false;
  };

  return (
    <InputGroup style={{ height: "58px" }}>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "1rem" }}>
        <Label
          htmlFor="default"
          $colorLabel={colorLabel}
        >
          {textLabel}
        </Label>

        <Checked
          id={"default"}
          type="checkbox"
          checked={checked}
          onChange={(e) => handleChange(e)}
          name={name}
          ref={innerRef}
          onBlur={clearInputRequired}
        />

        <FalseInputChecked htmlFor="default">
          <DefaultIconChecked color="white" />
        </FalseInputChecked>
      </div>
    </InputGroup>
  );
}
