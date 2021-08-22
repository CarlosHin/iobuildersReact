let backend = {
    "users": [
      {
        "name":"Carlos","email":"carloshin98@gmail.com","password":"aaa",
        "balance": [
          {"simbol": "BTC", "ammount": 2},
          {"simbol": "LTC", "ammount": 20},
          {"simbol": "DOGE", "ammount": 700}
        ]
      },
      {
        "name":"Ivan","email":"ivan@gmail.com","password":"bbb",
        "balance": [
          {"simbol": "BTC", "ammount": 2}
        ]
      }
    ],
    "coins": [
      {"name":"Bitcoin","simbol":"BTC","logo":"btc.png","dollarValue":47366},
      {"name":"Litecoin","simbol":"LTC","logo":"ltc.png","dollarValue":300},
      {"name":"Ethereum","simbol":"ETH","logo":"eth.png","dollarValue":2500},
      {"name":"Dogecoin","simbol":"DOGE","logo":"doge.png","dollarValue":0.33},
      {"name":"Cardano","simbol":"ADA","logo":"ada.png","dollarValue":2.4}
    ]
}
export default backend;