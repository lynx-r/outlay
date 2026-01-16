export const cutNumber = (n: number) => {
  const format = (toCut: number, letter: string) => {
    const str = String(n)

    const main = str.slice(0, -toCut);
    const part = str.at(-toCut);
    if (part === '0') {
      return main + letter;
    }
    return main + '.' + part + letter;
  };

  if (n > 999999) {
    return format(6, "м");
  }

  if (n > 999) {
    return format(3, "к");
  }

  return n;
};
