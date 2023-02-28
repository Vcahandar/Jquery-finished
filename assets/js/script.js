$(document).ready(function () {

    let users = [];
    if (localStorage.getItem("users") != null) {
        users = JSON.parse(localStorage.getItem("users"))
    }

    $("button").click(function () {
        $("ul").empty();

        if ($(".name").val() == "" || $(".surname").val() == "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Input Cannot Be Empty!',
              })
            return;
        }



        let userName = $(".name").val()
        let userSurname = $(".surname").val()

        users.push({
            id: userName + new Date().getMilliseconds(),
            name: userName,
            surname: userSurname
        })
        localStorage.setItem("users", JSON.stringify(users))

        for (const item of users) {
            $("ul").append(`<li data-id=${item.id} class="list-group-item text">${item.name + " " + item.surname}</li>`);
            $(".name").val("")
            $(".surname").val("")
        }

        removeLi($("ul li"));

        dltIcon();




    })

    for (const item of users) {
        $("ul").append(`<li data-id=${item.id} class="list-group-item text ">${item.name + " " + item.surname}</li>`);
    }

    removeLi($("ul li"));

    dltIcon();








    function removeLi(li) {

        li.click(function () {
            users = users.filter(u => u.id != $(this).attr("data-id"))
            localStorage.setItem("users", JSON.stringify(users))
            $(this).remove();
        })

    }

    function dltIcon() {
        $(".delete").click(function () {
            localStorage.clear()
            $("ul").remove();
        })
    }




})
