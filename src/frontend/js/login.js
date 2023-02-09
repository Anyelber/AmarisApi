$(document).ready(() => {
  const BASE_URL = "http://localhost:3000/";

  $("#login").click(function () {
    let email = $("#email").val();
    let password = $("#password").val();
    axios
      .post(BASE_URL + "auth", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.result) {
          let token = res.data.token;
          localStorage.setItem("token", token);
          window.location = "./index.html";
        } else {
          Swal.fire("", res.data.msg, "error");
        }
      });
  });

  $("#password").keydown((e) => {
    if (e.which == 13) {
      $("#login").click();
    }
  });
});
