const puppeteer = require('puppeteer')
const uuid = require('crypto')
// function logInApi (matricNumber, password){
//     return new Promise((resolve, reject)=>{
//         puppeteer
//         .launch({headless:true}).then(async browser => {
//         const page = await browser.newPage();
//         await page.setRequestInterception(true);
//         page.on('request', (req) => {
//             if(req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image'){
//                 req.abort();
//             }
//             else {
//                 req.continue();
//             }
//         });
//         await page.goto('https://www.biuportal.net/LogIn.aspx#', {waitUntil: 'load', timeout: 100000})
//         await page.click('a#modalCloseBtn');
//         await page.type('#txtUserName', matricNumber);
//         await page.type("#txtPassword", password);
//         await page.click("#btnLogin")
//         await page.waitForSelector("span#lblErrorMessage")
//         .then(async ()=>{
//             const error = await page.$eval("span#lblErrorMessage", el=>el.innerHTML)
//             reject( {error:error})
//         })
//         .catch( async (err)=>{
//           const name = await page.$eval("span#lblMasterStudentsName", el=>el.innerHTML)
//           resolve({name:name,matricNumber:matricNumber, password:password})
//         })
//       })
//       .catch( err=>{
//         reject( {error:"Please an error occurred "})
//       })

// })}

const logInApi = ( matricNumber, password)=>{
    return new Promise((resolve, reject)=>{
       resolve({name:"Username ", matricNumber, password})
    })
}

const authorization = () =>{
    
}

module.exports ={
    logInApi
}