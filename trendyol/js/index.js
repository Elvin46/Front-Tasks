

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  // if(!menuOpen) {
  //   menuBtn.classList.add('open');
  //   menuOpen = true;
  // } else {
  //   menuBtn.classList.remove('open');
  //   menuOpen = false;
  // }
  menuBtn.classList.toggle('open');
});
const btn = document.querySelector(".menu-btn")
const collapse = document.querySelector(".sidebar")
btn.addEventListener('click' , function() {
    collapse.classList.toggle("visible")
});


const profileBtn = document.querySelector('.my-profile');
let profileOpen = false;
profileBtn.addEventListener('click', () => {
  profileBtn.classList.toggle('open');
});
const btn1 = document.querySelector(".my-profile")
const collapse1 = document.querySelector(".sidebar_profile")
btn1.addEventListener('click' , function() {
    collapse1.classList.toggle("visible")
});

//Pagination


//Text Editor
// tinymce.init({
//   selector: 'textarea#default',
//   width: 1000,
//   height: 300,
//   plugins:[
//       'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'prewiew', 'anchor', 'pagebreak',
//       'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 
//       'table', 'emoticons', 'template', 'codesample'
//   ],
//   toolbar: 'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |' + 
//   'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
//   'forecolor backcolor emoticons',
//   menu: {
//       favs: {title: 'menu', items: 'code visualaid | searchreplace | emoticons'}
//   },
//   menubar: 'favs file edit view insert format tools table',
//   content_style: 'body{font-family:Helvetica,Arial,sans-serif; font-size:16px}'
// });