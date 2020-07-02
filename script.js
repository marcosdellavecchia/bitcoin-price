window.addEventListener("load", () => {
  //Define API const
    const api = `https://api.coindesk.com/v1/bpi/currentprice.json`;
  //Target HTML objects
    const usdSpan = document.querySelector('.usd-price');
    const eurSpan = document.querySelector('.eur-price');
    const gbpSpan = document.querySelector('.gbp-price');
    const usdSmall = document.querySelector('.usd-section small');
    const eurSmall = document.querySelector('.eur-section small');
    const gbpSmall = document.querySelector('.gbp-section small');
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
            const usdDescription = data.bpi.USD.description;
            const eurDescription = data.bpi.EUR.description;
            const gbpDescription = data.bpi.GBP.description;
            const updateTime = data.time.updated;
            

  //Replace html tags with previously defined API variables 
            usdSpan.textContent = usdPrice2;
            eurSpan.textContent = eurPrice2;
            gbpSpan.textContent = gbpPrice2;
            usdSmall.textContent = usdDescription;
            eurSmall.textContent = eurDescription;
            gbpSmall.textContent = gbpDescription;
            updateSpan.textContent = updateTime;
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
  console.log(btcIcon);
  btcIcon.classList.add("heartbeat"); 
  }, 700);

})
    
     
    
