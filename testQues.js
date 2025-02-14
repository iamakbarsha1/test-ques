/*
    Q1: An institute provides 3 cricket courses: A, B, and C. Each course has a fees associated
    to it. Courses can be individually provided, or can be provided in a group, say AB or AC or
    CAB. Rahul wants to apply in the institute such that he can get all the 3 courses and has to
    pay the minimum possible fees.
*/

const generateParantheses = (n) => {
  let output = [];

  function createParantheses(str, open, close) {
    if (str.length === 2 * n) {
      // check total length
      output.push(str);
      return;
    }
    if (open < n) {
      // add open ( bracket
      createParantheses(str + "(", open + 1, close);
    }
    if (close < open) {
      // add ) bracket
      createParantheses(str + ")", open, close + 1);
    }
  }
  createParantheses("", 0, 0);
  return output;
};

console.log(generateParantheses(3)); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]

/*
    Q3: Print all braces combinations for a given value n so that they are balanced. See the
    example below.
    For example, given n = 3, a solution set is:
    [
    &quot;((()))&quot;,
    &quot;(()())&quot;,
    &quot;(())()&quot;,
    &quot;()(())&quot;,
    &quot;()()()&quot;
    ]
*/

function findMinimumFees(fees) {
  const possibilities = [
    {
      combo: ["A", "B", "C"],
      totalFees: fees.A + fees.B + fees.C,
    },
    {
      combo: ["AB", "C"],
      totalFees: fees.AB + fees.C,
    },
    {
      combo: ["AC", "B"],
      totalFees: fees.AC + fees.B,
    },
    {
      combo: ["BC", "A"],
      totalFees: fees.BC + fees.A,
    },
    {
      combo: ["ABC"],
      totalFees: fees.ABC,
    },
  ];

  const minFeesOption = possibilities.reduce((min, current) => {
    return current.totalFees < min.totalFees ? current : min;
  });

  return {
    minimumFees: minFeesOption.totalFees,
    selectedCombo: minFeesOption.combo,
  };
}
const fees = {
  A: 1000,
  B: 2000,
  C: 3000,
  AB: 2500,
  BC: 4500,
  AC: 3500,
  ABC: 5450,
};
const output = findMinimumFees(fees);
console.log("output - ", output); // { minimumFees: 5450, selectedCombo: [ 'ABC' ] }
console.log("Minimum Fees - ", output.minimumFees); // Minimum Fees -  5450
console.log("Combo - ", output.selectedCombo.join("+")); // Combo -  ABC
