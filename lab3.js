/////////////////////////Log In ////////////////////////////
// while(true){
// var username = window.prompt("Enter your UserName");
// var pass  = window.prompt("Enter your Password");


// if(username == "admin"){
//     if(pass=="421$$"){
//     window.alert("Welcome login success :)");}
//     else{
//         window.alert("You Entered wrong Password :(");
//     }
// }
// else{
//     window.alert("You Entered wrong UserName :(")
// }
// if(username == null) break;
// }


////////////////////////Calculations//////////////////////////


// var num1=Number(window.prompt("Enter first number : "));
// var operator=window.prompt("Enter the operation: ");
// var num2=Number(window.prompt("Enter secound number: "));
// var res;

// while(true){

// if(operator == "+" || operator == "sum" ){
//     var res = num1 + num2 ;
//     window.alert("The Result is : " + res);
// }
// else if(operator == "*" || operator =="multi"){
//     res = num1 * num2 ;
//     window.alert("The Result is : " + res);
// }
// else if(operator == "-" || operator =="subtract"){
//     res = num1 - num2 ;
//     window.alert("The Result is : " + res);
// }
// else if(operator == "/" || operator =="division"){
//     res = num1 / num2 ;
//     window.alert("The Result is : " + res);
// }
// else if(operator == "%" || operator =="moduls"){
//     res = num1 % num2 ;
//     window.alert("The Result is : " + res);
// }
// else{
//     window.alert("please enter an allowed operator");
// }
// num1=res;
// operator = window.prompt("Enter the operation: ");
// num2 = Number(window.prompt("Enter second number: "));

// if(operator==null) break;
// }

////////////////////Part2_Lap1/////////////////////
// var sum=0;
// var numCount =Number(window.prompt("How many numbers do you want to entered ? "));

// for (let i = 0; i < numCount; i++) {
//     num=Number(window.prompt(`Enter number ${i+1} : `));
//     sum+=num;
// }
// window.alert("The sum of the numbers is "+ sum);
// var avg=sum/numCount
// window.alert("The Average of the numbers is "+ avg);

///////////////////////////Lab2/////////////////////

var contact = [];
while(true){


var operation = window.prompt("Enter what you need to do \n Add or Search");


if(operation =="Add"){
   var conName= window.prompt("Enter the name you want to add");
   var number= window.prompt("Enter the number you want to add"); 

   contact.push(
    {
    contactName: conName,
    phoneNum:number,
   }
   )

    alert("This contact has been added ✓");
    
}
   if(operation =="Search"){
    var searchItem =window.prompt("Enter name or phone number you search for");
    
    var searchContact = contact.find(function(item){
    return item.contactName == searchItem || item.phoneNum == searchItem;
    })
   
    if (searchContact) {
        alert("Contact found: " + searchContact.contactName + ", " + searchContact.phoneNum);
      } else {
        alert("Contact not found.");
      }
    
    }

if(operation == null) break;
}

////////////////////////////////Bounes lab2////////////////////

var shape = prompt("Enter the name of the shape: ");

switch(shape){
    case "Circle":
        var r   =prompt("Enter the raduis of the circle : ");
        area= 3.14 * (r**2);
        break;

    case "Triangle":
        var b   = prompt("Enter the base of the Triangle : ");
        var h   = prompt("Enter the height of the Triangle : ");
        area= 0.5 * b *h;
        break;

    case "Square":
        var a   = prompt("Enter the length of side of Square : ");
        area= Math.pow(a ,2);
        break;

    case "Rectangle ":
        var l   = prompt("Enter the length of the Rectangle: ");
        var w   = prompt("Enter the width of the Rectangle: ");
        area= l * w;
        break;

    case "Parallelogram":
        var b   = prompt("Enter the base of the parallegram : ");
        var h   = prompt("Enter the vertical height of the paralleogram : ");
        area= b *h;
        break;

    case "Trapezium":
        var a   = prompt("Enter the a : ");
        var b   = prompt("Enter the b : ");
        var b   = prompt("Enter the height of the Trapezium : ");
        area=0.5*(a+b) * h ;
        break;

    case "Ellipse":
        var a   = prompt("Enter the minor axis of the Ellipse : ");
        var b   = prompt("Enter the major axis of the Ellipse : ");
        area= Math.PI * a *b;
        break;

}
alert(`The area of the ${shape} ` +area);