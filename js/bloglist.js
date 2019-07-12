

function confirmOption(){
    document.getElementById('deleteModal').style.display = 'block';
    document.querySelector('.btn-confirm.btn-green').addEventListener('click', function(){
            document.getElementById('deleteModal').style.display = 'none';
    });
}






// This functin actually deletes the posts
// (In the eventListener, the funtion call should be -> confirmOption(del[i]) )
/*function confirmOption(delButton){
    return function(){
        
        document.getElementById('deleteModal').style.display = 'block';
        document.querySelector('.btn-confirm.btn-red').addEventListener('click', function(e){
           let post = delButton.parentElement.parentElement;
            post.parentElement.removeChild(post);
            document.getElementById('deleteModal').style.display = 'none';
        });
        document.querySelector('.btn-confirm.btn-green').addEventListener('click', function(){
            document.getElementById('deleteModal').style.display = 'none';
        })
    }
}*/











let del = document.querySelectorAll('.fa.fa-trash.delete');
for( let i=0; i<del.length; i++){
    del[i].addEventListener('click', confirmOption);
}