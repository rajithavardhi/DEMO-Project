const productContainers=[...document.querySelectorAll('.product-container')];
const nxtBtn=[doucmnet.querySelectorAll('.nxt-btn')];
const preBtn=[doucmnet.querySelectorAll('.pre-btn')];

productContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containetWidth=containerDimensions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft+=containetWidth
    })
    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft+=containetWidth
    })
})
