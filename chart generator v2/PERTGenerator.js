//initialisation and global variables:
var pertChart = document.getElementById("chart");
var ctx = pertChart.getContext("2d");
var PERTHeight = 100;
var PERTWidth = 150;

//beginning arrow functions, adapted from: "http://deepliquid.com/blog/archives/98"
var drawArrow = function(firstXCoordinate, firstYCoordinate, lastXCoordinate, lastYCoordinate)
{
            
    ctx.beginPath();
    ctx.moveTo(firstXCoordinate, firstYCoordinate);
    ctx.lineTo(lastXCoordinate, lastYCoordinate);
    ctx.stroke();
    
    var ang = Math.atan2(lastYCoordinate-firstYCoordinate,lastXCoordinate-firstXCoordinate);
    drawFilledPolygon(translateShape(rotateShape(arrow,ang),lastXCoordinate,lastYCoordinate));
};
function drawFilledPolygon(shape) {
    ctx.beginPath();
    ctx.moveTo(shape[0][0],shape[0][1]);

    for(p in shape)
        if (p > 0) ctx.lineTo(shape[p][0],shape[p][1]);

    ctx.lineTo(shape[0][0],shape[0][1]);
    ctx.fill();
};
function translateShape(shape,x,y) {
    var rv = [];
    for(p in shape)
        rv.push([ shape[p][0] + x, shape[p][1] + y ]);
    return rv;
};
function rotateShape(shape,ang) {
    var rv = [];
    for(p in shape)
        rv.push(rotatePoint(ang,shape[p][0],shape[p][1]));
    return rv;
};
function rotatePoint(ang,x,y) {
    return [
        (x * Math.cos(ang)) - (y * Math.sin(ang)),
        (x * Math.sin(ang)) + (y * Math.cos(ang))
    ];
};
var arrow = [
    [ 2, 0 ],
    [ -10, -4 ],
    [ -10, 4]
];
//end arrow functions, adapted from: "http://deepliquid.com/blog/archives/98"


var drawPERTDemo = function()
{
    showLightBox();
 
    ctx.fillStyle = "PaleGoldenRod";
    ctx.fillRect(0,0,5000,5000);
    drawIndividualPERTbox(100,100, "Create First Design", "0 days", "2 days", "10 days", "2 days", "12 days", "10 days");
    drawIndividualPERTbox(400,100, "Coding", "0 days", "2 days", "10 days", "2 days", "12 days", "10 days");
    drawIndividualPERTbox(700,100, "Testing", "0 days", "2 days", "10 days", "2 days", "12 days", "10 days");
    drawArrow(100 + PERTWidth, 100 + PERTHeight/2, 400, 100 + PERTHeight/2);

};

var drawIndividualPERTbox = function( xCoordinate, yCoordinate, taskName, earlyStart, duration, earlyFinish, lateStart, lateFinish, slack )
{
    
    //var pertChart = document.getElementById("pertChart");
    //var ctx = pertChart.getContext("2d");
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    //Whole of the box
    ctx.fillRect(xCoordinate, yCoordinate, PERTWidth, PERTHeight);
    ctx.strokeRect(xCoordinate, yCoordinate, PERTWidth, PERTHeight);
    //top-Left corner of the box
    ctx.strokeRect(xCoordinate, yCoordinate, PERTWidth / 3, PERTHeight/3);
    //top-center of the box
    ctx.strokeRect(xCoordinate + PERTWidth / 3 , yCoordinate, PERTWidth / 3, PERTHeight/3);
    //top-right corner of the box
    ctx.strokeRect(xCoordinate + (PERTWidth * 2) / 3 , yCoordinate, PERTWidth / 3, PERTHeight/3);
    //bottom-Left corner of the box
    ctx.strokeRect(xCoordinate, yCoordinate + (PERTHeight * 2) /3, PERTWidth / 3, PERTHeight/3);
    //top-center of the box
    ctx.strokeRect(xCoordinate + PERTWidth / 3 , yCoordinate + (PERTHeight * 2) /3, PERTWidth / 3, PERTHeight/3);
    //top-right corner of the box
    ctx.strokeRect(xCoordinate + (PERTWidth * 2) / 3 , yCoordinate + (PERTHeight * 2) /3, PERTWidth / 3, PERTHeight/3);
    
    //define text style
    var xMargin = 2;
    ctx.fillStyle = "black";
    ctx.font = "12px Arial";
    //top row text:
    ctx.fillText(earlyStart,xMargin + xCoordinate, yCoordinate + PERTHeight/6);
    ctx.fillText(duration, xMargin + xCoordinate + PERTWidth/3, yCoordinate + PERTHeight/6);
    ctx.fillText(earlyFinish,xMargin + xCoordinate + PERTWidth*2/3, yCoordinate + PERTHeight/6);
    //bottom row text:
    ctx.fillText(lateStart, xMargin + xCoordinate, yCoordinate + PERTHeight*5/6);
    ctx.fillText(slack, xMargin + xCoordinate + PERTWidth/3, yCoordinate + PERTHeight*5/6);
    ctx.fillText(lateFinish, xMargin + xCoordinate + PERTWidth*2/3, yCoordinate + PERTHeight*5/6);
    //middle row text:
    ctx.font = "16px Arial";
    ctx.fillText(taskName, xMargin + xCoordinate, yCoordinate + PERTHeight/2);
};

var generatePERTButton = document.getElementById("showPERTChart");
generatePERTButton.addEventListener("click", drawPERTDemo, false);




