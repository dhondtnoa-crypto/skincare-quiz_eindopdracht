Mijn concept is skincare, 
ik wou een soort quiz doen om te zien welk skintype je hebt.

figma link: 
https://www.figma.com/design/oOgDaqEp88mR5RYG2aYCUW/dvg1-e-Noa-Dhondt---Web-Scripting-Eindopdracht?node-id=1-3&t=0nvMm92qWkWUn37E-1

## Live website
https://dhondtnoa-crypto.github.io/skincare-quiz-eindopdracht/

Chatgpt prompt voor skintypes: 

    ["Tight / dry", "Normal", "Oily / shiny",],
    ["Easily irritated / red", "Usually fine", "Sometimes sensitive",],
    ["Yes, especially T-zone", "No", "Only certain areas"],
    ["Yes", "Sometimes", "No"],
    ["Often", "Occasionally", "Rarely"],
    ["Very fast", "After a few hours", "Almost never"], 
    dit zijn de answers dat je zelf kan aanduiden maar nu wil 
    ik weten wat bij welke skin type past stel je kiest als in een
    array 0,0,1 volgend antwoord 1,0,0 volgend antwoord 1,0,0 en 
    zo verder wat je dan zou hebben als skin type geef mij dit volledig

Chatgpt prompt 2 voor images: 

geef mij ook is caudalie producten die bij elke skintype werkt of hoort.

Chatgpt prompt: 

i have 2 arrays [1,0,0] and [1,0,0] 
and i try : if (userAnswer[skinCounter] == skinAnswer){}

antwoord: 
function arraysEqual(a, b) {
    return a[0] === b[0] &&
           a[1] === b[1] &&
           a[2] === b[2];
}

hulp gekregen : 

Ik heb soms ook wat hulp gekregen van mijn vriend als ik het echt niet snapte,
en heeft het ook altijd uitgelegd wat ik moet doen en hoe ik daar aankom en waarom en wat het doet.

van Chatgpt: 

 localStorage.setItem 
 // ik wist niet hoe dat ik de informatie moest opslagen.

 window.location.href = "quiz.html"; 
 // Pagina veranderen.

 buttonBack.style.display = "none"; 
 // ik wou de button laten verdwijnen zodat je die niet zag.

 const progress = ((index) / questions.length) * 100; 
 // had het wel moeilijk met de progress bar.
 loadingBar.style.width = `${progress}%`;

 image.src =; 
 // hoe ik uiteindelijk de images kan veranderen in html. 

