function main() {
    getBoards();


    $('#addBoardButton').on('click', function() {
        var boardTitle = $('#addBoardTitle').val();
        var boardState = 'active';
        //if input is empty alert the user
        if($('#addBoardTitle').val() == '') {
            $('#alert-main').html('<strong>Warning!</strong> You left the title empty');
            $('#alert-main').fadeIn().delay(1000).fadeOut();
            return false;
        };
        saveBoard(boardTitle, boardState);
    });


    $('#viewBoard').on('click', function(){
        var boardId = $(this).attr('data-id');
        getCards(boardId);

    });
    
    $('#add-card-button').on('click', function() {
        var boardId = $('.hidden-id').text();
        var cardTitle = $('#addCardTitle').val();
        var cardStatus = 'new';
        //if input is empty alert the user
        if($('#addCardTitle').val() == '') {
            $('#alert-main-card').html('<strong>Warning!</strong> You left the title empty');
            $('#alert-main-card').fadeIn().delay(1000).fadeOut();
            return false;
        };
        saveCard(boardId, cardTitle, cardStatus);
    });

    $(document).on('click', '.view', function() {
        var boardId = $(this).data('boardid');
        $('#detailedBoard').data('boardid', boardId);
        
    });


    $('#detailedBoard').on('show.bs.modal', function (event) {
        
        var button = $(event.relatedTarget);
        var boardId = button.data('boardid');
        var boardTitle = button.data('boardtitle');
        var modal = $(this);
        modal.find('.modal-title').text(boardTitle);
        modal.find('.hidden-id').text(boardId);
        getCards(boardId);
    });

  
    
    
}

$(document).ready(main());