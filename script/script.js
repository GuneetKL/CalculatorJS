//function addValue(){
    // get the operands value

    // parse to integer. You can use: parseInt(input, 10);

    // perform operation

    // creating the text output

    // (if you want to check) print out in console

    // change the text area

//    document.mycalculator.output.value = text;
//}


function addValue(){
    operand1 = document.getElementById('input_a').value;
    operand2 = document.getElementById('input_b').value;

    a = parseInt(operand1, 10);
    b = parseInt(operand2, 10);

    addition = a+b;
    document.mycalculator.output.value = (a + " + " + b + " = " + addition);
}

function mulValue(){
    operand1 = document.getElementById('input_a').value;
    operand2 = document.getElementById('input_b').value;

    a = parseInt(operand1, 10);
    b = parseInt(operand2, 10);

    multiplication = a*b;
    document.mycalculator.output.value = (a + " * " + b + " = " + multiplication);
}

function divValue(){
    operand1 = document.getElementById('input_a').value;
    operand2 = document.getElementById('input_b').value;

    a = parseInt(operand1, 10);
    b = parseInt(operand2, 10);

    division = a/b;
    document.mycalculator.output.value = (a + " / " + b + " = " + division);
}
