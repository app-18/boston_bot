let adCounter = 0;
let moneyCounter = 0.0;

// Simulate watching an ad
function watchAd() {
  // Disable the button temporarily while "ad is playing"
  const button = document.getElementById('watchAdButton');
  button.disabled = true;
  button.innerText = 'Watching Ad...';

  // Simulate ad watching with a delay
  setTimeout(() => {
    adCounter++;
    moneyCounter = parseFloat((moneyCounter + 0.1).toFixed(1));

    // Update the counters on the webpage
    document.getElementById('adCounter').innerText = adCounter;
    document.getElementById('moneyCounter').innerText = moneyCounter;

    // Enable the button again
    button.disabled = false;
    button.innerText = 'Click to Watch Ad';
  }, 3000); // Simulate a 3-second ad
}

// Attach the function to the button click
document.getElementById('watchAdButton').addEventListener('click', watchAd);
