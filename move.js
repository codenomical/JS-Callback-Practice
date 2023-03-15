
// I'm assuming this is the setting the location of moving any object in a fixed location. I think I might be wrong so I'll research it more and see if I need to change my answer.
function move(element) 
{
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) 
    {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }



    // As far as I understand this, the key and movement of the functions that moves the character are all nested underd this function. I think it's the starting default point along the x and y axis for the character, but the character's img position is based on the location you set on the index.js. 
    function moveWithArrowKeys(left, bottom, callback) 
    {
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        // Originally moveCharacter() was written in index.js to have the character move by pressing the arrow keys. As far as I understand it, the character moves along the y and x axis. moveCharacter() is utilitzing the document.addEventListener parameter ('keydown') by calling back direction. All the e.keys are tied to each direction and an arrowkey. The document.addEvetListener with the parameter ('keyup') will stop the character from moving once you release the key. The setInterval(moveCharacter, 1) will allow the character to move at a specific rate, thus controlling its speed. 
        function moveCharacter() 
        {
            if(direction === 'west')
            {
                x -= 1
            }

            if(direction === 'north')
            {
                y += 1
            }

            if(direction === 'east')
            {
                x += 1
            }

            if(direction === 'south')
            {
                y -= 1
            }

            element.style.left = x + 'px'
            element.style.bottom = y + 'px'

        }

        setInterval(moveCharacter, 1) {
            if(moveCharacter)
        }

        document.addEventListener('keydown', function(e) 
        {
            if(e.repeat) return;

            if(e.key === 'ArrowLeft') 
            {
                direction = 'west'
            }
            
            if(e.key === 'ArrowUp') 
            { 
                direction = 'north'                
            }
            
            if(e.key === 'ArrowRight') 
            {
                direction = 'east'
            }
            
            if(e.key === 'ArrowDown') 
            {
                direction = 'south'
            }
            callback(direction)

        });

        document.addEventListener('keyup', function(e) 
        {
            direction = null
            callback(direction)

        });

    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    
    }

}