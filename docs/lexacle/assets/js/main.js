  
    $('.newsletter-link').unbind().bind('click',function(e){
        e.preventDefault();
        function show_modal(){
            $('#myModal').modal('show');
        }

        $('#myModal').modal({
            keyboard: true,
            backdrop:true
        });
    })