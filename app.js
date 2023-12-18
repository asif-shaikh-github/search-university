// BELOW CODE IS FOR SEARCHING UNIVERISITIES IN INDIA BUT USER PROVIDED STATE

let urlIndia = "http://universities.hipolabs.com/search?country=india";
let btnIndia = document.querySelector('#btnIndia');
let inputEnterIndia = document.querySelector('#searchIndianCollege');


btnIndia.addEventListener("click", async()=>{
    let collegeArrayIndia = await getCollegeIndia();
    showCollegeIndia(collegeArrayIndia);
});

function showCollegeIndia(collegeArray) {
    let inputElement = document.querySelector('#searchIndianCollege');
    
    if (!inputElement) {
        console.error('Input element not found.');
        return;
    }

    let state = inputElement.value.toLowerCase();
    let list = document.querySelector('#listIndia');
    
    if (!list) {
        console.error('List element not found.');
        return;
    }

    list.innerText = "";

    for (col of collegeArray) {
        if (col["state-province"]) {
            // Convert to lowercase for case-insensitive comparison
            if (state === col["state-province"].toLowerCase()) {
                let li = document.createElement("li");
                li.innerText = col.name;
                list.appendChild(li);
                console.log(col);
            }
        }
    }
}



async function getCollegeIndia(){
    try{
        let res = await axios.get(urlIndia);
        return res.data;
    }catch(e){
        console.log("Error is - ",e);
        return [];
    }
    
}

inputEnterIndia.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            btnIndia.click();
        }
    });










// BELOW CODE IS FOR SEARCHING UNIVERSITIES ALL OVER GLOBE USING NAME


let urlGlobal = "http://universities.hipolabs.com/search?name=";

let btnGlobal = document.querySelector('#btnGlobal');
let inputEnterGlobal = document.querySelector('#searchGlobalCollege');
btnGlobal.addEventListener("click",async()=>{
    let country = document.querySelector('#searchGlobalCollege').value;
    let collegeArray = await getCollege(country);
    console.log(collegeArray);
    show(collegeArray);
});

function show(collegeArray){
    let list = document.querySelector('#listGlobal');
    list.innerText = "";
    for(col of collegeArray){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
};

async function getCollege(country){
    try{
        let res = await axios.get(urlGlobal+country);
        return res.data;
    }catch(e){
        console.log("error - ",e);
        return [];
    }
};

inputEnterGlobal.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        btnGlobal.click();
    }
})




