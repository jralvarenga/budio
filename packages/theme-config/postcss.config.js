const theme = require("./theme.json") // Import your JSON file

module.exports = {
  plugins: {
    "postcss-simple-vars": { variables: theme }, // Pass JSON as variables
    "@tailwindcss/postcss": {},
  },
}