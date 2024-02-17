let name = "Alex"
let account = 7777
let money = 10000

let namePrompt = prompt('Имя')

if(namePrompt == name) {
    let pin = prompt('Номер счета')

    if(+pin === account) {
        let pin2 = prompt("Сколько обналичить")
        
        if(+pin2 <= account){
            

        
            let result = money - pin2
            
                alert("Осталось " + result)
            
        }else{
            alert("Повторите попытку");
        }

    } else {
        alert('Неправильный номер счёта');
    }

} else {
    alert('Пользователь не найден');
}




