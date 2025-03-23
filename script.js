// Prevent right-click context menu from appearing
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// When the DOM content is loaded
window.addEventListener('DOMContentLoaded', function() {
  // Show the wholeProgram element with opacity 1
  var element = document.querySelector('.wholeProgram');
  element.style.opacity = '1';
});

// Function to handle the redirection based on user input
function redirect() {
  // Get the value from the input element
  var input = document.getElementById('input').value;
  
  // Check if the input has non-whitespace characters
  if (input.trim() !== '') {
    // Check if the input matches the pattern of a web link
    var urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/;
    
    if (urlPattern.test(input)) {
      // It's a web link, navigate to the URL
      if (!input.startsWith('http://') && !input.startsWith('https://')) {
        input = 'http://' + input; // Add 'http://' prefix if missing
      }
      window.location.href = input;
    } else {
      // It's a search query, append it to the Google search URL
      var searchQuery = encodeURIComponent(input);
      var searchUrl = 'https://www.google.com/search?q=' + searchQuery;
      window.location.href = searchUrl;
    }
  }
}

// When the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the clearButton element
  var clearButton = document.querySelector('.clearButton');
  
  // Add event listener to clearButton to clear the input when clicked
  clearButton.addEventListener('click', clearInput);
});

// Function to clear the input value and toggle clearButton visibility
function clearInput() {
  document.getElementById('input').value = '';
  toggleClearButtonVisibility();
}

// Function to toggle the visibility of clearButton based on input value
function toggleClearButtonVisibility() {
  var input = document.getElementById('input');
  var clearButton = document.querySelector('.clearButton');
  clearButton.style.display = input.value.trim() !== '' ? 'block' : 'none';
}

// When the search form is submitted
document.querySelector('.search').addEventListener('submit', function(event) {
  event.preventDefault();
  // Call the redirect function to handle user input
  redirect();
});

// When the input value changes
document.getElementById('input').addEventListener('input', toggleClearButtonVisibility);

// When the window is fully loaded
window.addEventListener('load', toggleClearButtonVisibility);

// When the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the time element
  var timeElement = document.getElementById('time');
  
  // Function to update the time displayed in the time element
  function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    // Add leading zeros to the hours, minutes, and seconds if they are less than 10
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    // Create the time string
    var timeString = hours + ":" + minutes + ":" + seconds;
    
    // Update the content of the element with id "time" to display the current time
    timeElement.textContent = timeString;
    timeElement.classList.add('fade-in'); // Add the "fade-in" class
  }
  
  // Call the updateTime function initially
  updateTime();
  
  // Call the updateTime function every second to update the time
  setInterval(updateTime, 1000);
});
