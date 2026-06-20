body{
    font-family: Arial, sans-serif;
    background:#f4f4f4;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    margin:0;
}

.container{
    background:#fff;
    padding:30px;
    width:420px;
    border-radius:10px;
    box-shadow:0 0 15px rgba(0,0,0,0.2);
    text-align:center;
}

h1{
    margin-bottom:20px;
}

.input-group{
    display:flex;
    gap:10px;
}

input{
    flex:1;
    padding:10px;
    font-size:16px;
}

#toggleBtn{
    padding:10px;
}

button{
    margin-top:10px;
    padding:10px 20px;
    cursor:pointer;
    border:none;
    border-radius:5px;
    background:#007bff;
    color:white;
}

button:hover{
    background:#0056b3;
}

.strength-bar{
    width:100%;
    height:12px;
    background:#ddd;
    border-radius:10px;
    margin-top:15px;
    overflow:hidden;
}

#strength-fill{
    height:100%;
    width:0%;
    transition:0.4s;
}

#result{
    margin-top:15px;
    font-size:18px;
    font-weight:bold;
}

.requirements{
    text-align:left;
    margin-top:20px;
}
