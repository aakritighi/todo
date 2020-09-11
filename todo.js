function add() {
    let str = document.getElementById("mytext").value;
    document.getElementById('todoItems').innerHTML +="<li>"+str+"</li>";
    document.getElementById('mytext').value = ''
}