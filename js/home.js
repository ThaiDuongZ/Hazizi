let productnew1 = document.querySelector('.productnew1__content--img1')
let productnew0 = document.querySelectorAll('.productnew1__content--sp')[0]

productnew1.addEventListener('mouseover', function() {
    productnew0.innerHTML= " <img><span>adad</span> ";
    var productnew6 = document.querySelector('.productnew1__content--sp > img')
    productnew6.src= "./img/23stse012t_-_23sqse013f_2_e89108ddb2da4045b3408ee3c5024849_grande.webp"
    productnew6.classList.add('productnew1__content--img1')
    productnew6.classList.add('productnew1__content--img')
    var productnew2 = document.querySelector('.productnew1__content--sp > span')
    productnew2.classList.add('productnew1__content--ct')
    var productnew3 = document.querySelectorAll('.productnew1__content--ct')[0]
    productnew3.innerHTML = "<p>Chân váy Midi, Dáng xòe 23SCVE079F</p> <p>1,199,000đ</p>"
    var productnew4 = document.querySelectorAll('.productnew1__content--ct > p')[0]
    var productnew5 = document.querySelectorAll('.productnew1__content--ct > p')[1]
    productnew4.classList.add('productnew1__content--ct_top')
    productnew5.classList.add('productnew1__content--ct_bottom')
})

productnew1.addEventListener('mouseout', function(){
    productnew0.innerHTML= " <img><span>adad</span> ";
    var productnews6 = document.querySelector('.productnew1__content--sp > img')
    productnews6.src= "./img/23sote051f_-_23scve079f_3_8836a70a54114278898c2bca7e0919d8_grande.webp"
    productnews6.classList.add('productnew1__content--img1')
    productnews6.classList.add('productnew1__content--img')
    var productnews2 = document.querySelector('.productnew1__content--sp > span')
    productnews2.classList.add('productnew1__content--ct')
    var productnews3 = document.querySelectorAll('.productnew1__content--ct')[0]
    productnews3.innerHTML = "<p>Chân váy Midi, Dáng xòe 23SCVE079F</p> <p>1,199,000đ</p>"
    var productnews4 = document.querySelectorAll('.productnew1__content--ct > p')[0]
    var productnews5 = document.querySelectorAll('.productnew1__content--ct > p')[1]
    productnews4.classList.add('productnew1__content--ct_top')
    productnews5.classList.add('productnew1__content--ct_bottom')
})



// productnew1.addEventListener('mouseout' function() {
//     productnew1.
// })