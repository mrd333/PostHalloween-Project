var costumeArray = ['https://i.pinimg.com/originals/76/cd/53/76cd532d033968fb893bbb4ac74dcb4a.png', 'https://vignette.wikia.nocookie.net/fantendo/images/f/fa/Fire_Mario..png/revision/latest?cb=20110729183436','http://www.stickpng.com/assets/thumbs/58938c028370b70e212f3e30.png','https://vignette.wikia.nocookie.net/disney/images/5/56/Mr._Incredible_transparent.png/revision/latest?cb=20180628225641'];
var candyArray = ['https://cdn.shopify.com/s/files/1/0972/7116/products/nestle-crunch-bar.png?v=1459345244','https://cdn.influenster.com/media/product/image/standard-bar-gold-clean.png.750x750_q85ss0_progressive.png', 'http://pngimg.com/uploads/snickers/snickers_PNG13933.png', 'http://www.stickpng.com/assets/thumbs/58a7a3ab5ad0fd0b7fdd33de.png'];
$(".btn1").click(function(){
    var num=Math.floor(4* Math.random());
    console.log(num);
    $(".img1").attr("src", candyArray[num]);
    });
$(".btn2").click(function(){
    var num=Math.floor(4* Math.random());
    console.log(num);
    $(".img2").attr("src", costumeArray[num]);
    });

$("select.options").change(function(){
        var x = $(this).children("option:selected").val();
        if(x==="candyandcostume"){
         alert("That's Pretty Expensive");
    }else{
        alert("Oh, That's Not That Pricey");
        }
    
    });
