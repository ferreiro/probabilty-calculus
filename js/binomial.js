      // self executing function here
(function() {
   // your page initialization code here
   // the DOM will be available here


    // Binomial coefficient
    // Credits: github.com/jgferreiro

    setInterval(function(){ 
        calculateBinomial();        
    }, 500);

    function calculateBinomial() {
        a = document.getElementById('number1').value;
        b = document.getElementById('number2').value;
        total = binomialCoefficient(a, b);
        document.getElementById('result').innerHTML = total;
    }

    // Returns the binomial coefficient
    // where a is the total set of posibbilites
    // and b is the number of combinatios we're interested in

    function binomialCoefficient(a, b) {
      numerator = fact(a);
      denominator = fact(a-b) *  fact(b);
      return numerator / denominator;
    }

    // Factorial function.
    function fact(x) {
       if(x==0) return 1;
       return x * fact(x-1);
    }


})();