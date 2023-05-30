const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn1')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Ignorado com sucesso!', 'success')
  })
}



const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2')
const appendAlert2 = (message, type) => {
  const wrapper2 = document.createElement('div')
  wrapper2.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder2.append(wrapper2)
}

const alertTrigger2 = document.getElementById('liveAlertBtn2')
if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    appendAlert2('Ignorado com sucesso!', 'success')
  })
}




const alertPlaceholder3 = document.getElementById('liveAlertPlaceholder3')
const appendAlert3 = (message, type) => {
  const wrapper3 = document.createElement('div')
  wrapper3.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder3.append(wrapper3)
}

const alertTrigger3 = document.getElementById('liveAlertBtn3')
if (alertTrigger3) {
  alertTrigger3.addEventListener('click', () => {
    appendAlert3('Ignorado com sucesso!', 'success')
  })
}




const alertPlaceholder4 = document.getElementById('liveAlertPlaceholder4')
const appendAlert4 = (message, type) => {
  const wrapper4 = document.createElement('div')
  wrapper4.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder4.append(wrapper4)
}

const alertTrigger4 = document.getElementById('liveAlertBtn4')
if (alertTrigger4) {
  alertTrigger4.addEventListener('click', () => {
    appendAlert4('Ignorado com sucesso!', 'success')
  })
}





const alertPlaceholder5 = document.getElementById('liveAlertPlaceholder5')
const appendAlert5 = (message, type) => {
  const wrapper5 = document.createElement('div')
  wrapper5.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder5.append(wrapper5)
}

const alertTrigger5 = document.getElementById('liveAlertBtn5')
if (alertTrigger5) {
  alertTrigger5.addEventListener('click', () => {
    appendAlert5('Respondido com sucesso!', 'success')
  })
}



const alertPlaceholder6 = document.getElementById('liveAlertPlaceholder6')
const appendAlert6 = (message, type) => {
  const wrapper6 = document.createElement('div')
  wrapper6.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder6.append(wrapper6)
}

const alertTrigger6 = document.getElementById('liveAlertBtn6')
if (alertTrigger6) {
  alertTrigger6.addEventListener('click', () => {
    appendAlert6('Respondido com sucesso!', 'success')
  })
}



const alertPlaceholder7 = document.getElementById('liveAlertPlaceholder7')
const appendAlert7 = (message, type) => {
  const wrapper7 = document.createElement('div')
  wrapper7.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder7.append(wrapper7)
}

const alertTrigger7 = document.getElementById('liveAlertBtn7')
if (alertTrigger7) {
  alertTrigger7.addEventListener('click', () => {
    appendAlert7('Respondido com sucesso!', 'success')
  })
}



const alertPlaceholder8 = document.getElementById('liveAlertPlaceholder8')
const appendAlert8 = (message, type) => {
  const wrapper8 = document.createElement('div')
  wrapper8.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder8.append(wrapper8)
}

const alertTrigger8 = document.getElementById('liveAlertBtn8')
if (alertTrigger8) {
  alertTrigger8.addEventListener('click', () => {
    appendAlert8('Respondido com sucesso!', 'success')
  })
}


function responderRoberto() {
    textArea = document.querySelector(".inToggleRoberto");
    textArea.classList.toggle("actived")
}

function responderClaudia() {
    textArea = document.querySelector(".inToggleClaudia");
    textArea.classList.toggle("actived")
}

function responderMilton() {
    textArea = document.querySelector(".inToggleMilton");
    textArea.classList.toggle("actived")
}

function responderJurema() {
    textArea = document.querySelector(".inToggleJurema");
    textArea.classList.toggle("actived")
}

function ignorarRoberto() {
    console.log("chegou");
    roberto = document.querySelector(".roberto");
    roberto.style.display = "none";
}

function ignorarClaudia() {
    console.log("chegou");
    claudia = document.querySelector(".claudia");
    claudia.style.display = "none";
}

function ignorarMilton() {
    console.log("chegou");
    milton = document.querySelector(".milton");
    milton.style.display = "none";
}

function ignorarJurema() {
    console.log("chegou");
    jurema = document.querySelector(".jurema");
    jurema.style.display = "none";
}