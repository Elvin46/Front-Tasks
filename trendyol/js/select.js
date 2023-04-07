$('.select-field').click(function(){
    this.parentNode.querySelector('.list').classList.toggle('show');
    document.querySelector('.down-arrow').classList.toggle('rotate180');
  
  });