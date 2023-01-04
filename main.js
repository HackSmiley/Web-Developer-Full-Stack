const cBtn = document.getElementById('colorBtn')
const sBtn = document.getElementById('saturateBtn')
const bBtn = document.getElementById('blurBtn')  
const gBtn = document.getElementById('gradientBtn')


cBtn.addEventListener('click', (e)=>{
  cBtn.classList.add('active')
  sBtn.classList.remove('active')
  bBtn.classList.remove('active')
  gBtn.classList.remove('active')
})

sBtn.addEventListener('click', (e)=>{
  cBtn.classList.remove('active')
  sBtn.classList.add('active')
  bBtn.classList.remove('active')
  gBtn.classList.remove('active')
})

bBtn.addEventListener('click', (e)=>{
  cBtn.classList.remove('active')
  sBtn.classList.remove('active')
  bBtn.classList.add('active')
  gBtn.classList.remove('active')
})

gBtn.addEventListener('click', (e)=>{
  cBtn.classList.remove('active')
  sBtn.classList.remove('active')
  bBtn.classList.remove('active')
  gBtn.classList.add('active')
})

function hueFunction(hue) {
  const hueValue = document.getElementById('hueValue')
  var hue = hue + "deg"
  document.getElementById("imgBox").setAttribute("style", "filter:hue-rotate(" + hue + ");")

  hueValue.textContent = hue
}

function sepiaFunction(sepia) {
  const sepiaValue = document.getElementById('sepiaValue')
  var sepia = sepia + "%"
  document.getElementById("imgBox").setAttribute("style", "filter:sepia(" + sepia + ");")

  sepiaValue.textContent = sepia
}

function invertFunction(invert) {
  const invertValue = document.getElementById('invValue')
  var invert = invert + "%"
  document.getElementById("imgBox").setAttribute("style", "filter:invert(" + invert + ");")

  invertValue.textContent = invert
}

function satFunction(sat) {
  const satValue = document.getElementById('satValue')
  var sat = sat + "%"
  document.getElementById("imgBox").setAttribute("style", "filter:saturate(" + sat +");")

  satValue.textContent = sat
}

function contFunction(contrast){
  const contValue = document.getElementById('contValue')
  var contrast = contrast + "%"
  document.getElementById("imgBox").setAttribute("style", "filter:contrast(" + contrast +");")
  
  contValue.textContent = contrast
}

function opFunction(opacity) {
  const opValue = document.getElementById('opValue')
  var opacity = opacity + "%"
  document.getElementById("imgBox").setAttribute("style", "filter:opacity(" + opacity + ");")

  opValue.textContent = opacity
}

function blurFunction(blur) {
  const blurValue = document.getElementById('blurValue')
  var blur = blur + "px"
  document.getElementById("imgBox").setAttribute("style", "filter:blur(" + blur + ");")

  blurValue.textContent = blur
}

function brightFunction(bright) {
  const brightValue = document.getElementById('brightValue')
  var bright = bright + "%"
  document.getElementById("imgBox").setAttribute("style", "filter:brightness(" + bright + ");")
  
  brightValue.textContent = bright
}

function grayFunction(gray) {
  const grayValue = document.getElementById('grayValue')
  var gray = gray + "%"
  document.getElementById("imgBox").setAttribute("style", "filter:grayscale(" + gray + ");")

  grayValue.textContent = gray
}