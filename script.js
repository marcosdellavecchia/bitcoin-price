window.addEventListener("load", () => {
  //Define API const
    const api = `https://api.coindesk.com/v1/bpi/currentprice.json`;
  //Target HTML objects
    const usdSpan = document.querySelector('.usd-price');
    const eurSpan = document.querySelector('.eur-price');
    const gbpSpan = document.querySelector('.gbp-price');
    const updateSpan = document.querySelector('.update');
    const body = document.querySelector('body');
    const btcIcon = document.querySelector('.fa-bitcoin');


      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
  //Define prices, descriptions and last update time
            const usdPrice = data.bpi.USD.rate;
            const usdPrice2 = usdPrice.substring(0, usdPrice.length -2);
            const eurPrice = data.bpi.EUR.rate;
            const eurPrice2 = eurPrice.substring(0, eurPrice.length -2);
            const gbpPrice = data.bpi.GBP.rate;
            const gbpPrice2 = gbpPrice.substring(0, gbpPrice.length -2);
            const updateTime = data.time.updated;

  //Convert UTC time to local.
            var updateLocal = new Date(updateTime).toLocaleString("es-AR");
            

  //Replace html tags with previously defined API variables 
            usdSpan.textContent = usdPrice2;
            eurSpan.textContent = eurPrice2;
            gbpSpan.textContent = gbpPrice2;
            updateSpan.textContent = updateLocal;          
        })

  //Fade In animation
  fadeIn(body, 1000);

  function fadeIn(el, time) {
    el.style.opacity = 0;
  
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
  }

  //Wait 0.8s before heartbeat animation runs
setTimeout(function(){
  btcIcon.classList.add("heartbeat"); 
  }, 700);
})