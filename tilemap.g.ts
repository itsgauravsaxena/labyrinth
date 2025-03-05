// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "myfirstlabyrinth":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101020000000504000000050004000000010101000000010000010101010101000101000000010000000000000105000001010001010101000101000101010001010100000005040000010000040000000101010100010100000101050101010001010000000001000004000001000005010100010105010105010100010100010101000001000000000100000500000001010101010100010001010001010100010100000000050100040000010000000101000101000101010100010100010101010000010000000000000000000000010101010101010101000000000000000301010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . 2 . . . . . 2 . . . 2 
2 2 . . . 2 . . 2 2 2 2 2 2 . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . 2 2 2 2 . 2 2 . 2 2 2 . 2 2 
2 . . . . 2 . . 2 . . 2 . . . 2 
2 2 2 . 2 2 . . 2 2 . 2 2 2 . 2 
2 . . . . 2 . . 2 . . 2 . . . 2 
2 . 2 2 . 2 2 . 2 2 . 2 2 . 2 2 
2 . . 2 . . . . 2 . . . . . . 2 
2 2 2 2 2 . 2 . 2 2 . 2 2 2 . 2 
2 . . . . . 2 . 2 . . 2 . . . 2 
2 . 2 2 . 2 2 2 2 . 2 2 . 2 2 2 
2 . . 2 . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.dungeon.darkGroundNorthWest1,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
