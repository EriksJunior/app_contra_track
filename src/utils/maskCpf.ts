export const MaskCpf = (value: string) => {
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