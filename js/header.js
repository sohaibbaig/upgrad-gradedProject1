function showSignIn(){
    document.getElementById('modalSignUp').style.display = 'none';
    var si = document.getElementById('modalSignIn');
    si.style.display = 'block';
}
function showSignUp(){
    document.getElementById('modalSignIn').style.display = 'none';
    document.getElementById('modalSignUp').style.display = 'block';
}

function hideSign(){
    document.getElementById('modalSignUp').style.display = 'none';
    document.getElementById('modalSignIn').style.display = 'none';
}
