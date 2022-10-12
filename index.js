// variables in the header

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

// variables in the results sections

const meterResult = document.getElementById("meter-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

convertBtn.addEventListener("click", function (){
        if (inputEl.value <= 1) {
            const lengthConversion = `${inputEl.value} meter = ${inputEl.value * 3.281} foot | ${inputEl.value} foot = ${(inputEl.value / 3.281).toFixed(3)} meter`
            const volumeConversion = `${inputEl.value} liter = ${(inputEl.value * 0.264).toFixed(3)} gallon | ${inputEl.value} gallon = ${(inputEl.value / 0.264).toFixed(3)} liter`        
            const massConversion = `${inputEl.value} kilogram = ${(inputEl.value * 2.204).toFixed(3)} pound | ${inputEl.value} pound = ${(inputEl.value / 2.204).toFixed(3)} kilogram`
            meterResult.textContent = lengthConversion
            volumeResult.textContent = volumeConversion
            massResult.textContent = massConversion    
        }else {
        const lengthConversion = `${inputEl.value} meters = ${inputEl.value * 3.281} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`
        const volumeConversion = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`        
        const massConversion = `${inputEl.value} kilograms = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilograms`
        meterResult.textContent = lengthConversion
        volumeResult.textContent = volumeConversion
        massResult.textContent = massConversion
        }
      
    })
    



