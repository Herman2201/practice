document.addEventListener('DOMContentLoaded', () => {
  const buttonPrev = document.getElementById('prev');
  const buttonNext = document.getElementById('next');
  const sliderPrev = document.getElementById('slider__prev');
  const sliderNext = document.getElementById('slider__next');

  buttonPrev.setAttribute('disabled', true);
  let slicer__count1 = 0;
  buttonNext.addEventListener('click', () => {
    slicer__count1 -= 348;
    if (slicer__count1 === -1392) {
      buttonNext.setAttribute('disabled', true);
    }
    buttonPrev.removeAttribute('disabled');
    const items = $('.wrapper__popular__item').children();
    items.map((index, item) => {
      $(item).css('transform', `translate(${slicer__count1}px, 0)`);
    });
  });
  buttonPrev.addEventListener('click', () => {
    slicer__count1 += 348;
    if (slicer__count1 === 0) {
      buttonPrev.setAttribute('disabled', true);
    }
    buttonNext.removeAttribute('disabled');
    const items = $('.wrapper__popular__item').children();
    items.map((index, item) => {
      $(item).css('transform', `translate(${slicer__count1}px, 0)`);
    });
  });

  let slider__count2 = 0;
  sliderPrev.setAttribute('disabled', true);
  sliderPrev.addEventListener('click', () => {
    slider__count2 += 172;
    if (slider__count2 === 0) {
      sliderPrev.setAttribute('disabled', true);
    }
    sliderNext.removeAttribute('disabled');
    const items = $('.container__slider').children();
    items.map((index, item) => {
      $(item).css('transform', `translate(${slider__count2}px, 0)`);
    });
  });
  sliderNext.addEventListener('click', (e) => {
    slider__count2 -= 172;
    if (slider__count2 === -516) {
      sliderNext.setAttribute('disabled', true);
    }
    sliderPrev.removeAttribute('disabled');
    const items = $('.container__slider').children();
    items.map((index, item) => {
      $(item).css('transform', `translate(${slider__count2}px, 0)`);
    });
  });
  $('.container__slider').on('click', (e) => {
    const background = e.target.src;
    console.log($('#slide').attr('src', background));
  });

  $('.btn__description').on('click', () => {
    $('.wrapper__text__content1').toggle();
    $('.wrapper__text__content2').toggle();
    $('.btn__description').attr('disabled', 'true');
    $('.btn__description').addClass('disabled');
    $('.btn__characteristic').removeClass('disabled');
    $('.btn__characteristic').removeAttr('disabled');
  });
  $('.btn__characteristic').on('click', () => {
    $('.wrapper__text__content2').toggle();
    $('.wrapper__text__content1').toggle();
    $('.btn__characteristic').attr('disabled', 'true');
    $('.btn__characteristic').addClass('disabled');
    $('.btn__description').removeClass('disabled');
    $('.btn__description').removeAttr('disabled');
  });
});
