
//this function takes the element using ID and runs and returns the value from textarea (let --> "store variable" , .value --> "store value")
function run(){
    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let jscode = document.getElementById("js-code").value;
    let output = document.getElementById("output");
    
    //to display the value in output
    output.contentDocument.body.innerHTML = htmlcode +"<style>"+csscode+"<style>";
    //js code
    output.contentWindow.eval(jscode);

}