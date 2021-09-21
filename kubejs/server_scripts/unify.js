//priority: 10000
events.listen('recipes', function (e) {

    // Arrivée à 2:59:35
    replaceIO()
    
    function replaceIO(input, output) {
        e.replaceInput({}, input, output)
        e.replaceOutput({}, input, output)
    }

})