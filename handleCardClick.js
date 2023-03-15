function handleCardClick() {
  console.log("Card foi clicado!")
  const afiliationElement = document.getElementById('affiliation');
  console.log("Cor anterior:", afiliationElement.style.color)
  afiliationElement.style.color = "#00FFFF"
  console.log("Cor alterada:", afiliationElement.style.color)
}