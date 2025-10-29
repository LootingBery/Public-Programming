// Calculate and display age ("alder") as a string in the DOM
let alder = 19;

// If today's date is on/after April 6th, increment the age
(function updateAlder() {
  const today = new Date();
  const month = today.getMonth() + 1; // 1-12
  const day = today.getDate(); // 1-31
  const isAfterOrOnBirthday = month > 4 || (month === 4 && day >= 6);
  if (isAfterOrOnBirthday) alder += 1;
})();

// Ensure it's inserted as text (string) into the element
const alderEl = document.getElementById("alderTekst");
if (alderEl) {
  alderEl.textContent = String(alder);
}
