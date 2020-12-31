const info_box = document.querySelector(".info_box");
const continue_btn = info_box.querySelector(".buttons .start");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const bottom_ques_counter = document.querySelector("footer .total_que");
const next_btn = document.querySelector("footer .next_btn");
const result_box = document.querySelector(".result_box");
const iconImg = result_box.querySelector(".icon");
const scoreText = result_box.querySelector(".score_text");
const completeText = result_box.querySelector(".complete_text");
const restart_btn = result_box.querySelector(".buttons .restart");


info_box.classList.add("activeInfo");
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
let que_count = 0;
let userScore = 0;
let que_numb = 1;


continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0); 
    queCounter(1); 
}
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++;
        que_numb++;
        showQuetions(que_count);
        queCounter(que_numb);
        next_btn.classList.remove("show");
    }else{
        showResult();
    }
}
restart_btn.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    next_btn.classList.remove("show");
}
function showResult(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");


    if (userScore > 6){
        let imgTag = '<img src="svg/esfp-entertainer.svg" alt="Kiwi standing on oval">'
        let textTag = 'Eğlendirici'
        let scoreTag = '<span>Etraflarında hayatın hiçbir sıkıcı olmayan spontane, enerjik ve coşkulu eğlendiriciler.</span>';
        completeText.innerHTML = textTag;
        iconImg.innerHTML = imgTag;
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 2){
        let imgTag = '<img src="svg/estp-entrepreneur.svg" alt="Kiwi standing on oval">'
        let textTag = 'Girişimci'
        let scoreTag = '<span>Uçlarda yaşamaktan gerçekten zevk alan zeki, enerjik ve perspektif sahibi insanlar.</span>';
        completeText.innerHTML = textTag;
        iconImg.innerHTML = imgTag;
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > -2){
        let imgTag = '<img src="svg/isfp-adventurer.svg" alt="Kiwi standing on oval">'
        let textTag = 'Maceracı'
        let scoreTag = '<span>Yeni bir şeyi araştırmaya ve deneyim etmeye hazır rahat ve büyüleyici sanatçılar.</span>';
        completeText.innerHTML = textTag;
        iconImg.innerHTML = imgTag;
        scoreText.innerHTML = scoreTag;
    }
    else{
        let imgTag = '<img src="svg/istp-virtuoso.svg" alt="Kiwi standing on oval">'
        let textTag = 'Becerikli'
        let scoreTag = '<span>Her türlü alette usta cesur ve pratik denemeciler.</span>';
        completeText.innerHTML = textTag;
        iconImg.innerHTML = imgTag;
        scoreText.innerHTML = scoreTag;
    }
}
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[4] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
function optionSelected(answer){
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = option_list.children.length;
    
        userScore += parseInt(userAns);
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("score = " + userScore);
    
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    setTimeout(next_btn.onclick,1000);
}

function queCounter(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}