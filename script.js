function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Digite um número, por favor')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        for (let i = 0; i <=10; i++){
            let item = document.createElement('option')
            item.text = `${i} x ${n} = ${n*i}`
            tab.appendChild(item)
        }
    }

}

function carregar() {
    var data = new Date()
    var hours = data.getHours()
    
    if (hours >= 6 && hours <= 12){
        document.body.style.background = '#e2cd9f'
    } else if (hours > 12 && hours <= 18) {
        document.body.style.background = '#b9846f'
    } else {
        document.body.style.background = '#515154'
    }
}