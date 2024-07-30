const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_2k3jiay",
      "template_rxbbf6o",
      "#contact-form",
      "0hSLbow_Naj77Cu2a"
    )
    .then(
      () => {
        contactMessage.textContent = "Mensagem enviada com sucesso ✅";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Mensagem não enviada (erro no servidor) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    (sectionTop = current.offsetTop - 58),
      (sectionId = current.getAttribute("id"));
    sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  origin: `top`,
  distance: `60px`,
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__perfil, .about__image .contact__mail`, { origin: "right" });

sr.reveal(
  `.home__name, .home__info,
           .about__container .section__title-1, .about__info,
           .contact__social, .contact__data`,
  { origin: "left" }
);

sr.reveal(`.services__card .projects__card`, { interval: 100 });

const themeButton = document.getElementById(`theme-buttom`)
const darkTheme = `dark-theme`
const iconTheme = `bx-sun`
