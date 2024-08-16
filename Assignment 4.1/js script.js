//making the function to go up
function up()
{
    var image = document.getElementById("carMeme");
    var position = image.offsetTop;
    var change = 100;
    position -= change;
    image.style.top = position + "px";
}

//making the function to go down
function down()
{
    var image = document.getElementById("carMeme");
    var position = image.offsetTop;
    var change = 10;
    position += change;
    image.style.top = position + "px";

}

//making the function to go left
function left()
{
    var image = document.getElementById("carMeme");
    var position = image.offsetLeft;
    var change = 100;
    position -= change;
    image.style.left = position + "px";

}

//making the function to go right
function right()
{
    var image = document.getElementById("carMeme");
    var position = image.offsetLeft;
    var change = 100;
    position += change;
    image.style.left = position + "px";

}