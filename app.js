let sliderIndex = 0;
const slider_imgs = document.querySelector ('.slider_imgs');
document.querySelector('.slider_btns').addEventListener ('click', handleSliderBtnClick);

window.addEventListener ('resize', renderSlider);

function handleSliderBtnClick (e)
{
    if (e.target.closest ('.slider_btn--prev'))
        sliderPrev ();
    else if (e.target.closest ('.slider_btn--next'))
        sliderNext ();
}

function sliderPrev ()
{
    sliderIndex--;
    if (sliderIndex < 0)
    sliderIndex = 4;

    renderSlider ();
}

function sliderNext ()
{
    sliderIndex++;
    if (sliderIndex > 4)
    sliderIndex = 0;

    renderSlider ();
}


function renderSlider () 
{
    let imgWidth = (window.innerWidth * 0.72);
    if (imgWidth > 540)
        imgWidth = 540;

    let diff = window.innerWidth - imgWidth;
    const current = (sliderIndex * imgWidth) + (sliderIndex * 16);
    slider_imgs.style.left = `calc(${diff/2}px - ${current}px)`;
 
    //slider_imgs.style.left = `calc(13.8% - ${(sliderIndex * imgWidth) + (16 * sliderIndex)}px)`;
}
