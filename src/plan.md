I AM TRYING TO PLAN THIS OUT THINKING IN TERMS OF DATA

1. Form with on <input type = text >

2. Hitting enter returns text object as list item - Dispatches "add todo"
which adds new object to string with existing object creating new state

3. Circles (radio buttons) next to each item that can be
ticked.  On click, text object is a new state: crossed out

4. Arrow next to text input on click selects all objects in list

5. "X" next to each text object.  On click, dispatches "delete" which returns
list without that object.

6.  Four buttons that display 
    a. ALL, which is all states
    of text object -- Active and completed
    b. ACTIVE - displays not crossed out
    <!-- c.  COMPLETED - displays crossed out -->
    <!-- d.  Clear completed button removes crossed out items -->

7.  Countdown of remaining available lines for todo object -- todos.length

ADD TODO
DELETE TODO
TOGGLE STATUS (COMPLETE OR NOT?)
COUNTDOWN


