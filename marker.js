let marker={
    color:"Black",
    size:1.55,
    type:"w",
    volume:50,
    charge:function(){
        this.volume++;
    }

}
function charge(vol){
    vol=Number(vol);
    marker.volume=marker.volume+vol; 
    let vp=document.getElementById("vol");
    vp.innerText=marker.volume;
}