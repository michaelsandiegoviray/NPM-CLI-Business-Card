#!/usr/bin/env node


import boxen from "boxen";
import chalk from "chalk";




console.log('This is a test')


const boxenOptions ={

    padding:1,
    width: 60,
    title:'Michael San Diego Viray',
    titleAlignment:'center',
    borderStyle: 'double',
    borderColor:'red'


}

const intro = chalk.bold('Hi! My name is Michael San Diego Viray. I love building full stack applications websites and helping BIPOC businesses find their presence online. Find me on the internet! ');

const links = [
    { name: chalk.hex("#fff").bgHex("#0f111a")("Website"), url: "   https://michaelsandiegoviray.netlify.com" },
    { name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"), url: "    https://github.com/michaelsandiegoviray" },
    { name: chalk.hex("#fff").bgHex("#6e5494")("Linkedin"), url: "    http://linkedin.com/in/msviray" },
,
    { name: chalk.hex("#fff").bgHex("#9146ff")("Twitch"), url: "    https://twitch.tv/masterflexyike" },
    { name: chalk.hex("#fff").bgHex("#1DA1F2")("Twitter"), url: "   https://twitter.com/masterflexyike" },
  ];
  
  const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");
  
  console.log(boxen(intro + linkList, boxenOptions));
  

