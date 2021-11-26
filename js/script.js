let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header .navbar a')

window.onscroll = () => {
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')

  section.forEach(sec => {
    let top = window.scrollY
    let height = sec.offsetHeight
    let offset = sec.offsetTop - 150
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active')
        document
          .querySelector('header .navbar a[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })
}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper('.home-slider', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper('.review-slider', {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
})

// Função para permitir apenas números no campo de telefone

function onlynumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  //var regex = /^[0-9.,]+$/;
  var regex = /^[0-9.]+$/;
  if( !regex.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

// Função para determinar se é telefone fixo ou celular

function mascaraDeTelefone(telefone){
  const textoAtual = telefone.value;
  const isCelular = textoAtual.length >= 12;
  let textoAjustado;
  if(isCelular) {
      const parte0 = textoAtual.slice(0,3);
      const parte1 = textoAtual.slice(3,8);
      const parte2 = textoAtual.slice(8,12);
      textoAjustado = `${parte0}-${parte1}-${parte2}`       
  } else {
      const parte0 = textoAtual.slice(0,3);
      const parte1 = textoAtual.slice(3,7);
      const parte2 = textoAtual.slice(7,11);
      textoAjustado = `${parte0}-${parte1}-${parte2}`
  }

  telefone.value = textoAjustado;
}

// Função para remover hífen

function tiraHifen(telefone) {
  const textoAtual = telefone.value;
  const textoAjustado = textoAtual.replace(/\-/g, '');

  telefone.value = textoAjustado;
}

// Função para ajustar o texto

