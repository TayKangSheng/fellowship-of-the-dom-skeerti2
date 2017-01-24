console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  var middleEarth = document.createElement('section')
middleEarth.id = 'middle-earth'
lands.forEach(function(landName){
  console.log(landName)
  var land = document.createElement('article')
  var h1 = document.createElement('h1')
  h1.textContent = landName

  land.appendChild(h1)
  middleEarth.appendChild(land)

})

body.appendChild(middleEarth)
}
  //var article
makeMiddleEarth()
// Part 2

function makeHobbits() {
var ulOfHobbit = document.createElement('ul')
 hobbits.forEach(function(item){
  var hobbitList = document.createElement('li')
  hobbitList.innerHTML = item
  hobbitList.setAttribute('class','hobbit')
  ulOfHobbit.appendChild(hobbitList)
})
  var shireArticle = document.getElementById('middle-earth').getElementsByTagName('article')[0]
  shireArticle.appendChild(ulOfHobbit)


  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
}

makeHobbits()
// Part 3

function keepItSecretKeepItSafe() {

  var ringDiv = document.createElement('div')
  ringDiv.setAttribute('id','the-ring')
  ringDiv.setAttribute('class','magic-imbued-jewelry')
  ringDiv.addEventListener('click', nazgulScreech)
  var frodoElement = document.getElementsByClassName('hobbit')[0]
frodoElement.appendChild(ringDiv)  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

keepItSecretKeepItSafe()


// Part 4


function makeBuddies() {
  var asideTag = document.createElement('aside')
  var buddyUl = document.createElement('ul')
  buddies.forEach(function(buddy){
    var buddyList = document.createElement('li')
    buddyList.innerHTML = buddy
    buddyUl.appendChild(buddyList)
  })
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  asideTag.appendChild(buddyUl)
  var RivendellArticle = document.getElementById('middle-earth').getElementsByTagName('article')[1]
  RivendellArticle.appendChild(asideTag)

}

makeBuddies()
// Part 5


function beautifulStranger() {

var strider = document.querySelector('aside').getElementsByTagName('li')[3]

  //var strider =  document.getElementsByTagName('aside').getElementsByTagName('ul').getElementsByTagName('li')[3]
console.log(strider)
  strider.textContent = 'Aragon'
  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger()
// Part 6

function leaveTheShire() {
  //var hobbitLocation = document.querySelector("the-ring")
  var middleEarthElement = document.getElementById('middle-earth')
  var articleElements = middleEarthElement.getElementsByTagName('article')
  var ulOfHobbits
  var rivendellArticle
  for(var i=0; i< articleElements.length; i++){
    var firsth1Element = articleElements[i].getElementsByTagName('h1')[0]
    if(firsth1Element.textContent === "The Shire")
    {
      ulOfHobbits = articleElements[i].getElementsByTagName('ul')[0]
    }
    else if(firsth1Element.textContent === "Rivendell")
    {
     rivendellArticle = articleElements[i]
    }
  }
  rivendellArticle.appendChild(ulOfHobbits)


  // assemble the hobbits and move them to Rivendell
}
leaveTheShire()

// Part 7
function forgeTheFellowShip() {
  var h1ElementRivendell = document.getElementsByTagName('h1')[1]
  console.log(h1ElementRivendell)
  var divRivendell = document.createElement('div')
  divRivendell.setAttribute('id','the-fellowship')
  h1ElementRivendell.appendChild(divRivendell)

 var ulHobbitOfRivendell = document.getElementsByTagName('article')[1]
// console.log(ulHobbitOfRivendell)
var liElement = document.querySelectorAll('.hobbit')
console.log(liElement)
var rivendellUl = document.createElement('ul')
divRivendell.appendChild(rivendellUl)
console.log(divRivendell)
  liElement.forEach(function(listitem){
    //alert(listitem.textContent + ' has joined the party! ')
    rivendellUl.appendChild(listitem)
  })
var buddyList = document.querySelector('aside').getElementsByTagName('li')
console.log(buddyList)



//
// console.log(ulHobbitOfRivendell)


// var revendellDiv
//   var articleElements = document.getElementById('middle-earth').getElementsByTagName('article')
//   for(var i =0; i< articleElements.length; i++){
//     var h1Elements = articleElements[i].getElementsByTagName('h1')[0]
//     if(h1Elements.textContent === "Rivendell")
//     {
//        revendellDiv = document.createElement('div')
//        revendellDiv.setAttribute('id','the-fellowship')
//        articleElements[i].appendChild(revendellDiv)
//     }
//   }
//   var hobbitNamesLi = []
//   var HobbitUlRevendell = document.createElement('ul')
//   revendellDiv.appendChild(HobbitUlRevendell)
//
// for (var i=0; i< hobbits.length;i++)
// {
//     var HobbitListItem = document.createElement('li')
//     HobbitListItem.innerHTML = hobbits[i]
//     HobbitUlRevendell.appendChild(HobbitListItem)
//   //  alert( hobbits[i] + ' has joined the party ')
// }
//
// for(var j =0; j< buddies.length; j++)
// {
//   var buddyListItem = document.createElement('li')
//   buddyListItem.innerHTML = buddies[j]
//   HobbitUlRevendell.appendChild(buddyListItem)
// }
//   var hobbitClass = document.querySelectorAll('.hobbit')
//
//   console.log(hobbitClass)
//   var asideTag = document.querySelector('aside').getElementsByTagName('ul')[2]
//   console.log(asideTag)
//asideTag.remove()
//hobbitClass.removeChild()
  //alert( buddies[j] + ' has joined the party ')


//var rivendellHobbitUl =

  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip()
// Part 8


function theBalrog() {
var gandalf = document.querySelector('aside').getElementsByTagName('li')[0]
  gandalf.textContent = "Gandalf the White"
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog()

// Part 9

function hornOfGondor() {
  //alert('Horn of gondor has been blown')
  //alert('Boromir\'s been killed by the Uruk-hai!')
  //var str = "Boromir"
  //var strikedBoromir = str.strike()
  var boromir = document.querySelector('aside').getElementsByTagName('li')[4]
  var text = boromir.textContent
  var strikedText = text.strike()
  boromir.innerHTML = strikedText
  boromir.remove()
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}

//hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  var liItems = document.querySelector('the-fellowship').getElementsByTagName('li')
  console.log(liItems)
  var frodoItem

  // for(var i=0; i< liItems.length; i++)
  // {
  //   if(liItems[i].textContent==='Frodo Baggins'){
  //     frodoItem = liItems[i]
  //     console.log(frodoItem)
  //   }
  //   var h1Items = document.getElementsByTagName('h1')
  //   var mordorItem
  //   for(var i = 0; i< h1Items ;i++){
  //     if(h1Items[i].textContent === 'Mordor')
  //     {
  //       mordorItem = h1Items[i]
  //       console.log(mordorItem)
  //     }
  //   }
    //mordorItem.appendChild(frodoItem)
}


//itsDangerousToGoAlone()

  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor



//itsDangerousToGoAlone()

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire
}
