//initialisation and global variables:
var ganttChart = document.getElementById("chart");
var ctx = ganttChart.getContext("2d");
var GANTTTextWidth = 100;

var drawGANTTDemo = function ()
{
    showLightBox();
 
    ctx.fillStyle = "PaleGoldenRod";
    ctx.fillRect(0,0,5000,5000);
    
    drawGrid(50,50,1000,500, 50, 50);
    drawIndividualGANTTbox("Design", 50, 50,300, 50);
    drawIndividualGANTTbox("Coding", 350, 100, 100, 50);
    drawIndividualGANTTbox("Testing", 450, 150, 200, 50);
    
    var startDate = new Date("October 13, 2015 00:00:00");
    var endDate = new Date("December 13, 2015 00:00:00");
    drawDates(startDate, 50, 5, endDate);
    
    
};

var drawGrid = function (xStart, yStart, xFinish, yFinish, xFrequency, yFrequency )
{
    ctx.strokeStyle = "grey";
    for (currentX = xStart; currentX <= xFinish; currentX = currentX + xFrequency ) 
    { 
        ctx.beginPath();
        ctx.moveTo(GANTTTextWidth + currentX, yStart);
        ctx.lineTo(GANTTTextWidth + currentX, yFinish );
        ctx.stroke();
    }
    for (currentY = yStart; currentY <= yFinish; currentY = currentY + yFrequency ) 
    { 
        ctx.beginPath();
        ctx.moveTo(GANTTTextWidth + xStart, currentY);
        ctx.lineTo(GANTTTextWidth + xFinish, currentY );
        ctx.stroke();
    }
};

var drawIndividualGANTTbox = function(taskName, xStart, yStart, xLength, yLength)
{
    var gap = 1;
    ctx.fillStyle = "maroon";
    ctx.strokeStyle = "black";
    ctx.fillRect(GANTTTextWidth + xStart+gap, yStart+gap, xLength -gap *2, yLength -gap *2);
    var xMargin = 5;
    ctx.fillStyle = "black";
    ctx.font = "12px Arial";
    ctx.fillText(taskName,xMargin, yStart + yLength/2);

};

var drawDates = function(startDate, frequency, increaseInDays, endDate)
{
    var currentX = 5;
    for (currentDay = startDate; currentDay <= endDate; currentDay.setDate(currentDay.getDate() + increaseInDays) )
    { 
        var currentX = currentX + frequency;
        var yMargin = 30;
        ctx.fillStyle = "black";
        ctx.font = "12px Arial";
        //var currentDateFormatted = currentDay.getDate() + " " + currentDay.getMonth();
        var currentDateFormatted = currentDay.toDateString();
        var day = currentDateFormatted.substring(8, 10);
        var month = currentDateFormatted.substring(4, 7);
        currentDateFormatted = day + "-" + month;
        ctx.fillText(currentDateFormatted,currentX + GANTTTextWidth - frequency/2 , yMargin );
    }
};

var generateGANTTButton = document.getElementById("showGANTTChart");
generateGANTTButton.addEventListener("click", drawGANTTDemo, false);




