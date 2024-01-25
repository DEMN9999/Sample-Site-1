window.addEventListener('scroll', function () {
  nav.classList.toggle('stickey', window.scrollY > 180)
})
window.addEventListener('scroll', function () {
 let sbtn=document.getElementById(`stickey-btn`);
 sbtn.classList.toggle(`hidden`,window.scrollY>180)
})
let box1 = document.getElementById('boxx')
let btn = document.getElementById('dropbtn')
function drophovin () {
  boxx.style.display = ('block')
}
function drophovout () {
  boxx.style.display = ('none')
  sbox.style.display = ('none')
}
let dbtn = document.getElementById('deepdown')
let sbox = document.getElementById('subbox')
function ddown () {
  sbox.style.display = ('block')
}
let bars=document.getElementById(`hamburger`);
let menu=document.getElementById(`mobile-menu`);
let ml1=menu.querySelectorAll(`li`)[0]
let ml2=menu.querySelectorAll(`li`)[1]
let ml3=menu.querySelectorAll(`li`)[2]
let ml4=menu.querySelectorAll(`li`)[3]
let ml5=menu.querySelectorAll(`li`)[4]
let ml6=menu.querySelectorAll(`li`)[5]
menu.style.display=`none`
bars.addEventListener(`click`,()=>{menu.classList.toggle(`menuslide`);menu.style.display=`flex`})
ml1.addEventListener(`click`,()=>{menu.style.display=`none`})
ml2.addEventListener(`click`,()=>{menu.style.display=`none`})
ml3.addEventListener(`click`,()=>{menu.style.display=`none`})
ml4.addEventListener(`click`,()=>{menu.style.display=`none`})
ml5.addEventListener(`click`,()=>{menu.style.display=`none`})
ml6.addEventListener(`click`,()=>{menu.style.display=`none`})
function tog1 () {
  let iconup = document.getElementById('iup')
  let iconup2 = document.getElementById('iup2')
  let iconup3 = document.getElementById('iup3')
  let icondown = document.getElementById('idown')
  let icondown2 = document.getElementById('idown2')
  let icondown3 = document.getElementById('idown3')
  let aboutPoint1 = document.getElementById('a-p1')
  let aboutPoint2 = document.getElementById('a-p2')
  let aboutPoint3 = document.getElementById('a-p3')
  let paragraph1 = document.getElementById('par-1')
  let paragraph2 = document.getElementById('par-2')
  let paragraph3 = document.getElementById('par-3')
  if (display = 'none') {
    iconup.style.display = ('block')
    icondown.style.transition = ('1s')
    icondown2.style.display = ('block')
    icondown3.style.display = ('block')
    iconup.style.display = ('block')
    iconup2.style.display = ('none')
    iconup3.style.display = ('none')
    iconup.style.color = ('rgb(234, 139, 43)')
    iconup2.style.color = ('#444444')
    aboutPoint1.style.color = ('rgb(234, 139, 43)')
    aboutPoint2.style.color = ('#444444')
    aboutPoint3.style.color = ('#444444')
    paragraph1.style.display = ('block')
    paragraph1.style.transition = ('1s')
    paragraph2.style.display = ('none')
    paragraph3.style.display = ('none')
  }else {
    iconup.style.display = ('none')
    iconup.style.color = ('#444444')
    paragraph1.style.display = ('none')
  }
  if (display = 'block') {
    icondown.style.display = ('none')
  }else {
    icondown.style.display = ('block')
  }
}
function tog2 () {
  let iconup = document.getElementById('iup')
  let icondown = document.getElementById('idown')
  let aboutPoint1 = document.getElementById('a-p1')
  let paragraph1 = document.getElementById('par-1')
  if (display = 'block') {
    iconup.style.display = ('none')
    aboutPoint1.style.color = ('#444444')
    paragraph1.style.display = ('none')
  }else {
    iconup.style.display = ('block')
    paragraph1.style.display = ('block')
  }
  if (display = 'none') {
    icondown.style.display = ('block')
  }else {
    icondown.style.display = ('none')
  }
}
function tog3 () {
  let iconup = document.getElementById('iup2')
  let icondown = document.getElementById('idown2')
  let aboutPoint1 = document.getElementById('a-p2')
  let paragraph1 = document.getElementById('par-2')
  let iconup2 = document.getElementById('iup')
  let icondown2 = document.getElementById('idown')
  let aboutPoint2 = document.getElementById('a-p1')
  let paragraph2 = document.getElementById('par-1')
  let iconup3 = document.getElementById('iup3')
  let icondown3 = document.getElementById('idown3')
  let aboutPoint3 = document.getElementById('a-p3')
  let paragraph3 = document.getElementById('par-3')
  if (display = 'none') {
    iconup.style.display = ('block')
    icondown2.style.display = ('block')
    icondown3.style.display = ('block')
    iconup2.style.display = ('none')
    iconup3.style.display = ('none')
    iconup.style.color = ('rgb(234, 139, 43)')
    aboutPoint1.style.color = ('rgb(234, 139, 43)1')
    aboutPoint2.style.color = ('#444444')
    aboutPoint3.style.color = ('#444444')
    paragraph1.style.display = ('block')
    paragraph2.style.display = ('none')
    paragraph3.style.display = ('none')
  }else {
    iconup.style.display = ('none')
    iconup.style.color = ('#444444')
    paragraph1.style.display = ('none')
  }
  if (display = 'block') {
    icondown.style.display = ('none')
  }else {
    icondown.style.display = ('block')
  }
}
function tog4 () {
  let iconup = document.getElementById('iup2')
  let icondown = document.getElementById('idown2')
  let aboutPoint1 = document.getElementById('a-p2')
  let paragraph1 = document.getElementById('par-2')
  if (display = 'block') {
    iconup.style.display = ('none')
    aboutPoint1.style.color = ('#444444')
    paragraph1.style.display = ('none')
  }else {
    iconup.style.display = ('block')
    paragraph1.style.display = ('block')
  }
  if (display = 'none') {
    icondown.style.display = ('block')
  }else {
    icondown.style.display = ('none')
  }
}
function togg5 () {
  let iconup = document.getElementById('iup3')
  let icondown = document.getElementById('idown3')
  let aboutPoint1 = document.getElementById('a-p3')
  let paragraph1 = document.getElementById('par-3')
  let iconup2 = document.getElementById('iup')
  let icondown2 = document.getElementById('idown')
  let aboutPoint2 = document.getElementById('a-p1')
  let paragraph2 = document.getElementById('par-1')
  let iconup3 = document.getElementById('iup2')
  let icondown3 = document.getElementById('idown2')
  let aboutPoint3 = document.getElementById('a-p2')
  let paragraph3 = document.getElementById('par-2')
  if (display = 'none') {
    iconup.style.display = ('block')
    icondown2.style.display = ('block')
    icondown3.style.display = ('block')
    iconup2.style.display = ('none')
    iconup3.style.display = ('none')
    iconup.style.color = ('rgb(234, 139, 43)')
    aboutPoint1.style.color = ('rgb(234, 139, 43)')
    aboutPoint2.style.color = ('#444444')
    aboutPoint3.style.color = ('#444444')
    paragraph1.style.display = ('block')
    paragraph1.style.transition = ('1s')
    paragraph2.style.display = ('none')
    paragraph3.style.display = ('none')
  }else {
    iconup.style.display = ('none')
    iconup.style.color = ('#444444')
    paragraph1.style.display = ('none')
  }
  if (display = 'block') {
    icondown.style.display = ('none')
  }else {
    icondown.style.display = ('block')
  }
}
function tog6 () {
  let iconup = document.getElementById('iup3')
  let icondown = document.getElementById('idown3')
  let aboutPoint1 = document.getElementById('a-p3')
  let paragraph1 = document.getElementById('par-3')
  if (display = 'block') {
    iconup.style.display = ('none')
    aboutPoint1.style.color = ('#444444')
    paragraph1.style.display = ('none')
  }else {
    iconup.style.display = ('block')
    paragraph1.style.display = ('block')
  }
  if (display = 'none') {
    icondown.style.display = ('block')
  }else {
    icondown.style.display = ('none')
  }
}
let linehov1 = document.getElementById('a-p1')
let linehov2 = document.getElementById('a-p2')
let linehov3 = document.getElementById('a-p3')
function hovv1 () {
  linehov1.style.color = ('rgb(234, 139, 43)')
}
function hoov1 () {
  linehov1.style.color = ('#444444')
}
function hovv2 () {
  linehov2.style.color = ('rgb(234, 139, 43)')
}
function hoov2 () {
  linehov2.style.color = ('#444444')
}
function hovv3 () {
  linehov3.style.color = ('rgb(234, 139, 43)')
}
function hoov3 () {
  linehov3.style.color = ('#444444')
}
function servicecardhover () {
  let card1 = document.getElementById('s-c-1')
  card1.style.top = ('-15px')
  card1.style.transition = ('.5s')
}
function servocecardhoverout () {
  let card1 = document.getElementById('s-c-1')
  card1.style.top = ('0px')
}
function servicecard2hover () {
  let card2 = document.getElementById('s-c-2')
  card2.style.top = ('-15px')
  card2.style.transition = ('.5s')
}
function servocecard2hoverout () {
  let card2 = document.getElementById('s-c-2');('s-c-4')
  card2.style.top = ('0px')
}
function servicecard3hover () {
  let card3 = document.getElementById('s-c-3')
  card3.style.top = ('-15px')
  card3.style.transition = ('.5s')
}
function servocecard3hoverout () {
  let card3 = document.getElementById('s-c-3');('s-c-4')
  card3.style.top = ('0px')
}
function servicecard4hover () {
  let card = document.getElementById('s-c-4')
  card.style.top = ('-15px')
  card.style.transition = ('.5s')
}
function servocecard4hoverout () {
  let card = document.getElementById('s-c-4');('s-c-4')
  card.style.top = ('0px')
}
function hidein () {
  let btn = document.getElementById('stickey-btn')
  btn.style.display = ('none')
}
function hideout () {
  let btn = document.getElementById('stickey-btn')
  btn.style.display = ('block')
}
function stickeybtnonhover () {
  let btn = document.getElementById('stickey-btn-a')
  btn.style.backgroundColor = ('rgb(234, 139, 43)')
}
function stickeybtnouthover () {
  let btn = document.getElementById('stickey-btn-a')
  btn.style.backgroundColor = ('rgb(234, 139, 43)')
}
function portfoliobtn1click () {
  let box1 = document.getElementById('boxx-1')
  let box2 = document.getElementById('boxx-2')
  let box3 = document.getElementById('boxx-3')
  let box4 = document.getElementById('boxx-4')
  box1.style.display = ('flex')
  box2.style.display = ('none')
  box3.style.display = ('none')
  box4.style.display = ('none')
}
function portfoliobtn2click () {
  let box1 = document.getElementById('boxx-1')
  let box2 = document.getElementById('boxx-2')
  let box3 = document.getElementById('boxx-3')
  let box4 = document.getElementById('boxx-4')
  box1.style.display = ('none')
  box2.style.display = ('flex')
  box3.style.display = ('none')
  box4.style.display = ('none')
}
function portfoliobtn3click () {
  let box1 = document.getElementById('boxx-1')
  let box2 = document.getElementById('boxx-2')
  let box3 = document.getElementById('boxx-3')
  let box4 = document.getElementById('boxx-4')
  box1.style.display = ('none')
  box2.style.display = ('none')
  box3.style.display = ('flex')
  box4.style.display = ('none')
}
function portfoliobtn4click () {
  let box1 = document.getElementById('boxx-1')
  let box2 = document.getElementById('boxx-2')
  let box3 = document.getElementById('boxx-3')
  let box4 = document.getElementById('boxx-4')
  box1.style.display = ('none')
  box2.style.display = ('none')
  box3.style.display = ('none')
  box4.style.display = ('flex')
}
function mouseoveronteamdiv() {
  let div=document.getElementById('team');
  div.style.display=('flex')
}