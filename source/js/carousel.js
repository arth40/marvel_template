var interval = setInterval(caroslide,3500);
var abc = setTimeout(neww,0);

function neww()
{
    var x = document.getElementsByClassName("caroslide");
    var i,j=1;
    for(i=0;i<x.length-2;i++)
    {
        var y = "url('source/images/carousel/"+(i+1).toString()+".png')";
        x[i].style.backgroundImage = y;
        x[i].style.left = (i*100).toString()+'vw';        
    }
    for(i=x.length-1;i>x.length-3;i--)
    {
        y = "url('source/images/carousel/"+(i+1).toString()+".png')";
        x[i].style.backgroundImage = y;
        x[i].style.left = (j*(-100)).toString()+'vw';
        j= j+1;
    }
}
var slide = 0;
function caroslide()
{
    var z =0 ;
    slide = slide +1 ;
    var x = document.getElementsByClassName("caroslide");
    slide = slide%(x.length);
    //alert(slide);
    for(i=0;i<x.length;i++)
    {
        z = (parseInt(x[i].style.left)-100).toString() + 'vw';
        x[i].style.left = z;
        x[i].style.transition = "left 0.5s";
    }
    z = (parseInt(x[(slide-4+x.length)%(x.length)].style.left)+100).toString() + 'vw';
    x[(slide-3+x.length)%(x.length)].style.transition = "left 0s";
    x[(slide-3+x.length)%(x.length)].style.left = z;
}

function caroslideopp()
{
    var z =0 ;
    slide = slide - 1 ;
    var x = document.getElementsByClassName("caroslide");
    slide = (slide+x.length)%(x.length);
    //alert(slide);
    for(i=0;i<x.length;i++)
    {
        z = (parseInt(x[i].style.left)+100).toString() + 'vw';
        x[i].style.left = z;
        x[i].style.transition = "left 0.5s";
    }
    z = (parseInt(x[(slide-1+x.length)%(x.length)].style.left)-100).toString() + 'vw';
    x[(slide-2+x.length)%(x.length)].style.transition = "left 0s";
    x[(slide-2+x.length)%(x.length)].style.left = z;
    /*clearInterval(interval);
    setTimeout(() => {
        interval = setInterval(caroslide,3000);
    }, 3000);*/
}

function caroslidere()
{
    caroslide();
    /*clearInterval(interval);
    setTimeout(() => {
        setInterval(caroslide,3000);
    }, 3000);*/
}
