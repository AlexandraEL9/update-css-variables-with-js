css variables can be updated in JS

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Scoped CSS Variables and JS</title>
  <link rel="icon" href="https://fav.farm/✅" />
</head>
<body>
  <h2>Update CSS Variables with <span class='hl'>JS</span></h2>

  <div class="controls">
    <label for="spacing">Spacing:</label>
    <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

    <label for="blur">Blur:</label>
    <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

    <label for="base">Base Color</label>
    <input id="base" type="color" name="base" value="#ffc600">
  </div>

  <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500">

  <style>
    /* CSS Variables */
    :root {
      --base: #ffc600; /* Default base color */
      --spacing: 10px; /* Default spacing */
      --blur: 10px;    /* Default blur */
    }

    /* Styling for the image */
    img {
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));
    }

    /* Styling for highlighted text */
    .hl {
      color: var(--base); /* Color from CSS variable --base */
    }

    /* General body styling */
    body {
      text-align: center;
      background: #193549;
      color: white;
      font-family: 'helvetica neue', sans-serif;
      font-weight: 100;
      font-size: 50px;
    }

    /* Styling for controls container */
    .controls {
      margin-bottom: 50px;
    }

    /* Styling for inputs */
    input {
      width: 100px;
    }
  </style>

  <script>
    // JavaScript for updating CSS variables
    const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      // Get the suffix (e.g., 'px') from data-sizing attribute, or default to an empty string
      const suffix = this.dataset.sizing || '';
      // Update the CSS variable value based on input value and suffix
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    // Add event listeners to all inputs for change and mousemove events
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  </script>
</body>
</html>

Explanation with comments:

HTML:
It's a basic HTML document structure with 
<head> and <body>.
Inside <head>, there's a title and a link to 
an icon.
Inside <body>, there's a <h2> heading, a 
    <div> with class "controls" containing 
    various input elements (range inputs and 
    a color input), an <img> element, and 
    finally, there's a <script> tag for 
    JavaScript code.

CSS:
It defines CSS variables (--base, --spacing, 
--blur) inside :root pseudo-class, which sets 
default values.
It styles the <img> element using CSS variables
for padding, background, and blur.
It styles the highlighted text with the color 
from the --base CSS variable.
There are additional styles for body, 
controls container, and input elements.

JavaScript:
It selects all input elements with the class 
"controls".
It defines a function handleUpdate to handle 
input changes.
Inside handleUpdate, it gets the suffix 
(like 'px') from data-sizing attribute of 
input or defaults to an empty string.
It updates the CSS variable value based on 
the input value and suffix.
It adds event listeners to all inputs for 
both 'change' and 'mousemove' events, 
triggering handleUpdate function.
