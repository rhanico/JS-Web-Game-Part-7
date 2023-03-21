// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately

async function moveNPC(){

    await npc.walkEast  ( 1015 )
    await npc.walkNorth ( 650 )
    await npc.walkEast  ( 460 )
    await npc.walkSouth ( 790 )
    await npc.walkEast  ( 750 )
    await npc.walkSouth ( 190 )
    await npc.walkWest  ( 1215 )
    await npc.walkNorth ( 1100 )
    await npc.walkEast  ( 601 )
    await npc.walkNorth ( 300 )
    await npc.walkEast  ( 201 )
    await npc.walkWest  ( 700 )
    await npc.walkNorth ( 300 )
    await npc.walkWest  ( 700 )
    await npc.walkSouth ( 2144 )
    
                                        //console.log(npc.walkEast);
}
moveNPC()

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)