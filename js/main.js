var myText="String methods help you to work with strings.";
console.log(myText.length);
console.log(myText.indexOf("work"));
var number= myText.indexOf("work")+4;
console.log(number);

if(myText.length>50){
    console.log(myText.slice(0,50));
}else{
    console.log(myText);
}