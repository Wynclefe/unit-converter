// variables in the header

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

// variables in the results sections

let meterResult = document.getElementById("meter-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("masss-result")

convertBtn.addEventListener("click", function (){
        let meterToFeet = `${inputEl.value} meters = ${inputEl.value * 3.281} meters | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} feet`
        meterResult.textContent = meterToFeet
        console.log(meterToFeet)
      
    })
    



