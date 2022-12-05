const names = ["Anakin","Obi-Wan","Luke","Liea"];
const age = [23,25,20,21]
function myFunction() {
    let Len = names.length;
    let text = "<table id=data>"
    text += "<tr> <th>" + "S.no" +"</th> <th>" + "Name" +"</th> <th>"+ "Age" +"</th> <tr>"
    for (let i = 0; i < Len; i++) {
        text += "<tr> <td>" + (i+1) + "</td> <td>" + names[i] + "</td> <td>" + age[i] + "</td> </tr>";
    }
    text += "</table>"
    document.getElementById("demo").innerHTML = text;
}