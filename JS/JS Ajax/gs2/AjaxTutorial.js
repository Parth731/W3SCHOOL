
document.getElementById(`btnajax`).addEventListener(`click`,makerequest);

function makerequest(){

    console.log("button clicked");

    //1.  object create
    const xhr = new XMLHttpRequest();
    console.log("ReadyState",xhr.readyState)
    
    //2. request sent to data.txt file
    // xhr.open("GET","data2.txt",true);
    xhr.open("GET","data.txt",true);
    console.log("ReadyState",xhr.readyState)
    
    //4.  when reponse come, handled onreadystatechane
    xhr.onreadystatechange = () => {
        
        console.log("ReadyState",xhr.readyState)

        if(xhr.readyState === 4 /*4*/){
            if(xhr.status === 200){

                console.log(xhr);
                console.log(xhr.responseText);


            }
            else{
                console.log("problem Occured");
            }
        }
    };

    //3. send request
    xhr.send();
    console.log("ReadyState",xhr.readyState)

    console.log("process done");



}