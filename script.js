'use strict'

function converter() {
    var tempAtual = parseFloat(document.querySelector('#temperatura').value)
    var escalaAtual = document.querySelector('#escala1')
    var escalaResult = document.querySelector('#escala2')
    var temp1 = escalaAtual.options[escalaAtual.selectedIndex].value
    var temp2 = escalaResult.options[escalaResult.selectedIndex].value

    var res = 0

    var resFinal = document.querySelector('.resultado')

    if (temp1 === temp2) {
        alert('Selecione temperaturas diferentes para converter!')
        return
    }

    if ((temp1 === 'celsius') && (temp2 === 'fahrenheit')) {
        res = (tempAtual * 1.8) + 32
        resFinal.innerHTML = `A temperatura ${tempAtual}°C em graus Fahrenheit é ${res.toFixed(1)}°F.`
        return
    }
    if ((temp1 === 'celsius') && (temp2 === 'kelvin')) {
        res = (tempAtual + 273.15)
        resFinal.innerHTML = `A temperatura ${tempAtual}°C em graus Kelvin é ${res.toFixed(1)}°K.`
        return
    }
    if ((temp1 === 'fahrenheit') && (temp2 === 'celsius')) {
        res = (tempAtual - 32) / 1.8
        resFinal.innerHTML = `A temperatura ${tempAtual}°F em graus Celsius é ${res.toFixed(1)}°C.`
        return
    }
    if ((temp1 === 'fahrenheit') && (temp2 === 'kelvin')) {
        res = (tempAtual + 459.67) * 0.556
        resFinal.innerHTML = `A temperatura ${tempAtual}°F em graus Kelvin é ${res.toFixed(1)}°K.`
        return
    }
    if ((temp1 === 'kelvin') && (temp2 === 'celsius')) {
        res = (tempAtual - 273.15)
        resFinal.innerHTML = `A temperatura ${tempAtual}°K em graus Celsius é ${res.toFixed(1)}°C`
        return
    }
    if ((temp1 === 'kelvin') && (temp2 === 'fahrenheit')) {
        res = (tempAtual * 0.556) - 459.67
        resFinal.innerHTML = `A temperatura ${tempAtual}°K em graus Fahrenheit é ${res.toFixed(1)}°F.`
        return
    }
}