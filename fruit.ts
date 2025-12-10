
/**
 * Updates:
 * Add explode power
 *  block="explode"
    Explode

    case FruitPower.Explode:
    fruit.say("💥 BOOM!", 800);
    sprites.destroy(fruit, effects.fire, 500);
    break;

 */




// FRUIT TYPES
enum FruitKind {
    //% block="apple"
    Apple,
    //% block="banana"
    Banana,
    //% block="orange"
    Orange,
    //% block="pineapple"
    Pineapple,
    //% block="watermelon"
    Watermelon,
    //% block="grape"
    Grape
}

// SUPERPOWERS -----------------------------------------
enum FruitPower {
    //% block="heal"
    Heal,
    //% block="slip"
    Slip,
    //% block="spiky blast"
    Spiky,
    //% block="roll attack"
    Roll,
    //% block="split into minis"
    Split
}

// FRUIT WEATHER ----------------------------------------
enum FruitWeather {
    //% block="banana rain"
    BananaRain,
    //% block="pineapple storm"
    PineappleStorm,
    //% block="grape blizzard"
    GrapeBlizzard,
    //% block="orange meteors"
    OrangeMeteors
}

// FRUIT MOODS ------------------------------------------
enum FruitMood {
    //% block="happy"
    Happy,
    //% block="angry"
    Angry,
    //% block="confused"
    Confused,
    //% block="sleepy"
    Sleepy
}

// PHYSICS ---------------------------------------------
enum FruitPhysics {
    //% block="bouncy"
    Bouncy,
    //% block="heavy"
    Heavy,
    //% block="slippery"
    Slippery,
    //% block="floaty"
    Floaty
}

// QUESTS ----------------------------------------------
enum FruitQuest {
    //% block="escape blender"
    EscapeBlender,
    //% block="deliver banana message"
    BananaMessage,
    //% block="rescue grapes"
    RescueGrapes,
    //% block="hide from smoothie machine"
    HideSmoothie
}

// FRUIT FUSION RESULT ---------------------------------
enum FusionResult {
    //% block="appnana"
    Appnana,
    //% block="orangepine"
    Orangepine,
    //% block="grapemelon"
    Grapemelon
}
//% color=#FF8800 icon="\uf06c" block="Silly Fruit"
namespace sillyfruit {

