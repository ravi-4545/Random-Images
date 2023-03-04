const images=[
    {image: `images/i1.jpg`},
    {image: `images/i3.jpg`},
    {image: `images/i4.jpg`},
    {image: `images/i5.jpg`},
    {image: `images/i6.jpg`},
    {image: `images/i7.jpg`},
    {image: `images/i8.jpg`},
    {image: `images/i9.jpg`},
    {image: `images/i10.jpg`},
    {image: `images/i11.jpg`},
    {image: `images/i12.jpg`},
    {image: `images/i13.jpg`},
    {image: `images/i14.jpg`},
    {image: `images/i15.jpg`}

]


const img=document.querySelector('#img')
const btn1=document.querySelector('#btn1')
const btn2=document.querySelector('#btn2')


const randomi=()=>{
    let index= Math.floor(Math.random()*(images.length))
    img.src=images[index].image
}


btn1.addEventListener('click',randomi)
btn2.addEventListener('click',randomi)
