$("#start").on("click", function() {
  game.start();
});

$(document).on("click", "#end", function() {
  game.done();
});

var questions = [
  {
    question: "Which FRIENDS are siblings?",
    answers: [
      "Monica and Ross",
      "Rachel and Monica",
      "Phoebe and Joey",
      "Chandler and Joey"
    ],
    correctAnswer: "Monica and Ross"
  },
  {
    question: "Who did Rachel almost marry?",
    answers: ["Paolo", "Barry", "Richard", "Joey"],
    correctAnswer: "Barry"
  },
  {
    question: "What is Joey's catchphrase?",
    answers: [
      "Hey what's up?",
      "How's it hanging?",
      "How you doin'?",
      "How are ya?"
    ],
    correctAnswer: "How you doin'?"
  },
  {
    question: "What instrument does Phoebe play?",
    answers: ["Guitar", "Violin", "Piano", "Ukelele"],
    correctAnswer: "Guitar"
  },
  {
    question: "Where are Ross, Rachel, and Monica from?",
    answers: ["Connecticut", "Long Island", "New Jersey", "Westchester"],
    correctAnswer: "Long Island"
  },
  {
    question: "What is the name of the coffee house the Friends hangout at?",
    answers: ["Central Perk", "Starbucks", "Central Coffee", "NYC Perks"],
    correctAnswer: "Central Perk"
  },
  {
    question: "Who is the paleontologist?",
    answers: ["Joey", "Ross", "Monica", "Chandler"],
    correctAnswer: "Ross"
  },
  {
    question: "Which Friend dates Janice first?",
    answers: ["Joey", "Ross", "Chandler", "Gunther"],
    correctAnswer: "Chandler"
  }
];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 20,
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      console.log("Time is up!");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#subwrapper").prepend(
      '<h1>Time Remaining: <span id="counter">120</span> Seconds</h1>'
    );
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      $("#subwrapper").append("<h2>" + questions[i].question + "</h2");
      for (var j = 0; j < questions[i].answers.length; j++) {
        $("#subwrapper").append(
          "<input type = 'radio' name = 'question-" +
            i +
            "' value = '" +
            questions[i].answers[j] +
            "'>" +
            questions[i].answers[j]
        );
      }
    }
    $("#subwrapper").append('<br><br><button id="end">DONE</button>');
  },
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#subwrapper h2").remove();
    $("#subwrapper").html("<h1>All done!</h1>");
    $("#subwrapper").append("<h2>Correct Answers: " + this.correct + "</h2>");
    $("#subwrapper").append(
      "<h2>Incorrect Answers: " + this.incorrect + "</h2>"
    );
    $("#subwrapper").append(
      "<h2>Unanswered: " +
        (questions.length - (this.incorrect + this.correct)) +
        "</h2>"
    );
  }
};
