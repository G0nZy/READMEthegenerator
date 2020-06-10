// const fs = require('fs');



//     const writeFile = (nameOfFile, message) => {
//         fs.writeFile(nameOfFile, message, () =>{
//             console.log("wrote to file");
//             });
//     }




//     writeFile('test.txt', 'halo');
    


    // go into your terminal, type
    // node test.js 
    // watch as it writes text to a txt file
    // it will overwrite what you wrote originally
    // if you redo it



            const templateData = require("./Template.js");
                const fs = require('fs');
                const inquirer = require('inquirer');


                inquirer 
                    .prompt ([
     {
         type: "input",
         name: "title",
            message: "What's the name of your Project?"
                        },
                         {   type: "input",
                            name: "dev",
                            message: "Whose its creator."
                        },
                        {
                            type: "input",
                            name: "meaning",
                            message: "whats its purpose."
                        },
                        {
                            type: "input",
                            name: "installation",
                            message: "How to install?"
                        },
                        {
                            type: "input",
                            name: "year",
                            message: "Year it was born?"
                         },
                        
                        
                        {
                            type: "input",
                            name: "git",
                            message: "Whats your git"
                        },
                        {
                            type: "input",
                            name: "email",
                            message: "Whats your elecontronic mailing address?"
                        },
                    ]).then(function(data) {
                        const stringToWrite = templateData(data);
                    
                      fs.writeFile("README.md", stringToWrite, function(err) {
                    
                        if (err) {
                          return console.log(err);
                        }
                    
                        });
                    });
            