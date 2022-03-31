const form = document.querySelector('form')!;

form.onsubmit = (_) => {
  const data = new FormData(form);
  const choice = data.get('choice') as string;
  return false; // prevent reload
};