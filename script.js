const drop=document.querySelector('.hamburger');
const menu=document.querySelector('.ham-menu');
drop.addEventListener('click',()=>{
      if (menu.style.opacity === "1") {
    // Close it
    menu.style.opacity = 0;
    drop.innerHTML = "☰"; // back to hamburger
  } else {
    // Open it
    menu.style.opacity = 1;
    drop.innerHTML = "✕"; // close icon
  }
});