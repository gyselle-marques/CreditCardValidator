# Credit Card Validator

This project provides a simple implementation to validate credit card numbers and identify their brands using the **Luhn algorithm** and **regular expressions**.

## Features

- **Validation**: Ensures the credit card number is valid using the Luhn algorithm.
- **Brand Identification**: Identifies the card brand based on the BIN (Bank Identification Number) using regex patterns.
- **Supported Brands**:
  - Visa
  - Mastercard
  - American Express
  - Diners
  - Elo
  - Aura
  - Hipercard

## How It Works

1. **Validation**:

   - The `isValidCardNumber` function checks if the credit card number is valid using the Luhn algorithm.
   - It calculates a checksum by doubling every second digit from the right and summing all digits. If the total is divisible by 10, the card number is valid.

2. **Brand Identification**:
   - The `identifyBrand` function uses a list of regex patterns to match the BIN or card number to a specific brand.

## Code Overview

### Functions

- **`validateCard(cardNumber)`**:

  - Validates the card number and identifies the brand.
  - Returns the brand name or an error message.

- **`isValidCardNumber(cardNumber)`**:

  - Implements the Luhn algorithm to validate the card number.
  - Returns `true` if valid, `false` otherwise.

- **`identifyBrand(cardNumber)`**:
  - Matches the card number against regex patterns to identify the brand.
  - Returns the brand name or `null` if no match is found.

### Example Usage

```javascript
const cardNumber = "4389351234567890"; // Replace with a valid card number
const result = validateCard(cardNumber);
console.log(result); // Outputs the card brand or an error message
```

## Supported BIN Patterns

| Brand                | BIN Pattern                                   |
| -------------------- | --------------------------------------------- |
| **Visa**             | Starts with `4`                               |
| **Mastercard**       | Starts with numbers between `51` and `55`     |
| **American Express** | Starts with `34` or `37`                      |
| **Diners**           | Starts with `301`, `305`, `36`, or `38`       |
| **Elo**              | Matches specific BINs like `636368`, `438935` |
| **Aura**             | Starts with `50`                              |
| **Hipercard**        | Starts with `38` or `60`                      |

## How to Run

1. Clone the repository to your local machine.
2. Ensure you have Node.js installed.
3. Run the script using the following command:
   ```bash
   node src/index.js
   ```

## License

This project is open-source and available under the MIT License.
