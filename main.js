let leftInput = document.querySelector("#leftInput")
let leftSend = document.querySelector("#leftSend")
let leftBody = document.querySelector("#leftBody")
let leftBodyl = document.querySelector("#leftBodyl")
let leftType = document.querySelector("#leftType")
//left side
let rightInput = document.querySelector("#rightInput")
let rightSend = document.querySelector("#rightSend")
let rightBody = document.querySelector("#rightBody")
let rightBodyr = document.querySelector("#rightBodyr")
let rightType = document.querySelector("#rightType")



let date = new Date()
date = `${date.getHours()}:${date.getMinutes()}`
let data = document.createElement("small");
data.classList.add("data")
data.innerHTML = date
rightInput.addEventListener("keyup", function () {


    if (rightInput.value.length > 0) {
        leftType.innerHTML = "typing.."


    }
    else {

        leftType.innerHTML = "Online"

    }
})


leftSend.addEventListener("click", function () {
    if (leftInput.value == '') {
        return
    }
    let sound = new Audio("get.mp3.mp3");
    sound.play();
    let text = document.createElement("span")

    text.innerHTML = leftInput.value
    text.classList.add("div")

    leftBody.appendChild(text)
    text.appendChild(data.cloneNode(true))


    let textRight = document.createElement("span")
    textRight.innerHTML = leftInput.value



    leftInput.value = '';

    rightType.innerHTML = "Online"
    setTimeout(() => {
        let audio = new Audio("whatsapp_incoming.mp3");
        audio.play();
        textRight.classList.add("activeRight")
        // console.log(leftInput.value.length )

        // if (leftInput.value.length >56) {
        //     textRight.style.alignSelf="unset"
        //     console.log(true)
        // }
        rightBody.appendChild(textRight)
        textRight.appendChild(data.cloneNode(true))

    }, 1000);
})

leftInput.addEventListener("keyup", function () {
    // rightType.innerHTML="typing.."   

    if (leftInput.value.length > 0) {
        rightType.innerHTML = "typing.."


    }
    else {

        rightType.innerHTML = "Online"

    }
})

rightSend.addEventListener("click", function () {
    if (rightInput.value == '') {
        return
    }
    let sound = new Audio("get.mp3.mp3");
    sound.play();
    let text = document.createElement("span")
    text.innerHTML = rightInput.value
    text.classList.add("div")

    let textLeft = document.createElement("span")
    textLeft.innerHTML = rightInput.value
    rightBody.appendChild(text)
    text.appendChild(data.cloneNode(true))
    // if (rightInput.value.length >56) {
    //     textLeft.style.alignSelf="unset"
    //     console.log(true)
    // }
    rightInput.value = '';
    leftType.innerHTML = "Online"
    setTimeout(() => {
        let audio = new Audio("whatsapp_incoming.mp3");
        audio.play();
        textLeft.classList.add("activeLeft")
        // if (rightInput.value.length >56) {
        //     textLeft.style.alignSelf="unset"
        //     console.log(true)
        // }
        leftBody.appendChild(textLeft);
        textLeft.appendChild(data.cloneNode(true))

    }, 1000);
})
////////////////////////////////

let emoji = [
    { "codes": "1F600", "char": "😀", "name": "grinning face", "category": "Smileys & Emotion (face-smiling)", "group": "Smileys & Emotion", "subgroup": "face-smiling" }, { "codes": "1F603", "char": "😃", "name": "grinning face with big eyes", "category": "Smileys & Emotion (face-smiling)", "group": "Smileys & Emotion", "subgroup": "face-smiling" }, { "codes": "1F604", "char": "😄", "name": "grinning face with smiling eyes", "category": "Smileys & Emotion (face-smiling)", "group": "Smileys & Emotion", "subgroup": "face-smiling" }, { "codes": "1F601", "char": "😁", "name": "beaming face with smiling eyes", "category": "Smileys & Emotion (face-smiling)", "group": "Smileys & Emotion", "subgroup": "face-smiling" }, { "codes": "1F606", "char": "😆", "name": "grinning squinting face", "category": "Smileys & Emotion (face-smiling)", "group": "Smileys & Emotion", "subgroup": "face-smiling" }, { "codes": "1F605", "char": "😅", "name": "grinning face with sweat", "category": "Smileys & Emotion (face-smiling)", "group": "Smileys & Emotion", "subgroup": "face-smiling" }, { "codes": "1F923", "char": "🤣", "name": "rolling on the floor laughing", "category": "Smileys & Emotion (face-smiling)", "group": "Smileys & Emotion", "subgroup": "face-smiling" }, { "codes": "1F602", "char": "😂", "name": "face with tears of joy", "category": "Smileys & Emotion (face-smiling)", "group": "Smileys & Emotion", "subgroup": "face-smiling" }, { "codes": "1F642", "char": "🙂", "name": "slightly smiling face", "category": "Smileys & Emotion (face-smiling)", "group": "Smileys & Emotion", "subgroup": "face-smiling" }, { "codes": "1F643", "char": "🙃", "name": "upside-down face", "category": "Smileys & Emotion (face-smiling)", "group": "Smileys & Emotion", "subgroup": "face-smiling" }, { "codes": "1F609", "char": "😉", "name": "winking face", "category": "Smileys & Emotion (face-smiling)", "group": "Smileys & Emotion", "subgroup": "face-smiling" }, { "codes": "1F60A", "char": "😊", "name": "smiling face with smiling eyes", "category": "Smileys & Emotion (face-smiling)", "group": "Smileys & Emotion", "subgroup": "face-smiling" },{"codes":"1F618","char":"😘","name":"face blowing a kiss","category":"Smileys & Emotion (face-affection)","group":"Smileys & Emotion","subgroup":"face-affection"},{"codes":"1F617","char":"😗","name":"kissing face","category":"Smileys & Emotion (face-affection)","group":"Smileys & Emotion","subgroup":"face-affection"}
]
console.log(emoji.length)






let leftIcon=document.querySelector("#leftIcon")
let smileBox = document.querySelector("#smileBox");
let smileButton = document.querySelector("#smileButton")
smileButton.addEventListener("click", function () {
    smileBox.classList.toggle("active")
    leftIcon.classList.toggle("iconTransform")
})
let a;
for (let i = 0; i < emoji.length; i++) {
    a = document.createElement("li")
    a.innerHTML =emoji[i].char;
    smileBox.appendChild(a)
    a.addEventListener("click", function () {
        leftInput.value += emoji[i].char
   
    })
}













// function enableTxt(elem) {
//     leftInput.value += elem.textContent;
// }

