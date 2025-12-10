// tests go here; this will not be compiled when this package is used as an extension.
let newFruit: FusionResult = null
function fuse_a_fruit() {
    newFruit = sillyfruit.fuse(FruitKind.Apple, FruitKind.Banana)
    if (newFruit == sillyfruit.fuse(FruitKind.Apple, FruitKind.Banana)) {
        console.log("You made a APPNANA!")
    }
}
