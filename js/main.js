// start button dat navigeert naar de volgende pagina.

const startButton = document.querySelector("#start");
const buttonNext = document.querySelector("#next");
if (startButton) {
    startButton.addEventListener("click", () => {
        window.location.href = "quiz.html";
    });
}

// vershillende vragen die verschijnen als je op de next button clicked.
// heb dit uit week 3 van de klasopdracht.

else if (buttonNext) {
    const questions = [
        "How does your skin feel right after washin?",
        "How does your skin react to new products?",
        "Does your skin get shiny during the day?",
        "Do you have flaky or dry patches?",
        "How often do you get pimples or blackheads?",
        "How quickly does your skin get oily?",
        // "Does your skin sting or burn with products?",
        // "Where do you get breakouts?",
        // "End of the day, your skin feels:",
        // "How often do you moisturize?",

    ];

    const answers = [
        ["Tight / dry", "Normal", "Oily / shiny",],
        ["Easily irritated / red", "Usually fine", "Sometimes sensitive",],
        ["Yes, especially T-zone", "No", "Only certain areas"],
        ["Yes", "Sometimes", "No"],
        ["Often", "Occasionally", "Rarely"],
        ["Very fast", "After a few hours", "Almost never"],
    ];


    let userAnswer = [];

    const questionText = document.querySelector(".question-text");
    const loadingBar = document.querySelector(".loading-bar");
    let index = 0;


    function renderQuestions() {
        questionText.textContent = questions[index];
        updateLoadingBar();
    };

    renderQuestions();

    const buttonBack = document.querySelector("#back");


    buttonBack.style.display = "none";


    function updateLoadingBar() {
        const progress = ((index) / questions.length) * 100;
        loadingBar.style.width = `${progress}%`;
    };

    function showNext() {
        index++;

        if (index == questions.length - 1) {
            buttonNext.textContent = "done"
        }

        if (index == questions.length) {
            // console.log(userAnswer)
            calcSkin();
            // console.log(userSkintype);
            localStorage.setItem("skinType", userSkintype);
            window.location.href = "results.html";
        } else {
            buttonBack.style.display = "block";
            renderQuestions();
        };

    };


    buttonNext.addEventListener("click", () => {

        if (currentChoice.length === 0) {
            alert("Please select an answer first!");
            return;
        }

        buttons.forEach((buttonOff) => {
            buttonOff.dataset.state = "off";
        });
        userAnswer.push(currentChoice);
        // console.log(currentChoice);
        // console.log(userAnswer);
        showNext();
        updateButton();
        currentChoice = [0, 0, 0];
    });

    function showBack() {
        index--;
        if (index == 0) {
            buttonBack.style.display = "none";
        };
        buttonNext.textContent = "next"
        renderQuestions();

    };

    buttonBack.addEventListener("click", () => {

        buttons.forEach((buttonOff) => {
            buttonOff.dataset.state = "off";

        });

        showBack();
        updateButton();
        // buttonBack.style.display = "none";
    });


    // de antwoorden dat je op elke button ziet.
    // veranderd ook altijd elke keer dat je klikt door de array.

    const buttons = document.querySelectorAll(".button-quiz");
    // let meerkeuzen = false;

    let currentChoice = [];
    function updateButton() {
        buttons.forEach((quizButton, Index) => {
            // const buttonState = quizButton.dataset.state;
            if (quizButton != buttonNext && quizButton != buttonBack) {
                let currentChoiceArray = [0, 0, 0];
                currentChoiceArray[Index] = 1;
                quizButton.textContent = answers[index][Index];
                quizButton.addEventListener("click", () => {
                    currentChoice = currentChoiceArray;
                    //if (!meerkeuzen) {
                    buttons.forEach((buttonOff) => {
                        buttonOff.dataset.state = "off";
                    });
                    quizButton.dataset.state = "on";
                });
            };

        });
    };
    updateButton();



    const skinList = [

        [ //dry skin 
            [1, 0, 0],
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
            [0, 0, 1],
            [0, 0, 1]
        ],

        [ //Oily skin
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
            [0, 0, 1],
            [1, 0, 0],
            [1, 0, 0]
        ],

        [ //combination skin
            [0, 1, 0],
            [0, 0, 1],
            [1, 0, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ],

        [ //sensitive skin
            [1, 0, 0],
            [1, 0, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 0, 1]
        ],

        [ //Dry + Sensitive
            [1, 0, 0],
            [1, 0, 0],
            [0, 1, 0],
            [1, 0, 0],
            [0, 0, 1],
            [0, 0, 1]
        ],

        [ //Oily + Sensitive
            [0, 0, 1],
            [1, 0, 0],
            [1, 0, 0],
            [0, 0, 1],
            [1, 0, 0],
            [1, 0, 0]
        ],

        [ //Combination + Sensitive 
            [0, 1, 0],
            [1, 0, 0],
            [1, 0, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ],

        [ //Normal Skin
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
            [0, 0, 1],
            [0, 0, 1],
            [0, 1, 0]
        ]];

    let userSkintype = 7;

    function arraysEqual(a, b) {
        return a[0] === b[0] &&
            a[1] === b[1] &&
            a[2] === b[2];
    }

    function calcSkin() {
        let maxCorrect = 0;
        skinList.forEach((skinTypes, typeindex) => {
            // console.log(skinTypes);
            let tussenstand = 0;
            skinTypes.forEach((skinAnswer, skinindex) => {
                if (arraysEqual(userAnswer[skinindex], skinAnswer)) {
                    tussenstand++;

                };

            });
            if (tussenstand > maxCorrect) {
                maxCorrect = tussenstand;
                userSkintype = typeindex;
            };
          
        });
    };
}

else {



    const skinType = localStorage.getItem("skinType")
    console.log(skinType)

    const skinResult = document.querySelector("#skintype");
    const smallText = document.querySelector(".small-text");

    const productImage = document.querySelectorAll(".product-image img");

    const brand = document.querySelectorAll(".brand");
    const info = document.querySelectorAll(".info");

    const productImageList = [
        [
            "images/Dry skin/1_vinohydra_cr_me_intense_tube_packshot_caudalie.jpg",
            "images/Dry skin/1_vinohydra_gelee_packshot_caudalie-fr_1.jpg",
            "images/Dry skin/1_vinohydra_serum_packshot_caudalie.jpg",
            "images/Dry skin/1_vinohydra_sorbet_packshot_caudalie.jpg"
        ],
        [
            "images/Oily skin/1_vinohydra_gel_e_packshot_caudalie.jpg",
            "images/Oily skin/1_vinopure_gele_e_150_packshot_caudalie.jpg",
            "images/Oily skin/1_vinopure_lotion_400_packshot_caudalie.jpg",
            "images/Oily skin/1_vinopure_serum_packshot_caudalie_250716.jpg"
        ],
        [
            "images/Combination skin/1_vinohydra_serum_packshot_caudalie.jpg",
            "images/Combination skin/1_vinopure_lotion_400_packshot_caudalie.jpg",
            "images/Combination skin/1_vinoperfect_serum_packshot_caudalie_1.jpg",
            "images/Combination skin/1_vinohydra_gel_e_packshot_caudalie.jpg"
        ],
        [
            "images/Sensitive skin/1_vinoclean_lotion_tonique_400ml_caudalie_packshot_offwhite.jpg",
            "images/Sensitive skin/1_vinohydra_gel_e_packshot_caudalie - Copy.jpg",
            "images/Sensitive skin/1_vinohydra_gelee_packshot_caudalie-fr_1.jpg",
            "images/Sensitive skin/1_vinohydra_serum_packshot_caudalie.jpg"
        ],
        [
            "images/DRY + SENSITIVE/1_vinoclean_lotion_tonique_400ml_caudalie_packshot_offwhite.jpg",
            "images/DRY + SENSITIVE/1_vinohydra_cr_me_intense_tube_packshot_caudalie.jpg",
            "images/DRY + SENSITIVE/1_vinohydra_gelee_packshot_caudalie-fr_1.jpg",
            "images/DRY + SENSITIVE/1_vinohydra_serum_packshot_caudalie.jpg"
        ],
        [
            "images/OILY + SENSITIVE/1_vinohydra_gel_e_packshot_caudalie.jpg",
            "images/OILY + SENSITIVE/1_vinopure_gele_e_150_packshot_caudalie.jpg",
            "images/OILY + SENSITIVE/1_vinopure_lotion_400_packshot_caudalie.jpg",
            "images/OILY + SENSITIVE/1_vinopure_serum_packshot_caudalie_250716.jpg"
        ],
        [
            "images/COMBINATION + SENSITIVE/1_vinoclean_lotion_tonique_400ml_caudalie_packshot_offwhite.jpg",
            "images/COMBINATION + SENSITIVE/1_vinohydra_gel_e_packshot_caudalie.jpg",
            "images/COMBINATION + SENSITIVE/1_vinohydra_serum_packshot_caudalie.jpg",
            "images/COMBINATION + SENSITIVE/1_vinoperfect_serum_packshot_caudalie_1.jpg"
        ],
        [
            "images/NORMAL SKIN/1_vinoclean_mousse_150ml_caudalie_packshot_offwhite_1.jpg",
            "images/NORMAL SKIN/1_vinohydra_gel_e_packshot_caudalie.jpg",
            "images/NORMAL SKIN/1_vinoperfect_eyecream_pack-open_caudalie_2025.jpg",
            "images/NORMAL SKIN/1_vinoperfect_serum_packshot_caudalie_1.jpg"
        ]

    ];

    const brandList = [

        ["VinoHydra", "VinoHydra", "VinoHydra", "VinoHydra"],
        ["VinoHydra", "Vinopure", "Vinopure", "Vinopure"],
        ["VinoHydra", "Vinopure", "Vinoperfect", "VinoHydra"],
        ["Vinoclean", "VinoHydra", "VinoHydra", "VinoHydra"],
        ["Vinoclean", "VinoHydra", "VinoHydra", "VinoHydra"],
        ["VinoHydra", "Vinopure", "Vinopure", "Vinopure"],
        ["Vinoclean", "VinoHydra", "VinoHydra", "Vinoperfect"],
        ["Vinoclean", "VinoHydra", "Vinoperfect", "Vinoperfect"]
    ];

    const infoList = [

        [
            "Intense Moisturizing Cream",
            "Moisturizing Gel Cream",
            "Hydrating Serum",
            "Sorbet Cream"
        ],
        [
            "Gel Moisturizer",
            "Purifying Gel Cleanser",
            "Purifying Toner",
            "Blemish Control Serum"
        ],
        [
            "Hydrating Serum",
            "Purifying Toner",
            "Radiance Serum",
            "Gel Moisturizer"
        ],
        [
            "Moisturizing Toner",
            "Gel Moisturizer",
            "Moisturizing Gel Cream",
            "Hydrating Serum"
        ],
        [
            "Moisturizing Toner",
            "Intense Moisturizing Cream",
            "Moisturizing Gel Cream",
            "Hydrating Serum"
        ],
        [
            "Gel Moisturizer",
            "Purifying Gel Cleanser",
            "Purifying Toner",
            "Blemish Control Serum"
        ],
        [
            "Moisturizing Toner",
            "Gel Moisturizer",
            "Hydrating Serum",
            "Radiance Serum"
        ],
        [
            "Cleansing Foam",
            "Gel Moisturizer",
            "Eye Cream",
            "Radiance Serum"
        ]

    ];

    productImage.forEach((image, index) => {
        image.src = productImageList[skinType][index];
    });

    brand.forEach((brandText, index) => {
        brandText.textContent = brandList[skinType][index];
    });

    info.forEach((infoText, index) => {
        infoText.textContent = infoList[skinType][index];
    });

    const skintypeName =
        [
            "Dry Skin", "Oily Skin", "Combination Skin", "Sensitive Skin", "Dry + Sensitive Skin",
            "Oily + Sensitive Skin", "Combination + Sensitive Skin", "Normal Skin"
        ];

    const infoSmallText =
        [
            "Your skin needs deep hydration and nourishment.",
            "Your skin produces excess oil and benefits from lightweight care.",
            "Your skin has both oily and dry areas, so balance is key.",
            "Your skin reacts easily and needs gentle, soothing care.",
            "Your skin needs extra hydration and a very gentle routine.",
            "Your skin needs balancing care that is also calming and non-irritating.",
            "Your skin needs balanced and gentle care. Focus on soothing, lightweight hydration to keep it calm and comfortable.",
            "Your skin is naturally balanced and easy to maintain."
        ];


    skinResult.textContent = `Your skintype: ${skintypeName[skinType]}`;
    smallText.textContent = infoSmallText[skinType];



};
const website = document.querySelector("#website");
const restart = document.querySelector("#restart");
if (restart) {
    restart.addEventListener("click", () => {
        window.location.href = "quiz.html";
    });
}
if (website) {
    website.addEventListener("click", () => {
        window.location.href = "../DVG1-E_Dhondt-Noa_webshop-deel-2/index.html";
    });
}