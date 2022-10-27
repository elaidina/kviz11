const quizData = [
    {
        question: "1. velký",
        a: "červený",
        b: "malý",
        
        correct: "b",
    },
    {
      question: "2. čistý",
      a: "pošetilý",
      b: "špinavý",
      
      correct: "b",
  },
  {
    question: "3. pravý",
    a: "diamantový",
    b: "levý",
    
    correct: "b",
},
{
  question: "4. dolu",
  a: "nahoru",
  b: "doprostřed",
  
  correct: "a",
},{
  question: "5. prázdny",
  a: "halucinogenní",
  b: "plný",
  
  correct: "b",
},
{
question: "6. rozbalit",
a: "zívat",
b: "zabalit",

correct: "b",
},{
  question: "7. voňavý",
  a: "transparentní",
  b: "smradlavý",
  
  correct: "b",
},
{
question: "8. ráno",
a: "večer",
b: "v poledne",

correct: "a",
},{
  question: "tma",
  a: "pravda",
  b: "světlo",
  
  correct: "b",
},
{
question: "10. těžký",
a: "lehký",
b: "knedlík",

correct: "a",
},{
  question: "11. jih",
  a: "sever",
  b: "ochechule",
  
  correct: "a",
},
{
question: "12. ostrý",
a: "tupý",
b: "plešatý",

correct: "a",
},{
  question: "13. hustý",
  a: "řídký",
  b: "řezavý",
  
  correct: "a",
},
{
question: "14.zima",
a: "teplo",
b: "sníh",

correct: "a",
},{
  question: "15. krátký",
  a: "dlouhý",
  b: "široký",
  
  correct: "a",
},
{
question: "16. kulatý",
a: "hranatý",
b: "oblý",

correct: "a",
},{
  question: "17. ticho",
  a: "hluk",
  b: "smutek",
  
  correct: "a",
},
{
question: "18. milý",
a: "srandovní",
b: "protivný",

correct: "b",
},{
  question: "19. měkký",
  a: "tvrdý",
  b: "elegantní",
  
  correct: "a",
},
{
question: "20. vyžehlený",
a: "pokrčený",
b: "pomalý",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })