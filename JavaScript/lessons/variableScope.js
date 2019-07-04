var variable = "Java Hub";
function teach() {
  console.log(variable);

  variable = "The Java Hub";

  if (1 == 1) {
    var variable = "JavaScript";
  }

  console.log(variable);
}

// what we will be print?

//teach();

function otherExample() {
  console.log("My Lang : First: ", myLang);

  var languages = ["hindi", "English"];

  if (1 == "one") {
    myLang = "Java";
    myLang = languages[0];
  } else {
    myLang = languages[1];
  }

  console.log("My Lang : Last: ", myLang);
}

otherExample();

console.log("Outer MyLang", myLang);

/// Scope of the function ///////

var globalVar = "abc";

// Parent self invoking function
(function outerFunction(outerArg) {
  // begin of scope outerFunction
  // Variable declared in outerFunction function scope
  var outerFuncVar = "x";
  // Closure self-invoking function
  (function innerFunction(innerArg) {
    // begin of scope innerFunction
    // variable declared in innerFunction function scope
    var innerFuncVar = "y";
    console.log(
      "outerArg = " +
        outerArg +
        "\n" +
        "outerFuncVar = " +
        outerFuncVar +
        "\n" +
        "innerArg = " +
        innerArg +
        "\n" +
        "innerFuncVar = " +
        innerFuncVar +
        "\n" +
        "globalVar = " +
        globalVar
    );
  })(5); // end of scope innerFunction)(5); // Pass 5 as parameter
})(7); // end of scope outerFunction )(7); // Pass 7 as parameter
