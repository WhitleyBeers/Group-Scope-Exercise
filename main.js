console.log("Time to learn scope!");

// Exercise 1
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

//Exercise 2
const conjunction = function (firstWord, secondWord) {
  const conjoinedWord = `${firstWord} ${secondWord}`
  console.log(conjoinedWord);
}

conjunction("Master", "Card")

//Exercise 3
  const modSquad = {
      "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
      "series": {
          "start": "1968",
          "end": "1973"
      }
  }

  let HTMLRepresentation = `<h1>The Mod Squad</h1>`

  modSquad.members.forEach(member => {
      HTMLRepresentation += `<div>${member}</div>`
  })
  
  console.log(HTMLRepresentation)

//Exercise 4
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

let invalidLocation = [];

for (const location of locations) {

    if (location[0] > 2) {
        invalidLocation = true
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
}
