// buttons
let blanBtn = document.querySelector('.blan-btn');
let lalaBtn = document.querySelector('.lala-btn');
let exitBtn = document.querySelector('.exit-btn');

// texts
let Title = document.querySelector('.slogan');
let TextImg = document.querySelector('.text-container');
let blanPopUpTitle = document.querySelector('#blan-pop-tiltle');
let noSpanMsg = document.querySelector('.no-spam-msg');
let lalaPopUpTitle = document.querySelector('#lala-pop-tiltle');

// submit buttons
let BsmelahBtn = document.querySelector('.Bsmelah-btn');
let SifatMaessageBtn = document.querySelector('.SifatMessage-btn');

// language buttons
let frBtn = document.querySelector('.fr');
let daBtn = document.querySelector('.da');

// Pop ups
let popUpContainer = document.querySelector('.pop-up-container');
let blanPopUp = document.querySelector('#blan-pop-up');
let lalaPopUp = document.querySelector('#lala-pop-up');

// boolean for pop ups
let isBlanPopUpDisplayed = false;
let isLalaPopUpDisplayed = false;

// inputs
let smitek = document.querySelector('#Smitek');
let knitek = document.querySelector('#Knitek');
let Sin = document.querySelector('#Age');
let userEmail = document.querySelector('#Email');
let message = document.querySelector('#Message');

// Email validity
let EmailValidity = false;

// -------------------------affichage------------------------
function DisplaBlanMenue() {
    if (!isBlanPopUpDisplayed) {
        popUpContainer.style.display = "flex";
        blanPopUp.style.display = "flex";
    }
}

function DisplayLalaMenue() {
    if (!isLalaPopUpDisplayed) {
        popUpContainer.style.display = "flex";
        lalaPopUp.style.display = "flex";
        isBlanPopUpDisplayed = true;
}
}

function HidePopUp() {
    popUpContainer.style.display = "none";
    lalaPopUp.style.display = "none";
    blanPopUp.style.display = "none";
    isBlanPopUpDisplayed = false;
    isLalaPopUpDisplayed = false;
}

blanBtn.addEventListener('click', () => {
    DisplaBlanMenue();
})

lalaBtn.addEventListener('click', () => {
    DisplayLalaMenue();
})

exitBtn.addEventListener('click', () => {
    HidePopUp()
})
// -----------------------------------------------------------

// --------------------------Language-------------------------
frBtn.addEventListener('click', () => {
    translateInFr();
});

daBtn.addEventListener('click', () => {
    window.location.reload();
})

function translateInFr() {
    frBtn.style.textDecoration = "underline";
    daBtn.style.textDecoration = "none";
    Title.innerHTML = "Imagine toi manger <br> le meilleur des couscous en faisant un don"
    TextImg.setAttribute("src", "TextCardFR.png")
    blanBtn.innerText = "cool";
    lalaBtn.innerText = "pas ouff";
    let btnContainer = document.querySelector('.interaction-container');
    btnContainer.style.width = "80vw"
    btnContainer.style.margin = "auto"
    // cool pop up
    blanPopUpTitle.innerText = "Partage avec nous tes infos pour rester informer !";
    noSpanMsg.innerText = "Pas de spam tkt";
    BsmelahBtn.innerText = "Informez moi";
    // pas ouff pop up
    lalaPopUpTitle.innerText = "Qu'est ce que tu n'as pas aimer? :(";
    SifatMaessageBtn.innerText = "Envoyer";
}
// -----------------------------------------------------------

// ----------------------Check user input---------------------
function checkEmailValidity(userEmail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.value)) {
        EmailValidity = true;
    } 
    else {
        userEmail.style.background = "rgba(255, 0, 0, 0.6)";
        userEmail.setAttribute("placeholder", "email invalide");
        EmailValidity = false;
    }
}
// -----------------------------------------------------------

// --------------------------Firebase-------------------------
BsmelahBtn.addEventListener('click', () => {
    checkEmailValidity(userEmail);
    if (EmailValidity) {
        db.collection('UsersData').add({
            Nom: knitek.value,
            Prenom: smitek.value,
            Age: Sin.value,
            Email: userEmail.value,
        }).then(() => {
            knitek.value = '';
            smitek.value = '';
            Sin.value = '';
            userEmail.value = '';
        })
    }
});
SifatMaessageBtn.addEventListener('click', () => {
    db.collection('UserSCriticism').add({
        Message: message.value,
    }).then(() => {
        message.value = '';
    })
});
// -----------------------------------------------------------