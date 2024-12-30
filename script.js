let adCounter = 0;
let moneyCounter = 0.0;

function watchAd() {
  // Disable the button temporarily while "ad is playing"
  const button = document.getElementById('watchAdButton');
  button.disabled = true;
  button.innerText = 'Watching Ad...';

  // Dynamically insert the ad code
  const adContainer = document.getElementById('adContainer');
  adContainer.innerHTML = `
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9365404300026903"
        crossorigin="anonymous"></script>
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-9365404300026903"
        data-ad-slot="7982459076"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  `;

  // Simulate watching the ad
  setTimeout(() => {
    adCounter++;
    moneyCounter = parseFloat((moneyCounter + 0.1).toFixed(1));

    // Update the counters on the webpage
    document.getElementById('adCounter').innerText = adCounter;
    document.getElementById('moneyCounter').innerText = moneyCounter;

    // Clear the ad after it is "watched"
    adContainer.innerHTML = '';

    // Enable the button again
    button.disabled = false;
    button.innerText = 'Click to Watch Ad';
  }, 10000); // Simulate a 10-second ad duration
}

// Attach the function to the button click
document.getElementById('watchAdButton').addEventListener('click', watchAd);
