const images=[
    "./img/picture1.png",
    "./img/picture2.png",
    "./img/picture3.png",
    "./img/picture4.png",
    "./img/picture5.png",
    "./img/picture6.png",
    "./img/picture7.png"
]
let imageIndex=0
const imageSlider=document.getElementById('image-slider')
setInterval(() =>{
    if(imageIndex >= images.length){
        imageIndex=0
    }
    const imgUrl = images[imageIndex]
    imageSlider.setAttribute('src',imgUrl)
   imageIndex++
},2000)