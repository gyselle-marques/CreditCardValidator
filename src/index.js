/**
 * Validates the credit card number and identifies the card brand.
 * @param {string} cardNumber - Credit card number.
 * @returns {string} - Card brand or error message.
 */
function validateCard(cardNumber) {
  if (!isValidCardNumber(cardNumber)) {
    return "Invalid card number.";
  }

  const brand = identifyBrand(cardNumber);
  return brand || "Brand not identified.";
}

/**
 * Checks if the credit card number is valid using the Luhn algorithm.
 * @param {string} cardNumber - Credit card number.
 * @returns {boolean} - True if valid, false otherwise.
 */
function isValidCardNumber(cardNumber) {
  const reversedDigits = cardNumber.split("").reverse();
  const sum = reversedDigits.reduce((acc, digit, idx) => {
    let num = parseInt(digit, 10);
    if (idx % 2 !== 0) {
      num *= 2;
      if (num > 9) num -= 9;
    }
    return acc + num;
  }, 0);

  return sum % 10 === 0;
}

/**
 * Identifies the card brand based on the BIN using a regex mapping.
 * @param {string} cardNumber - Credit card number.
 * @returns {string|null} - Identified brand or null.
 */
function identifyBrand(cardNumber) {
  const bin = cardNumber.slice(0, 6); // The first 6 digits are the BIN

  // Regex mapping for card brands
  const brands = [
    { regex: /^4/, brand: "Visa" },
    { regex: /^5[1-5]/, brand: "Mastercard" },
    { regex: /^3[47]/, brand: "American Express" },
    { regex: /^3(01|05|6|8)/, brand: "Diners" },
    {
      regex: /^(636368|438935|504175|451416|636297|5067|4576|4011|506699)/,
      brand: "Elo",
    },
    { regex: /^50/, brand: "Aura" },
    { regex: /^(38|60)/, brand: "Hipercard" },
  ];

  // Find the matching brand
  const match = brands.find(
    ({ regex }) => regex.test(bin) || regex.test(cardNumber)
  );
  return match ? match.brand : null;
}

// Example usage:
const cardNumber = "346816202017986"; // Replace with the card number
const result = validateCard(cardNumber);
console.log(result);
