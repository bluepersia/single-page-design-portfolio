let sliderIndex = 0;
const slider_imgs = document.querySelector ('.slider_imgs');
document.querySelector('.slider_btns').addEventListener ('click', handleSliderBtnClick);


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
    slider_imgs.style.left = `calc(13.8% - ${(sliderIndex * 270) + (16 * sliderIndex)}px)`;
}
