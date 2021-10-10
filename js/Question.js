class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name...");
   //Create a input box to enter the number
   this.input2 = createInput("").attribute("placeholder", "Enter your Answer");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3')
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.option4 = createElement('h4')
    
    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(425, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Who is known as Father of India ??");
    this.question.position(100,150);
    this.option1.html("1: Jawaharlal Nehru")
    this.option1.position(100,200)
    this.option2.html("2: Lal Bahadur Shastri")
    this.option2.position(100,250)
    this.option3.html("3: Mahatma Gandhi")
    this.option3.position(100,300)
    this.option4.html("4: APJ Abdul Kalam")
    this.option4.position(100,350)
    
    
    this.input1.position(230, 400);
    this.button.position(650, 400);
    this.input2.position(420,400);
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You , Your Answer has been submitted.")
      this.message.position(350,450);
    })


  }
}
