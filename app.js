let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact;
})

async function getFacts() {
    try{
        let res = await axios.get(url);
    return res.data.fact;
    } catch(err){
        console.log("Error", err);
        return "Not found";
    }
    
}