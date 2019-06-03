The alpha version can be found here: https://wischli.github.io/smashbros-random-with-bans/

"Unfortunately", I had to **pause my work on this project** as I have to put all my free time in the **planning of my wedding** (August 24h 2019) and honeymoon (road trip through the Canadian Rocky Mountains).

# Guide for usage from scratch

- re-/deactivate characters you do not wish to have in your random set by clicking on them once
- you can **en-/disable echo characters** by clicking "hide/show echoes" in the top left corner
- once your list is finished, save the state by clicking on **"save"** in the top right corner
- click **randomize** to shuffle your wishlist, a card component will open and display your current character
- iterate the list by clicking "prev" or "next"

## Cookie Usage

**Currently, the web app stores two cookies**. The first one is a boolean displaying whether the **cookie notice has been accepted** or not. The second one stores a **possible character list to enable a restore** to that state. In the future, two more cookies of the same manner will be added to enable different list stores.

## Intention
I have been playing Smash Bros since the age of 7 and been fascinated by this unique fighting game ever since. About 5 years ago my closest friends and I started to really get into 2on2. We experimented with different modes like best of fives in a random-pick-random-pick-random order.

Due to the high amount of characters (especially with Echoes) in the newest Smash, our "frustration" with the implemented random mode has grown. Sometimes we play for 6-8 hours in tournament-esque, competitive modes and do not want our experience to be diminished by **poor random choices**, i.e. getting characters from our pick-list.

In the old Smash we used to have a list of about 30 characters mapped to natural numbers so we could use a typical random generator. The vast amount of new characters in Smash Ultimate made this approach even more impracticable.

Therefore, I built this simple web app to enable a fully **customizable random mode without repitition**. Hopefully, other Smash players will benefit from this as well.

## Todos
- [x] Add saving functionality using Cookies
- [x] Display next character in card-esque component
- [ ] Add option for multiple saves (auto-save and banks)
- [ ] Add "help" and tooltips
- [ ] Improve UI (especially mobile)
- [ ] Add more options for customization
- [ ] Add auth0 login functionality

### Misc
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
