const axios = require("axios");

const convert = async (to, from, amount) => {
  try {
    let result;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: { apikey: "g7JJRkcsHWYM0P6lA2ZZ2gjx3mBEUjBL" },
    };

    await axios(
      `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    ).then((response) => {
      result = response.data;
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  convert,
};
