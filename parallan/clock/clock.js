var pirapahil = 00
var piral = 00
var pirasal = 00
var pirapal = 00
let time_elem
let date_elem
let time_dec_elem
let date_dec_elem

let interval

window.setInterval(recalculate_time, 300000)

function recalculate_time() {
    console.log("recalculated time!")
    window.clearInterval(interval)
    loaded()
}

function loaded() {
    time_elem = document.getElementById('time')
    date_elem = document.getElementById('date')
    time_dec_elem = document.getElementById('time_dec')
    date_dec_elem = document.getElementById('date_dec')
    var currentDate = new Date()
    var epoch = new Date(972691860000)
    var days_diff = (currentDate.valueOf() - epoch.valueOf()) / (1000*60*60*24)
    var laul_diff = days_diff/2.2552832166666666666666666666666666666666666666666666666666666666
    var panva_laul = 179.666666666667
    var panva = 20000+Math.floor(laul_diff/panva_laul)
    var panva_lau_frac = laul_diff-(panva_laul*(panva-20000))+1
    
    let cililau
    let lau
    var tmp_plf = panva_lau_frac
    for (var i = 1; i <= (panva % 3 == 0 ? 10 : 9); i++) {
        if (tmp_plf <= 21) {
            cililau = i == 10 ? 'I' : i
            lau = Math.ceil(tmp_plf)
            break
        }
        tmp_plf -= 21
    }

    var panva_lau_dec = panva_lau_frac-Math.floor(panva_lau_frac)
    var pirapal_frac = panva_lau_dec * 36
    pirapal = Math.floor(pirapal_frac)
    var pirasal_frac = (pirapal_frac-pirapal)*36
    pirasal = Math.floor(pirasal_frac)
    var piral_frac = (pirasal_frac-pirasal)*36
    piral = Math.floor(piral_frac)
    pirapahil = Math.floor((piral_frac-piral)*1296)
    
    time_elem.innerText = `${pirapal.toString(6).padStart(2,0)}:${pirasal.toString(6).padStart(2,0)}:${piral.toString(6).padStart(2,0)}:${pirapahil.toString(6).padStart(4,0)}`
    time_dec_elem.innerText = `${pirapal.toString().padStart(2,0)}:${pirasal.toString().padStart(2,0)}:${piral.toString().padStart(2,0)}:${pirapahil.toString().padStart(4,0)}`
    date_elem.innerText = `${panva.toString(6)}/${cililau.toString(6).padStart(2,0)}/${lau.toString(6).padStart(2,0)}`
    date_dec_elem.innerText = `${panva.toString()}/${cililau.toString().padStart(2,0)}/${lau.toString().padStart(2,0)}`
    interval = window.setInterval(tick, 3.22)
}

function tick() {
    var time = time_elem.innerText.split(':')
    pirapahil = parseInt(time[3], 6)
    piral = parseInt(time[2], 6)
    pirasal = parseInt(time[1], 6)
    pirapal = parseInt(time[0], 6)
    if (pirapahil + 1 == 1296) {
        pirapahil = 0
        if (piral + 1 == 36) {
            piral = 0
            if (pirasal + 1 == 36) {
                pirasal = 0
                if (pirapal + 1 == 36) {
                    pirapal = 0
                    recalculate_time()
                } else {
                    pirapal += 1
                }
            } else {
                pirasal += 1
            }
        } else {
            piral += 1
        }
    } else {
        pirapahil += 1
    }
    
    time_elem.innerText = `${pirapal.toString(6).padStart(2,0)}:${pirasal.toString(6).padStart(2,0)}:${piral.toString(6).padStart(2,0)}:${pirapahil.toString(6).padStart(4,0)}`
    time_dec_elem.innerText = `${pirapal.toString().padStart(2,0)}:${pirasal.toString().padStart(2,0)}:${piral.toString().padStart(2,0)}:${pirapahil.toString().padStart(4,0)}`
}

function getYearDay(date) {
    var start = new Date(date.getFullYear(), 0, 0);
    var diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    return diff / oneDay;
}