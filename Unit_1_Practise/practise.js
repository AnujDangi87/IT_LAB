var a="hello";

document.write(a);

i = 0;
while(i<10)
{
    document.write(i);
    i++;
}
if(confirm("Press a button!"))
{
    txt="you pressed ok.";
}
else
{
    txt="you pressed cancel";
}
alert(txt);
alert(prompt("Hello, Please enter something."));
alert("By using this website you are giving consent to use cookies to steal your data.");
document.write("<br>From here onward we will learn about arrays.<br><hr>");
var arr = new Array(3);

for(var i=0;i<3;i++)
{
    arr[i] = new Array(3);
}
arr[0][0] = 86879;
alert(arr[0][0]);