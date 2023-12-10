const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const weight = parseFloat(e.target['weight'].value);
  const height = parseFloat(e.target['height'].value);
  const inch = parseFloat(e.target['inch'].value || 0);

  if (isNaN(weight) || isNaN(height) || isNaN(inch)) {
    result.style.display = 'block';
    result.innerText = 'কি ব্যপার উল্টা পাল্টা ইনপুট দেও কেন?';
    this.reset();
    return;
  }

  const calulateHeight = Math.pow(height * 0.3048 + inch * 0.0254, 2);
  const bmiResult = (weight / calulateHeight).toFixed(2);

  result.style.display = 'block';

  setTimeout(() => {
    result.style.display = 'none';
  }, 5000);
  this.reset();

  displayBMIResult(bmiResult, result);
});

function displayBMIResult(bmiResult, result) {
  let bmi = 'Your BIM Index is ';

  if (bmiResult > 30) {
    bmi += bmiResult + '\n না খেয়ে কেউ মরেনা। তাই তোমার কম খেতে হবে। ';
  } else if (bmiResult > 24) {
    bmi += bmiResult + '\n খাওয়া নিয়ন্ত্রণ করতে হবে। ';
  } else if (bmiResult > 18) {
    bmi += bmiResult + '\n যেভাবে আছো ভালো আছো। ';
  } else {
    bmi += bmiResult + '\n তোমাকে কি কেউ খেতে দেয়না? ';
  }

  result.innerText = bmi;
}
