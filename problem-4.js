/** Problem 04 - (Delete / Store) */
var fileName = "slipdf.pdf";

var temp = fileName.split(".");
var startWithHash = fileName.slice(0, 1);
if (temp[1] == "pdf" || temp[1] == "docx" || startWithHash === "#") {
  console.log("Store");
} else {
  console.log("Delete");
}
