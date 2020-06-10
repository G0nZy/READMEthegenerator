function templateData(data) {
    return `


##### ${data.title} #####   #Copyright${data.year}#

## ${data.dev} ##  

## ${data.git} ## ## ${data.email} ##

                ###### Description ######

            
                     ${data.meaning}




    ####### how to INSTALL #######

    ${data.installation}




    ## FAQ ##

        `;
}

        module.exports = templateData;
