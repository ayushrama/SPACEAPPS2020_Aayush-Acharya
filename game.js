const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}
function CloseGame() {
    location.replace("https://www.w3schools.com")
}
// function myFunction() {
//     document.body.style.backgroundColor = "#f3f3f3";
//     document.body.style.backgroundImage = "url('bg1.jpg')";
// }


const textNodes = [
    {
        id: 1,
        text: 'You wake up in a spaceship cabin with your personal robot in front of you.',
        options: [
            {
                text: 'Where are we?',
                setState: { blueGoo: true },
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'You robot Puku says,"Beandrick, at the speed of Tachyon; we have reached to planet X-Eγ230.This is 2102 Bikram Samvat/2045AD"',
        options: [
            {
                text: 'Oh,Now I start remembering..',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, sword: true },
                nextText: 3
            },
          
        ]
    },
    {
        id: 3,
        text: 'Oh..that dreadly disaster; 2 years ago in 2100 BS/ 2043 AD; that disaster which destroyed our home planet Earth!! ',
        options: [
            {
                text: 'Next >',
                nextText: 4
            },
        ]
    },
    {
        id: 4,
        text: 'Our Earth was struggling with consequences of Climate Change; which was brought up by our ancestors since the Industrial revolution; that started about 300 years ago',
        options: [
            {
                text: 'Next >',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: 'The islands of Japan & Maldives went under water in 2030 AD. The famine that occured in Africa killed nearly half billion people; despite the efforts of various INGOs. Even the British Isles and parts of Long Island,USA submerged under water the same year!!',
        options: [
            {
                text: 'Next >',
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        text: 'This all didnot result at once; it was the effort of all of our ancestors mistakes. The water in SAARC region was largely polluted. Even more than half of river flowing from Himalayas were polluted at their source. This all resulted in massive epedemics in poor regions of these countries. All of these water borne epedemics killed 500Million people. Australia had lost almost all of its forest & Antarctica was fully submerged. The world economy was drastically down and even the richest were in debt!!!',
        options: [
            {
                text: 'Next >',
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: 'At that point; when world economy was completely collapsed; on 13th December 2043 AD; the first comet among others; hit at the Himalayan Region of Nepal. After that a series of comets hit at Alaska, Andes and Rockies and took the lives of billions due to these impact events..But...',
        options: [
            {
                text: 'Next >',
                nextText: 8
            },
            
        ]
    },
    {
        id: 8,
        text: 'But thanks to NASA Earth Division; they made a rescue plan to save a group of astronauts including me and some of my other friends in just one spaceship. This was the only spaceship left that could travel this fast..But in this long journey; nobody else survived except for me, myself..',
        options: [
            {
                text: 'Next >',
                nextText: 9
            }
        ]
    },
    {
        id: 9,
        text: 'And now here I am, in this strange and lonely planet..',
        options: [
            {
                text: 'What should I do now?',
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        text: 'Your Robot says:                    Now; we are at this planet that is unknown and alien to us. To know mire about this planet; you need to learn about the satellites, missions and other remarkable feats made by NASA in detail and also..',
        options: [
            {
                text: 'Next',
                nextText:11
            }
        ]
    },
    {
        id: 11,
        text: '...The system has launched a small satellite arround this planet, to collect more information.. You can see that in the main home portal.',
        options: [
            {
                text: 'Wait,Puku!.',
                nextText: 12
            }
        ]
    },

     {
        id: 12,
        text: "I will learn all about NASA's missions and it's work on Earth and I will have a detailed information about all of them. And after learning that; I will change this planet into Planet Of Humans!!!",
        options: [
            {
                text: 'Finish',
                nextText: 13
            }
        ]
    },


]


startGame()
