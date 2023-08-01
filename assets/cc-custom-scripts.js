jQuery(function(){
  console.log('hello there from Joey');

  /*const ccCustomVariations = document.querySelectorAll('.footer-cc-custom-change-country select');
  ccCustomVariations.forEach((ccCustomVariation) => {
      ccCustomVariation.addEventListener('change', function() {
          const selectedOption = this.options[this.selectedIndex];
          location.href = selectedOption.getAttribute('data-url');
      });
  });*/

  // IP Geolocation
  /*jQuery.get("https://ipinfo.io/json", function (response) {
    let user_country = response['country'];
    console.log(user_country);

    if(user_country == 'JP') { // Japan
      window.location.href = 'https://corecolour.co.jp';
    } else if(user_country != 'AU') { // rest of the world
      window.location.href = 'https://corecolour.com';
    }
    
  }, "jsonp");*/
});