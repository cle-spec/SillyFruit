 # 🍉 Silly Fruit Extension
### *A ridiculous, juicy MakeCode Arcade extension for fruit-powered chaos!*

Bring your game to life with **talking apples**, **banana rain**, **grape blizzards**, **fruit fusion**, and more.

---

<p align="center">
  <div>
  <img src="docs/fruit-banner.png" width="600" />
  <br>
  <em>"Stay juicy, buddy!" 🍌</em>
  </div>
</p>

---

## 🍍 Features

- Create fruit sprites  
- Give fruits **superpowers** (healing, rolling, exploding into minis…)  
- Summon **fruit weather** like *banana rain*  
- Give fruits moods and personalities  
- Apply goofy custom physics  
- Assign dangerous quests (escape the blender!)  
- Fuse two fruits into a new hybrid species  
- Make fruits talk to each other  
- Add silly sound effects  

---

## 📦 Installation

In MakeCode Arcade:

1. Click **Advanced**  
2. Click **Extensions**  
3. Paste your GitHub URL (once published)  
4. Press **Enter**  

Your new **Silly Fruit** blocks appear in the sidebar!

---

## 🍎 Examples

### Happy Rolling Apple
```ts
let apple = sillyfruit.createFruit(FruitKind.Apple)
sillyfruit.setMood(apple, FruitMood.Happy)
sillyfruit.giveSuperpower(apple, FruitPower.Roll)



> Open this page at [https://cle-spec.github.io/sillyfruit/](https://cle-spec.github.io/sillyfruit/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/cle-spec/sillyfruit** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/cle-spec/sillyfruit** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
