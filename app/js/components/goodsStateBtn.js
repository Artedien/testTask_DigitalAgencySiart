function goodsStateBtn(){

    const parrent = document.querySelector('.goods__swiper-box')

    parrent.addEventListener('click',(e)=>{
        let target = e.target
        if(target.classList.contains('goods__slide-btn')){
            target.classList.toggle('active')
        }
    })
}

export default goodsStateBtn