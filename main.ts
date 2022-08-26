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
mySprite.setPosition(60, 40)
animation.runImageAnimation(
mySprite,
assets.animation`logoani2`,
100,
false
)
