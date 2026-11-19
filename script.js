const service = document.querySelector('#service');
const repairs = document.querySelector('#repairs');
const total = document.querySelector('#total');

function showEstimate() {
  const count = Math.max(0, Math.floor(Number(repairs.value) || 0));
  total.textContent = 'EUR ' + (Number(service.value) + count * 5);
}

service.addEventListener('change', showEstimate);
repairs.addEventListener('input', showEstimate);
showEstimate();



const booking = document.querySelector("#booking");
const message = document.querySelector("#message");

booking.addEventListener("submit", function (event) {
  // Stop the form from actually being sent
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const slot = document.querySelector("#slot").value;

  if (!name || !slot) {
    message.textContent =
      "Please enter your name and choose a time slot. Nothing was sent or booked.";
    return;
  }

  message.textContent =
    `Thanks, ${name}. You selected ${slot}. Nothing was sent and nothing was booked: this page cannot take bookings yet.`;
});
