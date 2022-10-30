const axios = require("axios");

const convert = (to, from, amount) => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: { apikey: "g7JJRkcsHWYM0P6lA2ZZ2gjx3mBEUjBL" },
    };

    axios(
      `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    ).then((response) => response.data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  convert,
};
