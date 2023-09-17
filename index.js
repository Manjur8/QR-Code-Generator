import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        name: "url",
        message: "Type Message"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.url;
    var qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream('qr-images/qr-img.png'));

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment")
    } else {
      // Something else went wrong
      console.log('Something sent wrong')
    }
  });
