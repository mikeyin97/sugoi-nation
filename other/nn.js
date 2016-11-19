var url = 'http://localhost/8000';

$.getJSON("http://localhost/8000", {},
    function (data) {
        $.each(data.items, doSomething1);
    alert('success')
    });

$.ajax({
    type: 'GET',
    url: url,
    async: false,
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
        alert(this.url);
        console.log(data);
    },