
/********** Edit and Save Options for The Post **************/

function editPost(e){
    //changing buttons
    e.currentTarget.style.display = 'none';
    document.getElementById('saveButton').style.display = '';
    
    //chnging blog body
    let para = document.getElementById('blogBody');
    
    let textArea = document.createElement('textarea');
    textArea.innerText = para.innerText;
    textArea.style.width = '100%';
    textArea.style.height = '300px';
    textArea.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    textArea.style.fontSize = '1rem';
    
    document.querySelector('.blogText').replaceChild(textArea, para);
    
    //changing title part
    title = document.getElementById('blogTitleNew');
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = title.innerText;
    input.style.padding = '5px 8px';
    input.style.fontFamily = "'Abel', sans-serif";
    input.style.fontSize = '1rem';
    input.style.width = '300px';
    document.getElementById('blogTitle').replaceChild(input, title);
}

function savePost(e){
    //changing button
    e.currentTarget.style.display = 'none';
    document.getElementById('editButton').style.display = '';
    
    //saving blog body
    let textArea = document.querySelector('.blogText textarea');
    let p = document.createElement('p');
    p.id = "blogBody";
    p.innerText = textArea.value;
    
    document.querySelector('.blogText').replaceChild(p, textArea);
    
    //saving title
    let h = document.createElement('h');
    let inp = document.querySelector('#blogTitle input');
    h.id = 'blogTitleNew';
    h.innerText = inp.value;
    document.getElementById('blogTitle').replaceChild(h, inp);
    
}

document.getElementById('editButton').addEventListener('click', editPost);
document.getElementById('saveButton').addEventListener('click', savePost);

/********************************************************************************/

/***************** Like Button *************************/

function liked(e){
    e.currentTarget.innerHTML = `<i class="fa fa-thumbs-o-up"></i> Liked!`;
    e.currentTarget.nextElementSibling.innerText = '1 person likes this!';
}

document.querySelector('.like .post-button').addEventListener('click', liked);

/*******************************************************************************/

/****************** Comments *******************/

function addComment(){
    let value = document.querySelector('.commentBox').value;
    if (value != ''){
        let li = document.createElement('li');
        li.innerText = value;
        let list = document.querySelector('.commentList');
        list.insertBefore(li, list.childNodes[0]);
    }
}

document.querySelector('.post-button.comment-button').addEventListener('click', addComment);




















