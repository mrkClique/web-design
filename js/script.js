function openNav(){
    document.getElementById('myNav').style.width = "250px";
}

function closeNav(){
    document.getElementById('myNav').style.width = "0px";
}

function delHtml(){
    document.getElementById('head').innerHTML = "";
    console.log('1231');
}


function toNum(str) {
    const num = Number(str.replace(/ /g, ""));
    return num;
  }
  
  function toCurrency(num) {
    const format = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(num);
    return format;
  }