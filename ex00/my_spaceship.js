function my_spaceship(flightPath) {
    let x = 0, y = 0;
    let direction = 'up';

    for(const command of flightPath){
        switch (command) {
            case 'R':
                // for turning right
                if(direction === 'up'){
                    direction = 'right';
                }
                else if (direction === 'right'){
                    direction = 'down';
                }
                else if (direction === 'down'){
                    direction = 'left';
                }
                else{
                    direction = 'up';
                }

                break;

            case 'L':
                // for turning left
                if (direction === 'up'){
                    direction = 'left';
                }
                else if (direction === 'left'){
                    direction = 'down';
                }
                else if (direction === 'down'){
                    direction = 'right';
                }
                else{
                    direction = 'up';
                }

                break;

            case 'A':
                // for forward advancement
                if (direction === 'up'){
                    y--;
                }
                else if (direction === 'left'){
                    x--;
                }
                else if (direction === 'right'){
                    x++;
                }
                else{
                    y++;
                }

                break;

                default:
                    // ignore wrong commands
                    break;
        
        }


    }

   

    return `{x: ${x}, y: ${y}, direction: '${direction}'}`;
}


//console.log(my_spaceship(flightPath));


