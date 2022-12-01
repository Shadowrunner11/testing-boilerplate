#! /usr/bin/env node
import { exec } from 'child_process'
import { program } from 'commander'

testList = {
    endToEnd: () => exec('yarn endToEnd'),
    integration: () => exec('yarn integration'),
    unittest: () => exec('yarn unittest')
}

function test({options}){
    if(options){
        options.map(option =>{
            try {
                testList[option]()
            } catch (error) {
                console.log(`${option} invalid option`)                
            }
        })    
            
    }
}

program
    .command('test')
    .description('Run test')
    .option('-o, --options <options...>')
    .action(test)

