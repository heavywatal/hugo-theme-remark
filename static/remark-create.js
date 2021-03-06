let slideshow = remark.create({
  ratio: '4:3',
  navigation: {
    scroll: false,
    touch: true,
    click: false
  },
  slideNumberFormat: function (current, total) {
    // hide in title slide; start from 1
    if (1 < current && current < total) {
      return (current - 1) + '/' + (total - 1);
    } else {
      return '';
    };
  },
  countIncrementalSlides: false,
  highlightLanguage: "no-highlight"
});
{
  reload_visible_img = function() {
    let imgs = document.querySelectorAll(".remark-slide-container img");
    for(let i = 0; i < imgs.length; ++i){
      let src = imgs[i].src;
      imgs[i].src += "?q";
      imgs[i].src = src;
    }
  }

  let images = document.querySelectorAll("img");
  for(let i = 0; i < images.length; ++i){
    images[i].onclick = reload_visible_img;
  }

  slideshow.on('hideSlide', function(slide) {
    reload_visible_img();
  });
}
