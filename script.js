function agregarHombres(){
    let points = document.getElementById("points").value;
    let description = document.getElementById("description").value; 
    
    if(!points || !description){
        alert("Uno de los campos se encuentra vacio")
    }else{
        let data = {
            number: points,
            description: description
        }
        console.log(data)
        fetch("https://backend-ipc-jov.onrender.com/h-points/", {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': '*/*'
            },

        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }

}

function agregarMujeres(){
    let points = document.getElementById("points").value;
    let description = document.getElementById("description").value; 
    
    if(!points || !description){
        alert("Uno de los campos se encuentra vacio")
    }else{
        let data = {
            number: points,
            description: description
        }
        console.log(data)
        fetch("https://jovenespdc.herokuapp.com/m-points/", {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': '*/*'
            },

        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }

}