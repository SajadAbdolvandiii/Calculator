var nightMode = document.getElementById('moon');
var dayMode = document.getElementById('sun');


nightMode.addEventListener('click', function() {


})
dayMode.addEventListener('click', function() {

})



let homebar1 = document.getElementsByClassName("homeBar1")[0];
let Buttons = document.getElementsByClassName("button");
let Buttons1 = document.getElementsByClassName("buttons")[0];
let HB = document.getElementById("HomeBar");
let rect = Buttons1.getBoundingClientRect();
let movement = 20;
let HomeBarOpac = 100;
let interCounter = 50;
var deltaY;






var boxMoveActive = false;
var isDown = false;

(function handleButtonBox() {
    setInterval(() => {

        if (movement > 50) {
            HomeBarOpac--;
            HB.style.opacity = HomeBarOpac + '%';

        } else {
            HomeBarOpac++;

            HB.style.opacity = HomeBarOpac + '%';

        }
    }, 10);



    homebar1.addEventListener('mousedown', function(e) {
        isDown = true;
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);

    document.addEventListener('mousemove', function(event) {
        event.preventDefault();

        if (isDown && movement <= 420 && movement >= 20) {
            boxMoveActive = true;
            deltaY = event.movementY
            movement += deltaY;
            Buttons1.style.top = movement + 'px';


        } else {
            if (movement <= 20) {
                movement = 20;
            }

            if (movement >= 420) {
                movement = 420

            }

        }


    }, true);


})();

let bool = false;


// (function hanleBox2() {

//     var aa = setInterval(() => {
//         if (movement > 50 && bool == false && isDown == false) {
//             console.log("kir")
//             interCounter += 0.1;
//             Buttons1.style.top = parseInt(Buttons1.style.top) + interCounter + 'px';
//             if (parseInt(Buttons1.style.top) > 410)
//                 bool = true;
//         }
//         if (parseInt(Buttons1.style.top) < 400 && bool == true) {
//             interCounter -= 1;
//             Buttons1.style.top = interCounter + 'px';
//             if (movement < 30)
//                 bool = false;
//         }

//     }, 5);


// })();
























// homebar scroll



/*let Buttons = [let num1 = document.getElementById("1"),
let num2 = document.getElementById("2"),
let num3 = document.getElementById("3"),
let num4 = document.getElementById("4"),
let num5 = document.getElementById("5"),
let num6 = document.getElementById("6"),
let num7 = document.getElementById("7"),
let num8 = document.getElementById("8"),
let num9 = document.getElementById("9"),
let num0 = document.getElementById("0"),
let num00 = document.getElementById("00"),
let AC = document.getElementById("clear"),
let devide = document.getElementById("devide"),
let minus = document.getElementById("minus"),
let plus = document.getElementById("plus"),
let sign = document.getElementById("sign"),
let remainder = document.getElementById("remainder"),
let multiply = document.getElementById("multiply"),
let equals = document.getElementById("equals"),
let dot = document.getElementById("dot")]; */




// what is the problem??????
/////////////////////////////////////////////////////////////////////


// Buttons.forEach((Buttons, index) => {
//     // clickListener(Buttons[index], NumberBox);
//     console.log("Salam");
// });

/////////////////////////////////////////////////////////////////////



function doOperation(Operation, num1, num2) {


    switch (Operation) {

        case "+":
            return parseFloat(num1) + parseFloat(num2);
        case "-":
            return parseFloat(num1) - parseFloat(num2);
        case "/":
            return parseFloat(num1) / parseFloat(num2);
        case "%":
            return parseFloat(num1) % parseFloat(num2);
        case "x":
            return parseFloat(num1) * parseFloat(num2);





    }


}

let NumberBox = document.getElementsByClassName("current")[0];
let calcBox = document.getElementById("calc");
let temp1 = null;
let temp2 = null;
let temp3 = null;
let lastOp = null;
let counter = 0;


function clickListener(element, element2) {
    element.addEventListener('click', () => {
        if (element.classList.contains("Operation") == true) {

            if (!(temp1 == null)) {


                if (lastOp == "&#177;") {
                    calcBox.textContent = `${temp1} ${lastOp} ${temp1- 2*temp1}`;
                    NumberBox = "";
                } else {
                    temp1 = NumberBox.textContent;
                    calcBox.textContent += element.textContent;
                    lastOp = element.textContent;
                    element2.textContent = "";
                }


            } else {

                element2.textContent = "";
                calcBox.textContent = "";



            }



        } else if (element.classList.contains("Clear")) {
            calcBox.textContent = "";
            element2.textContent = "";
            temp1 = null;
            lastOp = null;
            temp2 = null;
        } else if (element.classList.contains("Number")) {
            if (temp1 == null)
                temp1 = 0;

            element2.innerHTML += element.textContent;
            calcBox.innerHTML += element.textContent;
        } else if (element.classList.contains("Equals")) {
            if (lastOp == null) {} else {

                temp2 = NumberBox.textContent;
                element2.textContent = "";
                if (lastOp == "%") {
                    calcBox.textContent = `${temp1} ${lastOp} ${temp2} = ${doOperation(lastOp,temp1,temp2)}`;

                } else
                    calcBox.textContent = `${temp1} ${lastOp} ${temp2} = ${doOperation(lastOp,temp1,temp2)}`;
            }

        }
    })
}


for (let i = 0; i < 20; i++) {
    clickListener(Buttons[i], NumberBox);


}






setInterval(() => {
    if (NumberBox.textContent.length >= 7) {
        console.log("s");
        NumberBox.style.fontSize = "1.5em";
    }




}, 10);