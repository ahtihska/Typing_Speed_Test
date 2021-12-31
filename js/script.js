const typingText = document.querySelector(".typing-text");
inpField = document.querySelector(".wrapper .input-field");
mistakeTag = document.querySelector(".mistake-tag");
timeTag = document.querySelector(".time span b");
wpmTag = document.querySelector(".wpm span");
cpmTag = document.querySelector('.cpm span');
tryAgainBtn = document.querySelector("button");

let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = 0;

let charIndex = mistakes = 0;

function randomParagraph(){
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[randIndex].split("").forEach(span => {
        let spanTag = `<span> ${span} </span>`;
        typingText.innerHTML += spanTag;
    });
    typingText.querySelector("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping(){
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("");[charIndex];
   
    if (charIndex < characters.length - 1 && timeLeft > 0) {
    {
        if(!isTyping){
            time = setInterval(initTimer, 1000);
            isTyping = true;
        }
    
        if(typedChar == null){
            charIndex--;
            if(characters[charIndex].classList.contains("incorrect")){
                mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
        }else{
            if(characters[charIndex] === typedChar){
            characters[charIndex].classList.add("correct");
        }
            else {
                mistakes++
                characters[charIndex].classList.add("incorrect");
            
        }
        charIndex++;
    }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");
    
        let wpm = Math.round((((charIndex - mistakes) / 5) / (maxTime - timeLeft))*60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        mistakeTag.innerHTML = mistakes;
        wpmTag.innerHTML = wpm;
        cpmTag.innerText = charIndex - mistakes; 
}
    } 
    else 
    {
        inpField.value = ""
        clearInterval(timer);
    }
}

function initTimer(){
        if(timeLeft > 0)
        {
            timeLeft--;
            timeTag.innerHTML = timeLeft;

        } else {

            clearInterval(timer);
            alert("Time is up");
        }
    }

function resertGame(){
    randomParagraph();
    inpField.value = "";
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    timeTag.innerHTML = timeLeft;
    mistakeTag.innerHTML = mistakes;
    wpmTag.innerText = 0;
    cpmTag.innerText = 0;

randomParagraph();  
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resertGame);
}