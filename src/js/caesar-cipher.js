function shiftChar(char, shift) {
  const code = char.charCodeAt(0);

  if (char >= 'a' && char <= 'z') {
    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
  }

  if (char >= 'A' && char <= 'Z') {
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  }

  return char;
}

export default function caesarCipher(text, shift) {
  if (typeof text !== "string" || typeof shift !== "number") {
    throw new Error("Verify that the values are correct");
  }

  // Normalize shift to avoid problems with values greater than 26 or negative
  const realShift = ((shift % 26) + 26) % 26;

  return [...text].map(char => shiftChar(char, realShift)).join('');
}
