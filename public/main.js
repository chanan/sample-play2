require(['webjars!jquery.min.js'], function() {
    require(['webjars!bootstrap.min.js'], function() {
        $("#showModalButton").bind('click', function(event) {
            $('#myModal').modal()
        })
    })
})