//JQUERY USED
$(document).ready(function () {
    $("#cakes").click(function () {
        $('.cakes').show();
        $('.cupcakes, .doughnuts').hide();
    });
    $("#cupcakes").click(function () {
        $('.cupcakes').show();
        $('.cakes, .doughnuts').hide();
    });
    $("#doughnuts").click(function () {
        $('.doughnuts').show();
        $('.cupcakes, .cakes').hide();
    });
    $("#all").click(function () {
        $('.cakes, .cupcakes , .doughnuts').show();
    });
});


// VANILLA JAVASCRIPT 

function myFunction() {
    var input, value;
    input = document.querySelector('.search');
    filter = input.value.toUpperCase();
    value = document.querySelectorAll('.col-settings');
    for(var i=0; i<value.length; i++){
        a=value[i].querySelectorAll('.card-text')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            value[i].style.display = "";
          } else {
            value[i].style.display = "none";
          }
        }
      }

// }
// function myCakes(){
//     var value = document.querySelectorAll('.cupcakes, .doughnuts');
//     value.forEach(element=>{
//         if (element.style.display === "none") {
//             element.style.display = "block";
//           } else {
//             element.style.display = "none";
//           }

//     })

// }

// function myDoughnuts(){
//     var value = document.querySelectorAll('.cakes, .cupcakes');
//     value.forEach(element=>{
//         if (element.style.display === "none") {
//             element.style.display = "block";
//           } else {
//             element.style.display = "none";
//           }

//     })

// }
// function myCupCakes(){
//     var value = document.querySelectorAll('.cakes , .doughnuts ');
//     value.forEach(element=>{
//         if (element.style.display === "none") {
//             element.style.display = "block";
//           } else {
//             element.style.display = "none";
//           }

//     })

// }
// function myAll(){
//     var value = document.querySelectorAll('.cakes , .doughnuts , .cupcakes ');
//     value.forEach(element=>{
//         if (element.style.display === "none") {
//             element.style.display = "block";
//           }
//     })
// }

