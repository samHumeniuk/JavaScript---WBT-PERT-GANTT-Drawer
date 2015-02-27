//initialisation and global variables:
var wbtChart = document.getElementById("chart");
var ctx = wbtChart.getContext("2d");
var WBTHeight = 50;
var WBTWidth = 100;

var drawWBTDemo = function ()
{
    showLightBox();
    ctx.fillStyle = "PaleGoldenRod";
    ctx.fillRect(0,0,5000,5000);
    
    drawIndividualWBTbox(500 - WBTWidth/2 ,100, "The Project");
    drawChildrenArrow( 500, 100 + WBTHeight, 600, 6);
    drawIndividualWBTbox(200 - WBTWidth/2 ,100 + 40 + WBTHeight, "Initialisation");
    drawIndividualWBTbox(200 + 600*1/5 - WBTWidth/2 ,100 + 40 + WBTHeight, "Design");
    drawIndividualWBTbox(200 + 600*2/5 - WBTWidth/2 ,100 + 40 + WBTHeight, "Coding");
    drawIndividualWBTbox(200 + 600*3/5 - WBTWidth/2 ,100 + 40 + WBTHeight, "Debugging");
    drawIndividualWBTbox(200 + 600*4/5 - WBTWidth/2 ,100 + 40 + WBTHeight, "Testing");
    drawIndividualWBTbox(200 + 600*5/5 - WBTWidth/2 ,100 + 40 + WBTHeight, "Maintenance");
    
};

var drawIndividualWBTbox = function(xCoordinate, yCoordinate, taskName)
{
    //var pertChart = document.getElementById("pertChart");
    //var ctx = pertChart.getContext("2d");
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    //Whole of the box
    ctx.fillRect(xCoordinate, yCoordinate, WBTWidth, WBTHeight);
    ctx.strokeRect(xCoordinate, yCoordinate, WBTWidth, WBTHeight);
    
    
    //define text style
    var xMargin = 2;
    ctx.fillStyle = "black";
    ctx.font = "12px Arial";

    //middle row text:
    ctx.font = "16px Arial";
    ctx.fillText(taskName, xMargin + xCoordinate, yCoordinate + WBTHeight/2);
};

var drawChildrenArrow = function(topXCoordinate, topYCoordinate, width, numberOfChildren)
{
    var heightFromParent = 20;
    //beginning of root from parent:
    ctx.beginPath();
    ctx.moveTo(topXCoordinate, topYCoordinate);
    ctx.lineTo(topXCoordinate, topYCoordinate + heightFromParent);
    ctx.stroke();
    //draw horizontal line directly undernearth:
    ctx.beginPath();
    ctx.moveTo(topXCoordinate - width/2, topYCoordinate + heightFromParent);
    ctx.lineTo(topXCoordinate + width/2, topYCoordinate + heightFromParent);
    ctx.stroke();
    //draw children:
    var spacingBetweenChildren = width/(numberOfChildren-1);
    for (child = 0; child < numberOfChildren; child++) 
    { 
        ctx.beginPath();
        ctx.moveTo(topXCoordinate - width/2 + spacingBetweenChildren * child, topYCoordinate + heightFromParent);
        ctx.lineTo(topXCoordinate - width/2 + spacingBetweenChildren * child, topYCoordinate + 2*heightFromParent );
        ctx.stroke();
    }
    
};

var generateWBTButton = document.getElementById("showWBTChart");
generateWBTButton.addEventListener("click", drawWBTDemo, false);




