const words = [
  { greek: "Χαίρετε", italian: "Ciao" },
  { greek: "Ευχαριστώ", italian: "Grazie" }
];
let mode = 'greek-italian';
let currentWord = 0;

function showTranslation() {
  const text = document.getElementById("text");
  if (mode === 'greek-italian') {
    text.textContent = words[currentWord].italian;
  } else {
    text.textContent = words[currentWord].greek;
  }
}

document.getElementById("toggle-mode").addEventListener("click", () => {
  mode = mode === 'greek-italian' ? 'italian-greek' : 'greek-italian';
  document.getElementById("toggle-mode").textContent = 
    `Modalità: ${mode === 'greek-italian' ? 'Greco → Italiano' : 'Italiano → Greco'}`;
  currentWord = (currentWord + 1) % words.length;
  document.getElementById("text").textContent = mode === 'greek-italian' ? words[currentWord].greek : words[currentWord].italian;
});

function sendMessage() {
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;
  if (!username || !message) return;
  
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<p><strong>${username}</strong>: ${message}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  
  document.getElementById("message").value = '';
}
