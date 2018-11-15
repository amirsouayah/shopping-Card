// $('.minus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value > 0) {
//         value = value - 1;
//     } else {
//         value = 0;
//     }

//     $input.val(value);

// });

// $('.plus-btn').on('click', function(e) {
//     e.preventDefault();
//     var $this = $(this);
//     var $input = $this.closest('div').find('input');
//     var value = parseInt($input.val());

//     if (value < 100) {
//       value = value + 1;
//     } else {
//         value =100;
//     }

//     $input.val(value);
// });

$('.like-btn').on('click', function() {
$(this).toggleClass('is-active');
});

 var valeur = 0;
 var valeur2 = 0;
 var valeur3 = 0;
// let moins = document.getElementById("moins");
// let plus = document.getElementById("plus");
// let compteur = document.getElementById("compteur"+i); 
// Fonction Number 1 

function moins(i)
{ 
    if(i==1)
    {let compteur = document.getElementById("compteur"+i); 
    valeur--;  compteur.innerHTML = valeur;
    console.log(valeur) }
else if(i==2)
{
    let compteur = document.getElementById("compteur"+i); 
    valeur2--;  compteur.innerHTML = valeur2;
    console.log(valeur2)
}
else 
{
    let compteur = document.getElementById("compteur"+i); 
    valeur3--;  compteur.innerHTML = valeur3;
    console.log(valeur3)} }
function plus(i)
{ 
    if(i==1)
    {let compteur = document.getElementById("compteur"+i); 
    valeur++;  compteur.innerHTML = valeur;
    console.log(valeur) }
else if(i==2)
{
    let compteur = document.getElementById("compteur"+i); 
    valeur2++;  compteur.innerHTML = valeur2;
    console.log(valeur2)
}
else 
{
    let compteur = document.getElementById("compteur"+i); 
    valeur3++;  compteur.innerHTML = valeur3;
    console.log(valeur3)} }
var releaseEvents
var c = 0 
let t=0

function multiply(i) {
    
    let Array=[]
    let b = document.getElementById('price'+i).textContent;
    let a = document.getElementById('compteur'+i).textContent;
        c =  a * b  ;
        console.log(c);
    document.getElementById('TOTAL'+i).innerHTML = c;
    // Array.push(Number(document.getElementById('TOTAL'+i).textContent))
    // console.log(Array)
    // t= Array.reduce((el,value)=>
    // {
    //     el+value
    // })
    if (c!=0){
    let x=Number(document.getElementById('price'+i).textContent)
    t = t + x
    document.getElementById('TOTAL5').innerHTML = t ;}
    else {
        let x=Number(document.getElementById('price'+i).textContent)
    t = t - x
    document.getElementById('TOTAL5').innerHTML = t ;
    }
    console.log(t)
}

function remove(i){  
    let a = document.getElementById("item"+i)
    a.remove();
    } 

  
    
    function show_more() {
            var x = document.getElementById("show");
            x.style.display="block";
        }

     
    
    // var t = t + Number(document.getElementById('TOTAL'+i).innerHTML) 
    // console.log(t)
    // document.getElementById('TOTAL5').innerHTML = t;

//   Fonction 2
// var valeur2 = 0;
// let moinsp2 = document.getElementById("moins2");
// let plusp2 = document.getElementById("plus2");
// let compteur2 = document.getElementById("compteur2"); 

//   function moinspr2()
// { valeur2--; compteur2.innerHTML = valeur2;
//     console.log(valeur2)
// }
// function plus2()
// { valeur2++;  compteur2.innerHTML = valeur2; 
//     console.log(valeur2) }

// function multiply2() {

//     let d = document.getElementById('price2').textContent;
//     let e = document.getElementById('compteur2').textContent;
//    let f =  d * e  ;
//     document.getElementById('TOTAL2').innerHTML = f;
//   }

// //   Fonction 3
// var valeur3 = 0;
// let moinsp3 = document.getElementById("moins3");
// let plusp3 = document.getElementById("plus3");
// let compteur3 = document.getElementById("compteur3"); 

//   function moinspr3()
// { valeur3--; compteur3.innerHTML = valeur3;
//     console.log(valeur3)
// }
// function plus3()
// { valeur3++;  compteur3.innerHTML = valeur3; 
//     console.log(valeur3) }

// function multiply3() {

//     let g = document.getElementById('price3').textContent;
//     let h = document.getElementById('compteur3').textContent;
//    let i =  g * h  ;
//     document.getElementById('TOTAL3').innerHTML = i;
//   }  
  
/*let price = Number(document.getElementById('TOTAL3').innerHTML) +Number(document.getElementById('TOTAL2').innerHTML)+Number(document.getElementById('TOTAL1').innerHTML)
document.getElementById('TOTAL').textContent = price */