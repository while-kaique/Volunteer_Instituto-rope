
const description = document.querySelector(".tooltip-mapa");
    
document.querySelectorAll('path').forEach((el) =>{

  const logo = '<img src="/images/webdoor-logo.png" alt="logo-png" style="height: 40px">'
  el.addEventListener('mouseover', (event) => {
    event.target.className = ("enabled");
    description.classList.add("active");
    if ( el.id == "Minas Gerais" || el.id == "Bahia" || el.id == "Amapá" || el.id == "Pernambuco" || el.id == "São Paulo" || el.id == "Rio de Janeiro") {

      description.classList.add("logo");
      description.innerHTML = event.target.id + ' - Clique e veja mais sobre nossas filiais'
    } else {
      description.innerHTML = event.target.id; 1 
    }
    
  })
  }
)

document.querySelectorAll('path').forEach((el) =>
  el.addEventListener("mouseout", () => {
    description.classList.remove("active");
    description.classList.remove("logo");
  })
);

document.onmousemove = function (e) {
  description.style.left = e.pageX + "px";
  description.style.top = (e.pageY - 90) + "px";
}