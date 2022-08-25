effects.starField.startScreenEffect()
let mySprite = sprites.create(assets.image`logo`, SpriteKind.Projectile)
let text_list = [
"Hi",
"I am 洞鉴",
"在2018年",
"我有了单机版"
]
for (let value of text_list) {
    game.showLongText(value, DialogLayout.Bottom)
}
animation.runImageAnimation(
mySprite,
assets.animation`x-ray name animation`,
100,
false
)
