let sendform = () => {
  // e.preventDefault();
  const address = "customerservice.lre@gmail.com";
  const btnSub = document.getElementById("btnSub2");
  const tohide1 = document.getElementById("tohide1");
  const toshow1 = document.getElementById("toshow1");
  const field1 = document.getElementById("fnameForm");
  const field11 = document.getElementById("lnameForm");
  const field2 = document.getElementById("phoneForm");
  const field3 = document.getElementById("emailForm");
  const field4 = document.getElementById("messageForm");
  let ebody = `
  <span>Name: </span> ${field1.value}${" "}${field11.value}
  <br>
  <span>Phone: </span> ${field2.value}
  <br>
  <span>Email: </span> ${field3.value}
  <br>
  <span>Message: </span> ${field4.value}
  <br>
  
  `;
  btnSub.setAttribute("disabled", true);

  Email.send({
    SecureToken: "28546187-5ff8-4bf8-bc03-761adafdb70d",
    To: address,
    From: address,
    Subject: "Lin Real Estate Contact Form.",
    Body: ebody,
  }).then((message) => {
    if (message === "OK") {
      console.log(message);
      tohide1.style.display = "none";
      toshow1.style.display = "block";
    } else {
      alert("There is something went wrong, pleasy try again");

      console.log(message);
    }
  });
};
