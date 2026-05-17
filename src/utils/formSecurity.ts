export function cleanFormValue(value: FormDataEntryValue, maxLength = 180) {
  return String(value)
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .trim()
    .slice(0, maxLength);
}

export function getCleanFormData(form: HTMLFormElement) {
  return Object.fromEntries(
    Array.from(new FormData(form).entries()).map(([key, value]) => [key, cleanFormValue(value)]),
  );
}
