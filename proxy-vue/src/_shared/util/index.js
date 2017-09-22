module.exports.adjustHeader = (id, scale = 1) => {
    let wh = document.body.clientHeight;
    // console.log(wh);
    let element = document.getElementById(id);
    element.style.height = Math.floor(wh / scale) + 'px';
    console.log("resized")
}