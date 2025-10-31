import chalk from 'chalk';
import { greet } from './greeting.js';

export function displayColorfulMessage() 
{
    console.log(chalk.red.bold('This text is red and bold!'));
}

