//doesnt work
 
const cssRules = `
  .afCombobox__chip-text {
    user-select: text;
  }
`;

// 2. Create the style element
const styleElement = document.createElement('style');
styleElement.type = 'text/css'; // Optional in modern browsers

// 3. Inject the CSS content
styleElement.textContent = cssRules;

// 4. Append to the head
document.head.appendChild(styleElement);