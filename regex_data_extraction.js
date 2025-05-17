function validateInput(input, regex) {
  return regex.test(input);
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const urlRegex = /https?:\/\/(www\.)?[\w\-]+(\.[\w\-]+)+([\/\w\-._~:?#[\]@!$&'()*+,;=]*)?/;
const phoneRegex = /(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}/;
const creditCardRegex = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/;

console.log(validateInput("user@example.com", emailRegex)); // true
console.log(validateInput("https://www.example.com", urlRegex)); // true
console.log(validateInput("123-456-7890", phoneRegex)); // true
console.log(validateInput("1234 5678 9012 3456", creditCardRegex)); // true
