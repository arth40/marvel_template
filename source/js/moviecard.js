var tout = setTimeout(moviecard,0);
function moviecard()
{
    var x = document.getElementsByClassName("recommended")[0].getElementsByClassName("moviecard");
    var y = document.getElementsByClassName("latest")[0].getElementsByClassName("moviecard");
    var z = document.getElementsByClassName("trending")[0].getElementsByClassName("moviecard");
    var i;
    for(i=0;i<x.length;i++)
    {
        x[i].style.backgroundImage = "url('source/images/recommended/"+(i+1).toString()+".png')";
        x[i].style.left = (i*14.5+2).toString()+'vw';
        x[i].style.top = (0).toString()+'vw';
    }
    for(i=0;i<y.length;i++)
    {
        y[i].style.backgroundImage = "url('source/images/latest/"+(i+1).toString()+".png')";
        y[i].style.left = (i*14.5+2).toString()+'vw';
        y[i].style.top = (0).toString()+'vw';
    }
    for(i=0;i<z.length;i++)
    {
        z[i].style.backgroundImage = "url('source/images/trending/"+(i+1).toString()+".png')";
        z[i].style.left = (i*14.5+2).toString()+'vw';
        z[i].style.top = (0).toString()+'vw';
    }
}

function mouseovercard(x)
{
    if(parseInt(x.style.left)<85 && parseInt(x.style.left)>1)
    {
        //alert(parseInt(x.style.left));
        x.style.left = (parseFloat(x.style.left)-1.4).toString() + 'vw';
        x.style.top = (parseFloat(x.style.top)-1.9).toString() + 'vw';
        x.style.zIndex = "3";
        x.style.border = "0.1vw solid white";
        //alert(parseInt(x.style.left));
        x.style.width = "15.8vw"; 
        x.style.height = "22.8vw";
    }
}

function mouseoutcard(x)
{   
    if(parseInt(x.style.top)!=0)
    {
        x.style.left = (parseFloat(x.style.left)+1.4).toString() + 'vw';
        x.style.top = (parseFloat(x.style.top)+1.9).toString() + 'vw';
        x.style.zIndex = "2";
        x.style.border = "0 solid white";
        x.style.width = "13vw";
        x.style.height = "19vw";
    }
}

function cardslidere()
{
    var x = document.getElementsByClassName("recommended")[0].getElementsByClassName("moviecard");
    //alert(parseInt(x[0].style.left));
    if(parseInt(x[0].style.left)==2)
    {
        document.getElementsByClassName("recommended")[0].getElementsByClassName("cardbuttonle")[0].style.zIndex="4";
    }
    var i;
    if(parseInt(x[x.length-1].style.left)>85)
    {
        if(parseInt(x[x.length-1].style.left)==89)
        {
            document.getElementsByClassName("recommended")[0].getElementsByClassName("cardbutton")[0].style.zIndex="1";
        }
        for(i=0;i<x.length;i++)
        {
            var p = (parseFloat(x[i].style.left)-14.5).toString() + 'vw'; 
            x[i].style.left = p;
        }
    }
}

function cardslidela()
{
    var y = document.getElementsByClassName("latest")[0].getElementsByClassName("moviecard");
    if(parseInt(y[0].style.left)==2)
    {
        document.getElementsByClassName("latest")[0].getElementsByClassName("cardbuttonle")[0].style.zIndex="4";
    }
    var i;
    if(parseInt(y[y.length-1].style.left)>85)
    {
        if(parseInt(y[y.length-1].style.left)==89)
        {
            document.getElementsByClassName("latest")[0].getElementsByClassName("cardbutton")[0].style.zIndex="1";
        }
        for(i=0;i<y.length;i++)
        {
            var q = (parseFloat(y[i].style.left)-14.5).toString() + 'vw'; 
            y[i].style.left = q;
        }
    }
}

function cardslidete()
{
    var z = document.getElementsByClassName("trending")[0].getElementsByClassName("moviecard");
    if(parseInt(z[0].style.left)==2)
    {
        document.getElementsByClassName("trending")[0].getElementsByClassName("cardbuttonle")[0].style.zIndex="4";
    }
    var i;
    if(parseInt(z[z.length-1].style.left)>85)
    {
        if(parseInt(z[z.length-1].style.left)==89)
        {
            document.getElementsByClassName("trending")[0].getElementsByClassName("cardbutton")[0].style.zIndex="1";
        }
        for(i=0;i<z.length;i++)
        {
            var r = (parseFloat(z[i].style.left)-14.5).toString() + 'vw'; 
            z[i].style.left = r;
        }
    }
}

function cardsliderel()
{
    var x = document.getElementsByClassName("recommended")[0].getElementsByClassName("moviecard");
    if(parseFloat(x[0].style.left)==-12.5)
    {
        document.getElementsByClassName("recommended")[0].getElementsByClassName("cardbuttonle")[0].style.zIndex="1";
    }
    var i;
    if(parseInt(x[0].style.left)<0)
    {
        if(parseFloat(x[x.length-1].style.left)==74.5)
        {
            document.getElementsByClassName("recommended")[0].getElementsByClassName("cardbutton")[0].style.zIndex="4";
        }
        for(i=0;i<x.length;i++)
        {
            var r = (parseFloat(x[i].style.left)+14.5).toString() + 'vw'; 
            x[i].style.left = r;
        }
    }
}

function cardslidelal()
{
    var y = document.getElementsByClassName("latest")[0].getElementsByClassName("moviecard");
    if(parseFloat(y[0].style.left)==-12.5)
    {
        document.getElementsByClassName("latest")[0].getElementsByClassName("cardbuttonle")[0].style.zIndex="1";
    }
    var i;
    if(parseInt(y[0].style.left)<0)
    {
        if(parseFloat(y[y.length-1].style.left)==74.5)
        {
            document.getElementsByClassName("latest")[0].getElementsByClassName("cardbutton")[0].style.zIndex="4";
        }
        for(i=0;i<y.length;i++)
        {
            var r = (parseFloat(y[i].style.left)+14.5).toString() + 'vw'; 
            y[i].style.left = r;
        }
    }
}

function cardslidetel()
{
    var z = document.getElementsByClassName("trending")[0].getElementsByClassName("moviecard");
    if(parseFloat(z[0].style.left)==-12.5)
    {
        document.getElementsByClassName("trending")[0].getElementsByClassName("cardbuttonle")[0].style.zIndex="1";
    }
    var i;
    if(parseInt(z[0].style.left)<0)
    {
        if(parseFloat(z[z.length-1].style.left)==74.5)
        {
            document.getElementsByClassName("trending")[0].getElementsByClassName("cardbutton")[0].style.zIndex="4";
        }
        for(i=0;i<z.length;i++)
        {
            var r = (parseFloat(z[i].style.left)+14.5).toString() + 'vw'; 
            z[i].style.left = r;
        }
    }
}
