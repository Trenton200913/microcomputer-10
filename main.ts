input.onButtonPressed(Button.A, function () {
    basic.showString(" A B C D E F G H I J K M N O P Q R S T U V W X Y Z")
})
input.onButtonPressed(Button.B, function () {
    basic.showString(" 1 2 3 4 5 6 7 8 9 10")
})
music.playMelody("E - F - G - A - ", 195)
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
}
basic.showString(" MICROCOMPUTER OS")
basic.forever(function () {
	
})
