/*function doAmazingThings() {
  alert("adsasdf");
  var img = document.getElementById("fondo");
	img.src="img/negro.png";
}

document.addEventListener('DOMContentReady', function () {
document.getElementById('amazing')
  .addEventListener('click', doAmazingThings);

});*/


document.getElementById("btn_mujer").addEventListener("click", function(){
    document.getElementById("fondo").src = "img/rosa.png";;});
    

document.getElementById("btn_hombre").addEventListener("click", function(){
    document.getElementById("fondo").src = "img/negro.png";;});
    

document.getElementById("fondo").addEventListener("click", function(){
    
    src = "sound.wav";
    src = "sound/" + src; //go to sound folder always

   if (device.platform == 'Android') {
        src = '/android_asset/www/' + src;  // Android needs the search path explicitly specified
   }

    var mediaRes = new Media(src,
        function onSuccess() {
            mediaRes.release(); // release the media resource once finished playing
        },
        function onError(e){
            alert("error playing sound: " + JSON.stringify(e) + "\n src: " + src);
        });

        mediaRes.play({ numberOfLoops: 20 }); // the actual playing
    });
    
  
    

