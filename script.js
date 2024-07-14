document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const passwordLength = parseInt(
      document.getElementById("passwordLength").value
    );
    const includeLowercase =
      document.getElementById("includeLowercase").checked;
    const includeUppercase =
      document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const password = generatePassword(
      passwordLength,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols
    );
    document.getElementById("passwordDisplay").textContent = password;
  });

function generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  if (includeLowercase) allowedChars += lowercaseChars;
  if (includeUppercase) allowedChars += uppercaseChars;
  if (includeNumbers) allowedChars += numberChars;
  if (includeSymbols) allowedChars += symbolChars;

  if (passwordLength <= 0) {
    return "Password length must be at least 1";
  }

  if (allowedChars.length === 0) {
    return "At least one set of characters needs to be selected";
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}
