function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
//pegar a tag img
const img = document.querySelector('#profile img')

//substituir a imagem
  if(html.classList.contains('light')) {
//se tiver light mode, adicionar a imagem light
img.setAttribute('src', './assets/Avatar2.png')
} else {
// se tiver sem light mode. manter a imagem original
img.setAttribute('src','./assets/Avatar.png')
}
}


/*1ª forma
  if(html.classList.contains('light')) {
    html.classList.remove ('light')
  } else {
    html.classList.add('light')
  }
  */