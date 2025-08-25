import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return; // prevent undefined fetch

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency.toLowerCase()]))
      .catch((err) => console.error("API Error:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
