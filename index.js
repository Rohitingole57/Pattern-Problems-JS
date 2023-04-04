//*
//* *
//* * *
//* * * *
//* * * * *


/*for (var i=1; i<= 5; i++) {
    var bag = "";
    for (var j = 1; j<= i; j++) {

        bag = bag + "* " ;

    }
    console.log(bag);
}*/


// *****
// ****
// ***
// **
// *


/*for( var i=1; i<=5; i++){
   var bag="";

   for(var j=i; j<=5; j++){
    bag = bag +"* ";
   }
console.log(bag);

}*/

// calender months and days !!!
// 1st month 1st date adn so on

/*for( var months=1; months<=12; months++){
    var days_value=31;
    if(months==2){
        days_value=28;
    }
    if(months==4 || months==6 || months==9 || months==11){
        days_value = 30;
    }
    for( var days=1; days<=days_value; days++){
        console.log(months,"Month and ",days,"day")
    }

    console.log("---month completed---\n")
}
console.log("---year completed----\n\t")
*/

//Find the prime numbers

/*for(var number=2; number<=100; number++){
    var factor=0;
    for(i=1; i<=number; i++){
        if(number%i==0){
            factor++;
        }
    }
    if(factor==2){
        console.log(number,"is Prime Number")
    }else {
        console.log(number,"is not prime")
    }

}*/


// I want to write a box pattern like.

// ******
// *    *
// *    *
// *    *
// *    *
// ******

for(var i=1; i<=6; i++)
{
    var bag="";
    for(var j=1; j<=6; j++)
    {
        if(i==1 || i==6)
        {
            bag = bag + "*";
        }
        else
        {
            if(j==1 || j==6)
            {
                bag = bag+"*";
            }else
            {
               bag = bag + " ";
            }
        }
    }
    console.log(bag);
}

//*
//* *
//* * *
//* * * *
//* * * * *


for (var i=1; i<= 5; i++) {
    var bag = "";
    for (var j = 1; j<= i; j++) {

        bag = bag + "* " ;

    }
    console.log(bag);
}


// *****
// ****
// ***
// **
// *


for( var i=1; i<=5; i++){
   var bag="";

   for(var j=i; j<=5; j++){
    bag = bag +"* ";
   }
console.log(bag);

}