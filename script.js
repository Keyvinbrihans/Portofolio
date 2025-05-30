var typed = new Typed(".multiple-text", {
    strings: ["Android Developer", "Design Grafis", "Content Creator"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
      let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
};
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("about-typing");
  const fullText = textElement.getAttribute("data-text");
  let i = 0;
  const speed = 90;

  const type = () => {
    if (i < fullText.length) {
      textElement.innerHTML += fullText[i] === " " ? "&nbsp;" : fullText[i];
      i++;
      setTimeout(type, speed);
    } else {
      textElement.innerHTML = fullText; // Setelah selesai, tampilkan fullText agar justify sempurna
    }
  };

  type();
});