/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";  
var start, part, end;

start = fileName[0];  
part = fileName.split(".");  
end = part[part.length - 1];  

if (start === "#" || end === "pdf" || end === "docx") {
    console.log("Store");
} else {
    console.log("Delete");
}