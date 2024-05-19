const menubar = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

menubar.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const section = document.querySelectorAll("section");
const navlink = document.querySelectorAll("header nav a");
window.addEventListener("scroll", () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top > offset && top < offset + height) {
      sec.classList.add("start-animation");
      navlink.forEach((Links) => {
        Links.classList.remove("active");
        document.querySelector(
          "header nav a[href*=" + id + "])".classList.add("active")
        );
      });
    }
  });
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menubar.classList.remove("bx-x");
  navbar.classList.remove("active");
});

function Send() {
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let tel=document.getElementById("tel").value;
  let subject=document.getElementById("subject").value;
  let message=document.getElementById("message").value;
let body="Name :"+name+"<br/> Email:"+email+"<br/> Tel:"+tel+"<br/> Subject:"+subject+"<br/> Message:"+message;
console.log(body);
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "fk5580502@gmail.com",
    Password: "285CC20F9CE32109C42D7907D04FFDCFBE0E",
    To: "fk5580502@gmail.com",
    From: "fk5580502@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

document.getElementById('downloadBtn').addEventListener('click', function() {
  const resumeUrl = 'path/to/your/resume.pdf';
  const a = document.createElement('a');
  a.href = resumeUrl;
  a.download = 'resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
