class Fakt {
    constructor(facts) {
            this.facts = facts;
    }

    vymazLocalStorage() {
        localStorage.removeItem("fact");
    }
}

let pomocnyData;

$(document).ready(function () {

    var fact = new Fakt();
    $.ajax({
        url: "https://dogapi.dog/api/facts",
        dataType: "json",
        success: function (data) {
            pomocnyData = data;
            localStorage.setItem("fact", JSON.stringify(data));
            fact.facts = data.facts;
            $(".card-text").text(data.facts);

        },
        error: function () { // error callback
            alert('Error with connection to website');
        }
    });


    $(document).keydown(function (e) {

    });

    $("#generate").click(function () {
        refreshPage()
    });

    $("#like").click(function () {
        UlozFakt();
    });


    $("#details").click(function () {
        $("#my-table").show();
        $("#hide").show();
    });



});

function ulozFakt() {
    localStorage.setItem("fact", JSON.stringify(pomocnyData));
}
function refreshPage() {
    window.location.reload();
}


