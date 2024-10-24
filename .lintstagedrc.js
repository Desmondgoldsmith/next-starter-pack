module.exports = {
  "**/*.(ts|tsx|js|jsx)": (filenames) => [
    `prettier --write ${filenames.join(" ")}`,
    `eslint --fix ${filenames.join(" ")}`,
  ],
  "**/*.(md|json)": (filenames) => `prettier --write ${filenames.join(" ")}`,
};
