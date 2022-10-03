function tracker() {
    const prompt = require("prompt-sync")();
    let name = prompt("Good day user, please input your name ");
    let question = prompt("I trust you are having a great day ");

    if (question ==="yes"){
        console.log(`Oh great! ${name}`);
    }else if(question === "no"){
            console.log(`Sorry about that ${name}`);
    } 

    let question1 = (prompt("will you like to go for a jog today?")) 

    if (question1==="yes"){
        let firstJog = parseInt(prompt(`For how long would you like to jog? `));
        console.log(`You have jogged for ${firstJog}. You did great`);

        // first session continue
        let cont = prompt(`Would you like to continue? `);
        if (cont === "Yes") {
            let secondJog = parseInt(prompt(`For how long would you like to jog? `));
            console.log(`Your second session has elapsed and you jogged for ${secondJog}. You did well`);

            // second session continue
            let cont = prompt(`Would you like to continue? `);

            if (cont === "Yes") {
                
            }
        } else if (cont === 'no') {
            console.log(`You jogged for ${firstJog}. Thank you, have a nice day.`)
        }
    }else if (question1 === 'no') {
        console.log("Thank you very much");
    }

    
 }
tracker();


