const input = document.querySelector("#input");
input.addEventListener("change", ()=> {
    const file = input.files.item(0);
    fileToText(file, (text)=>{
        list = text;
        alert(list);
    })
    
});
alert("list " + list);
function fileToText(list, callback){
    const reader = new FileReader();
    reader.readAsText(list.txt);
    reader.onlaod=()=>{
        callback(reader.result);
        document.getElementById("printlist").innerHTML = reader.result;
    };
}

fileToText(list,callback);