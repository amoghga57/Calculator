let a,b="",symbol,v1,v2,sum,count;
function b1(c)
{
    if(count==1)
    {
        a=c
        b=b+""+a
        document.getElementById("box1").value=b
    }
    else
    {
        document.getElementById("box1").value=""
        b="";
        a=c
        b=b+""+a
        document.getElementById("box1").value=b
        count=1;
        document.getElementById("box1").style.boxShadow="none"
    }
    
}
function done()
{
    b=""+document.getElementById("box1").value
    count=0;
    submit()
}

function submit()
{
    for (let i = 0; i < b.length; i++) {
        if(b.charAt(i)=="+"||b.charAt(i)=="-"||b.charAt(i)=="*"||b.charAt(i)=="/")
        {
            symbol=i;
        }
    }
    calculate(symbol);
}
function calculate(i)
{
    if(b.charAt(i)=="+")
    {
        v1=Number(b.substring(0,i));
        v2=Number(b.substring(i+1));
        sum=v1+v2;
        b=String(sum);
        document.getElementById("box1").value=sum;

    }
    else if(b.charAt(i)=="-")
    {
        v1=Number(b.substring(0,i));
        v2=Number(b.substring(i+1));
        sum=v1-v2;
        b=String(sum);
        document.getElementById("box1").value=sum;
    }
    else if(b.charAt(i)=="*")
    {
        v1=Number(b.substring(0,i));
        v2=Number(b.substring(i+1));
        sum=v1*v2;
        b=String(sum);
        document.getElementById("box1").value=sum;
    }
    else if(b.charAt(i)=="/")
    {
        v1=Number(b.substring(0,i));
        v2=Number(b.substring(i+1));
        sum=v1/v2;
        b=String(sum);
        document.getElementById("box1").value=sum;
    }
    else
    {
        document.getElementById("box1").value="Error"
    }
    document.getElementById("box1").style.boxShadow="red 1px 1px 20px 5px"
}
function reboot()
{
    document.getElementById("box1").value="";
    b="";
    document.getElementById("box1").style.boxShadow="none"
}
function undo()
{
    b=b.slice(0,b.length-1)
    document.getElementById("box1").value=b
}