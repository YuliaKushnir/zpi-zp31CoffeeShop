document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = loginForm.elements.email;
      const passwordInput = loginForm.elements.password;

      if (!emailInput.value.trim() || !passwordInput.value.trim()) {
        alert("Всі поля мають бути заповнені");
        return; 
      }

      const formData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
      };

      console.log(formData);

      loginForm.reset();
    });
});
