const BASE_URL = "http://localhost:3000/";
let token = localStorage.getItem("token");

const editSlider = (id, agency_store_name, description, image) => {
  $("#id_editar").val(id);
  $("#agency_store_name_editar").val(agency_store_name);
  $("#description_editar").val(description);
  $("#imagen_editar").val(image);
  $("#editSlider").modal("show");
};

const deleteSlider = (id) => {
  Swal.fire({
    title: "¿Seguro quieres eliminar esta tarjeta?",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Si",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .post(BASE_URL + "deleteSliderInfo", {
          token,
          id,
        })
        .then((res) => {
          if (res.data.result) {
            Swal.fire("", res.data.msg, "success");
            setTimeout(() => {
              window.location = "";
            }, 2000);
          } else {
            Swal.fire("", res.data.msg, "error");
          }
        });
    }
  });
};

$(document).ready(() => {
  axios
    .post(BASE_URL + "verifyToken", {
      token: token,
    })
    .then((e) => {
      if (!e.data.result) {
        window.location = "./login.html";
      }
    });

  $("#logout").click(() => {
    localStorage.removeItem("token");
    window.location = "login.html";
  });

  $("#save").click(() => {
    let agency_store_name = $("#agency_store_name").val();
    let description = $("#description").val();
    let image = $("#imagen").val();
    axios
      .post(BASE_URL + "saveSliderInfo", {
        token,
        agency_store_name,
        description,
        image,
      })
      .then((e) => {
        if (e.data.result) {
          Swal.fire("", e.data.msg, "success");
          setTimeout(() => {
            window.location = "";
          }, 2000);
        } else {
          Swal.fire("", e.data.msg, "error");
        }
      });
  });

  $("#loadingContent").html(`
    <tr>
        <td colspan="6"><center>Loading...</center></td>
    </tr>
  `);

  axios.post(BASE_URL + "getSlidersInfo", { token }).then((e) => {
    res = e.data;
    $("#loadingContent").html("");
    if (res) {
      res.forEach((slider) => {
        $("#loadingContent").append(`
                <tr>
                    <td>${slider.agency_store_name}</td>
                    <td>${slider.description}</td>
                    <td><img src="${slider.image}" style="max-width: 100px; max-height: 100px;"/></td>
                    <td>${slider.created_by}</td>
                    <td>
                    <a href="#" onclick="editSlider(${slider.id}, '${slider.agency_store_name}', '${slider.description}', '${slider.image}')">Edit</a>
                    <a href="#" onclick="deleteSlider(${slider.id})">Delete</a>
                    </td>
                </tr>
            `);
      });
    } else {
      Swal.fire("", "Error getting slider data", "error");
    }
  });

  $("#editar").click(() => {
    let id = $("#id_editar").val();
    let agency_store_name = $("#agency_store_name_editar").val();
    let description = $("#description_editar").val();
    let image = $("#imagen_editar").val();

    axios
      .post(BASE_URL + "updateSliderInfo", {
        token,
        id,
        agency_store_name,
        description,
        image,
      })
      .then((res) => {
        if (res.data.result) {
          Swal.fire("", res.data.msg, "success");
          setTimeout(() => {
            window.location = "";
          }, 2000);
        } else {
          Swal.fire("", res.data.msg, "error");
        }
      });
  });
});
