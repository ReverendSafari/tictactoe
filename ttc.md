## The Game
Players take turns placing their respective shape (X's or O's)
After every turn a winner may be declared or not

To win a player must 
A: Complete a full row, column, or diagnol of their respective shape

The game is declared a draw if the entire board is filled without any qualifying win

## Logic
Board State:
Held in array
[
    [_,_,_],
    [_,_,_],
    [_,_,_]
]
State can hold an, X, O, or ""
Current Marker: Value rotating from X to O,
    Method to switch marker 

Game Loop:
Player 1 Starts clicking a box, placing an X
    Check if victory
    If victory:
        Disable game loop and print victory 
    If not victory, switch marker 