    // Utility: create small fruit icons
    function fruitImage(kind: FruitKind): Image {
        switch (kind) {
            case FruitKind.Apple: return img`
                . . . . . . . e c 7 . . . . . .
                . . . . e e e c 7 7 e e . . . .
                . . c e e e e c 7 e 2 2 e e . .
                . c e e e e e c 6 e e 2 2 2 e .
                . c e e e 2 e c c 2 4 5 4 2 e .
                c e e e 2 2 2 2 2 2 4 5 5 2 2 e
                c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
                c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
                . e e e 2 2 2 2 2 2 2 2 2 4 e .
                . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
                . . 2 e e 2 2 2 2 2 4 4 2 e . .
                . . . 2 2 e e 4 4 4 2 e e . . .
                . . . . . 2 2 e e e e . . . . .
            `;
            case FruitKind.Banana: return assets.image`banana`;
            case FruitKind.Orange: return img`
                . . . 7 7 . . . . . . . . . . .
                . . . 6 7 7 . . . . . . . . . .
                . . . . 6 7 4 4 4 4 4 4 4 . . .
                . . . . 4 4 4 4 4 4 4 4 4 4 4 .
                . . . 4 4 4 4 4 4 4 d d 4 4 4 4
                . . . 4 4 4 4 4 4 4 4 d d 4 4 4
                . e 4 4 4 4 4 4 4 4 4 4 d d 4 4
                . e 4 4 4 4 4 4 4 4 4 4 4 d 4 4
                . e 4 4 4 4 4 4 4 4 4 4 4 4 4 4
                . e 4 4 4 4 4 4 4 4 4 4 4 4 4 4
                . e 4 4 4 4 4 4 4 4 4 4 4 4 4 4
                . e 4 4 4 4 4 4 4 4 4 4 4 4 4 4
                . e 4 4 4 4 4 4 4 4 4 4 4 4 4 4
                . . e 4 4 4 4 4 4 4 4 4 4 4 4 4
                . . e 4 4 4 4 4 4 4 4 4 4 4 4 4
                . . . e 4 4 4 4 4 4 4 4 4 4 4 .
                . . . . e e e e e e e 4 4 . . .
            `;
            case FruitKind.Pineapple: return img`
                . . . . . . . . . . . . . . . .
                . . . f 7 7 f f f 7 7 f . . . .
                . 5 7 6 f 6 6 5 6 6 f 6 7 5 5 .
                . 8 7 7 6 6 f 7 f 6 6 7 7 f . .
                . . f 7 7 f 7 7 7 f 7 7 f . . .
                . . . f 6 f 6 7 6 f 6 f . . . .
                . . . . f f 6 6 6 f f . . . . .
                . . . f d 5 d d d 5 d f . . . .
                . . f 5 5 4 4 5 4 4 5 4 f . . .
                . f 5 5 5 4 5 5 5 4 5 5 5 f . .
                . f 5 5 5 4 5 5 5 4 5 5 5 f . .
                . f 5 5 5 5 5 5 5 5 5 5 5 f . .
                . f 5 4 4 5 5 5 5 5 4 5 5 f . .
                . f 5 5 5 4 5 5 5 4 5 5 4 f . .
                . . f 4 5 4 5 5 5 4 5 4 f . . .
                . . . f f f f f f f f f . . . .
            `;
            case FruitKind.Watermelon: return img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . f f f f f f f . . . . . . .
                . f 7 7 7 4 3 3 c f . . . . . .
                . f 7 7 2 2 2 4 3 4 f f . . . .
                . f 7 2 2 f 2 2 4 3 3 4 f f . .
                . f 7 2 2 2 2 f 2 2 4 3 3 4 f .
                . f 7 2 f 2 2 2 2 2 2 2 4 3 b f
                . f 7 2 2 2 2 2 2 f 2 2 2 7 e f
                . f 7 7 2 2 f 2 2 2 2 2 7 7 f f
                . . f 7 7 2 2 2 2 2 2 7 7 f f .
                . . f f 7 7 2 2 2 2 7 7 f f f .
                . . . f f 7 7 7 7 7 7 f f f . .
                . . . . . f f f f f f f . . . .
            `;
            case FruitKind.Grape: return img`
                . . . . . f 7 7 7 f f f f 7 f .
                . . . f f f f f f f 7 7 7 7 f .
                . . f b b f f f f f f 7 7 f . .
                . f a f f b f b b f f f f . . .
                . f a c b f a a b b f f f . . .
                . . f a a f a f f b f f f . . .
                . . . f f f b c b b f f f . . .
                . f b b b b f f f b c f f b f .
                . f a f f b f b f f b b b b f .
                . f a c b b f f b b f a a b f .
                . . f b b f f a b b b f c f . .
                . . . . b b f a f b b f . . . .
                . . . f a b b f a a f . . . . .
                . . . f f c f b f f . . . . . .
                . . . f a f a b . . . . . . . .
                . . . . f f f . . . . . . . . .
            `;
        }
        return img`
            . . . .
        `;
    }

    // ---------------------------------------------------
    // 1. FRUIT CREATION
    // ---------------------------------------------------
    //% block="create a %kind fruit"
    //% blockSetVariable=fruit
    export function createFruit(kind: FruitKind): Sprite {
        return sprites.create(fruitImage(kind), SpriteKind.Player);
    }


    // ---------------------------------------------------
    // 2. SUPERPOWERS
    // ---------------------------------------------------
    //% block="give fruit %fruit superpower %power"
    export function giveSuperpower(fruit: Sprite, power: FruitPower) {
        switch (power) {
            case FruitPower.Heal:
                fruit.say(" Healing!", 1000);
                info.changeLifeBy(1);
                break;

            case FruitPower.Slip:
                fruit.say(" SLIP!", 800);
                break;

            case FruitPower.Spiky:
                fruit.say(" Spiky Blast!", 800);
                break;

            case FruitPower.Roll:
                fruit.vx = 80;
                fruit.say(" Rolling!", 800);
                break;

            case FruitPower.Split:
                fruit.say(" Mini Melons!", 800);
                for (let i = 0; i < 3; i++) {
                    let mini = sprites.create(fruitImage(FruitKind.Watermelon), SpriteKind.Enemy);
                    mini.setPosition(fruit.x, fruit.y);
                    mini.vx = randint(-40, 40);
                    mini.vy = randint(-40, 40);
                }
                break;
        }
    }


    // ---------------------------------------------------
    // 3. FRUIT WEATHER
    // ---------------------------------------------------
    //% block="start fruit weather %weather"
    export function startWeather(weather: FruitWeather) {
        game.onUpdateInterval(400, function () {
            let kind = FruitKind.Apple;
            scene.setBackgroundColor(randint(1, 15));

            switch (weather) {
                case FruitWeather.BananaRain: kind = FruitKind.Banana; break;
                case FruitWeather.PineappleStorm: kind = FruitKind.Pineapple; break;
                case FruitWeather.GrapeBlizzard: kind = FruitKind.Grape; break;
                case FruitWeather.OrangeMeteors: kind = FruitKind.Orange; break;
            }

            let fruit = createFruit(kind);
            fruit.setPosition(randint(0, 160), 0);
            fruit.vy = randint(30, 70);
        });
    }


    // ---------------------------------------------------
    // 4. EVOLUTION
    // ---------------------------------------------------
    //% block="evolve fruit %fruit"
    export function evolve(fruit: Sprite) {
        fruit.say(" EVOLVE!", 800);
        fruit.scale = 1.5;
    }


    // ---------------------------------------------------
    // 5. FRUIT PERSONALITY / MOOD
    // ---------------------------------------------------
    //% block="set fruit %fruit mood %mood"
    export function setMood(fruit: Sprite, mood: FruitMood) {
        const messages = {
            [FruitMood.Happy]: "I'm so juicy! ",
            [FruitMood.Angry]: "GRR! Don't squeeze me!",
            [FruitMood.Confused]: "What is fruit? Why fruit?",
            [FruitMood.Sleepy]: "Zzzz... "
        };

        fruit.say(messages[mood], 1500);
    }


    // ---------------------------------------------------
    // 6. FRUIT SOUND EFFECTS
    // ---------------------------------------------------
    //% block="fruit %fruit make silly sound"
    export function sillySound(fruit: Sprite) {
        const sfx = [music.pewPew, music.knock, music.wawawawaa, music.smallCrash];
        let chosen = sfx[randint(0, sfx.length - 1)];
        music.play(music.melodyPlayable(chosen), music.PlaybackMode.InBackground);
        
    }



    // ---------------------------------------------------
    // 7. FRUIT QUESTS
    // ---------------------------------------------------
    //% block="give fruit %fruit quest %quest"
    export function giveQuest(fruit: Sprite, quest: FruitQuest) {
        const questText = {
            [FruitQuest.EscapeBlender]: "Escape the BLENDER! ",
            [FruitQuest.BananaMessage]: "Deliver a banana message ",
            [FruitQuest.RescueGrapes]: "Rescue the grapes! ",
            [FruitQuest.HideSmoothie]: "Hide from the smoothie machine!"
        };

        fruit.say(questText[quest], 2500);
    }


    // ---------------------------------------------------
    // 8. FRUIT PHYSICS
    // ---------------------------------------------------
    //% block="apply physics %phys to fruit %fruit"
    export function applyPhysics(phys: FruitPhysics, fruit: Sprite) {
        switch (phys) {
            case FruitPhysics.Bouncy:
                fruit.setBounceOnWall(true)
           

                break;
            case FruitPhysics.Heavy:
                fruit.ay = 300;
                break;
            case FruitPhysics.Slippery:
                fruit.vx = 60;
                break;
            case FruitPhysics.Floaty:
                fruit.ay = -20;
                break;
        }
    }


    // ---------------------------------------------------
    // 9. FRUIT FUSION
    // ---------------------------------------------------
    //% block="fuse %a with %b"
    //% blockSetVariable=newFruit
    export function fuse(a: FruitKind, b: FruitKind): FusionResult {
        if ((a == FruitKind.Apple && b == FruitKind.Banana) ||
            (a == FruitKind.Banana && b == FruitKind.Apple))
            return FusionResult.Appnana;

        if ((a == FruitKind.Orange && b == FruitKind.Pineapple) ||
            (a == FruitKind.Pineapple && b == FruitKind.Orange))
            return FusionResult.Orangepine;

        return FusionResult.Grapemelon;
    }


    // ---------------------------------------------------
    // 10. FRUIT DIALOGUE
    // ---------------------------------------------------
    //% block="make fruit %a talk to %b"
    export function talk(a: Sprite, b: Sprite) {
        a.say("Hey fruit friend! ", 1200);
        timer.after(1300, function () {
            b.say("Stay juicy buddy! ", 1200);
        });
    }
}

