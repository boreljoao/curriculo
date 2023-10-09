window.sr = ScrollReveal({reset: true});

sr.reveal('.wrapper, .cards', {duration: 3000})

sr.reveal('.teste1, .teste2, .teste3, .teste4', {rotate: {x: 0, y: 320, z:0}, duration: 2500})

AOS.init({diration: 2000});


document.querySelectorAll('.cards a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      var id = this.getAttribute('href').substring(1); // Remove o caractere '#' do href
      var targetElement = document.getElementById(id);
      
      if (targetElement) {
        var targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: targetOffset - 100,
          behavior: 'smooth'
        });
      }
    });
  });