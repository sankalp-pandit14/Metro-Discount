function checkDiscount() {
  const gender = document.getElementById("gender").value;
  const age = Number(document.getElementById("age").value);
  const result = document.getElementById("result");

 
  if (gender === "" || age <= 0) {
    result.innerText = "❌ Please enter valid age and gender";
    result.style.color = "red";
    return;
  }

  let discount;

  if (age < 5) {
    discount = "🎉 Free Ticket";
  } else if (age < 8) {
    discount = "🎟️ 50% Discount";
  } else if (gender === "FEMALE") {
    discount = "🎟️ 50% Discount for Women";
  } else if (age >= 65) {
    discount = "👴 30% Senior Citizen Discount";
  } else {
    discount = "❌ No Discount";
  }

  result.innerText = `✅ Discount Applied: ${discount}`;
  result.style.color = "green";
}
