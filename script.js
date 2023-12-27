function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const thirdSpan = icon.querySelector("span:nth-child(3)"); // Selecting the third span

    menu.classList.toggle("open");
    icon.classList.toggle("open");

      // Adjusting the third span's size based on the menu opening or closing
  if (menu.classList.contains("open")) {
    // When the menu is open
    thirdSpan.style.width = "100%"; // Adjust these values as per your design
    thirdSpan.style.height = "3px"; // Adjust these values as per your design
  } else {
    // When the menu is closed
    thirdSpan.style.width = "100%"; // Reset to default or remove inline styles
    thirdSpan.style.height = "1px"; // Reset to default or remove inline styles
  }
}