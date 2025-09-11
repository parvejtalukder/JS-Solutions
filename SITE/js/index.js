console.log("JS")
// TXT PART
const logo = document.createElement('p');
logo.innerHTML = 'PHT';
// STYLE LOGO
logo.style.color = 'red';
logo.style.fontFamily = 'serif';
logo.style.marginLeft = 'auto';
logo.style.textAlign = 'center';              
logo.style.width = 'auto';  
logo.style.height = 'auto'; 
logo.style.display = 'flex';
logo.style.justifyContent = 'center';
logo.style.alignItems = 'center';
logo.style.paddingTop = '14px';
// logo.style.fontSize = '30px';
const Header = document.createElement('header');
// STYLE HEAD
Header.style.background = 'lightblue';
Header.style.height = '50px';
Header.appendChild(logo);
const Main = document.body;
Main.appendChild(Header);


