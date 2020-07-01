window.addEventListener("load", () => {
    const api = `https://api.coindesk.com/v1/bpi/currentprice.json`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {

            const eurPrice = data.bpi.EUR.rate;
            const usdPrice = data.bpi.USD.rate;
            const gbpPrice = data.bpi.GBP.rate;
            const updateTime = data.time.updated;
            console.log(data)

            console.log('Bitcoin price in EUR is ' + eurPrice);
            console.log('Bitcoin price in USD is ' + usdPrice);
            console.log('Bitcoin price in GBP is ' + gbpPrice);

        })
})