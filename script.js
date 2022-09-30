let coinStorage = { name: 0, price: 0, timestamp: 0, volume: 0, trustScore: 0 }
let Content = 0
function doStuff() {
  var symbol = event.target.parentNode.classList.value
fetch("https://api.coingecko.com/api/v3/coins/" + symbol)
  .then(response => {
    console.log("We're connected")
    return response.json()
  })
  .then(data => {
    console.log(data)
    coinStorage.name = data.name
    coinStorage.price = "$" + data.tickers[0].last
    coinStorage.timestamp = data.tickers[0].timestamp
    coinStorage.volume = "$" + data.tickers[0].volume + "000 in the last 24 hours"
    coinStorage.trustScore = data.tickers[0].trust_score
    // Content = "Name: " + coinStorage.name + "\n" + "Price: " + coinStorage.price
    //   + "\n" + "Volume: " + coinStorage.volume + "\n" + "TimeStamp: " + coinStorage.timestamp + "\n" + "TrustScore: " + coinStorage.trustScore
    // + "\n \n"
    var br = document.createElement('br');
    var br1 = document.createElement('br');
    var br2 = document.createElement('br');
    var br3 = document.createElement('br');
    var ContentName = document.createTextNode("Name: " + coinStorage.name)
    var ContentPrice = document.createTextNode("Price: " + coinStorage.price)
    var ContentTimestamp = document.createTextNode("Time: "  + coinStorage.timestamp)
    var ContentVolume = document.createTextNode("Volume: " + coinStorage.volume)
    var ContentTrustscore = document.createTextNode("TrustScore: " + coinStorage.trustScore)
    modalContent.appendChild(ContentName)
    modalContent.appendChild(br)
    modalContent.appendChild(ContentPrice)
    modalContent.appendChild(br1)
    modalContent.appendChild(ContentTimestamp)
    modalContent.appendChild(br2)
    modalContent.appendChild(ContentVolume)
    modalContent.appendChild(br3)
    modalContent.appendChild(ContentTrustscore)
    return coinStorage
  })
  .then(data => {
    ToggleModal()
  })
}

function ToggleModal() {
  modal.classList.toggle("show-modal")
}
function CloseModal() {
  modalContent.innerHTML = ""
  modal.classList.toggle("show-modal")
}
