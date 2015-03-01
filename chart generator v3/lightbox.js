
var  showLightBox= function ()
{
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
};


var hideLightBox = function()
{
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';

};


var drawWBTDemo = function ()
{
    
};


var generateWBTButton = document.getElementById("showWBTChart");
generateWBTButton.addEventListener("click", drawWBTDemo, false);

var closeLightBoxButton = document.getElementById("hideLightBox");
closeLightBoxButton.addEventListener("click", hideLightBox, false);


