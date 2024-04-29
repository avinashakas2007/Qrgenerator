
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
  
    {
        "message":"Enter the URL:",
    "name":"URL",
},
    
  ])
  .then((answers) => {
    console.log(answers);
    const url=answers.URL;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream("qr_img.png"));
fs.writeFileSync("URL.txt",url);
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });