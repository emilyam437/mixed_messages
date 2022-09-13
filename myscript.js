// let d = new Date();
// document.write("<h1>Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()"</h1>")

function display() {  
    alert("Hello World!");  
    }  
document.getElementById('first_line').innerHTML="Hungry and don't know what to eat?"
document.getElementById('second_line').innerHTML='Click below to find out what the magic button recommends';
let btn = document.createElement("button");
btn.innerHTML = "Click Me";
btn.onclick = () => {

    let to_print = '';
    random_number = Math.ceil(Math.random()*10)
    switch (random_number) {
        case 1:
            to_print = 'Pizza';
            break;
        case 2:
            to_print = 'Grilled Chicken Salad';
            break;
        case 3:
            to_print = 'Steak';
            break;
        case 4:
            to_print = 'Fried Rice';
            break;
        case 5:
            to_print = 'Hummus & Raw Veggies';
            break;
        case 6:
            to_print = 'Hard boiled eggs';
        case 7:
            to_print = 'Shrimp';
            break;
        case 1:
            to_print = 'Salmon';
            break;
        case 8:
            to_print = 'Paella';
            break;
        case 9:
            to_print = 'Kebab';
            break;
        default:
            to_print = 'Fries';
            break;
    }
    document.getElementById('food').innerHTML = to_print;
};
document.getElementById('first_button').appendChild(btn);

let btn2 = document.createElement("button");
btn2.innerHTML = "Try Again";
btn2.onclick = () => {
document.getElementById('food').innerHTML = " ";
}
document.getElementById('second_button').appendChild(btn2);