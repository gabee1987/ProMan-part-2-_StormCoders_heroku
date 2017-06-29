function getCards(boardId){
    var idObj = {
                'id': boardId
            }
    var data = JSON.stringify({idObj});
    JSON.stringify({data});
    $.ajax({
        type : 'POST',
        url : '/get-cards',
        contentType: 'application/json;charset=UTF-8',
        data : JSON.stringify({data}),
        success : function(response) {
            console.log(response);
            removeElementsByClass('card mb-3');
            $('#addCardTitle').val('');
            for (let c = 0; c < response.length; c++) {
                var cardTitle = response[c]['card-title'];
                var cardStatus = 'new';
                createCard(boardId, cardStatus, cardTitle);
            }
        },
        error: function(error) {
            alert('Failed to get boards!');
            console.log(error);
        },
        dataType: 'json'
    });
}


function getBoards() {
    $.ajax({
            type : 'GET',
            url : '/get-boards',
            contentType: 'application/json;charset=UTF-8',
            success : function(response) {
                for (let b = 0; b < response.length; b++) {
                    createBoard(response[b]['title'], response[b]['state'], response[b]['id'])
                }
            },
            error: function(error) {
                alert('Failed get boards!');
            },
            dataType: 'json'
        });
    }
