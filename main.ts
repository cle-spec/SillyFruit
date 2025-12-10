let newFruit: FusionResult = null
function fuse_a_fruit () {
    newFruit = sillyfruit.fuse(FruitKind.Apple, FruitKind.Banana)
    if (newFruit == sillyfruit.fuse(FruitKind.Apple, FruitKind.Banana)) {
        console.log("You made a APPNANA!")
    }
}
