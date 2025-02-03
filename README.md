# TV Show search

Start:

- `npm install`
- `npm run dev`

## What to do next

(I kind of want to replace the api with TMDB API and create an watchlist app with this)

#### Home page

I did not have the time to create the initial state for the startpage.  
I'm also not sure yet if I would style the `<Navbar />` to expand down (probably) or reuse the `<Search />` component and use a condition to either show the Navbar or the second Search component further down.

#### Rating component

This rating component only supprorts full and half steps in the rating scale. So to visually show a rating of 7.9 I have to come up with a different solution. I realized to late that there where finer steps to the rating scale.  
Maybe css mask could be used, I did not have time to look in to that.

#### Quality of life improvements

Other improvements that would be good:

- I was planning on use the original sizes of the image for the posters when on desktop resolution (but ran out of time)
- Bigger images in the layout when in higher resolution, so images get more space compared to the text
- Search as the user types (+ debouncing)
- Or search on Enter
- If I would run the search as the user typed, I would display the result in a dropdown from the search field, and clicking on one of the result would take the user to the details page, hitting Enter would display the result on the home page as it does now.
- In Details view display images from the show (A backdrop image at the top of the page)
- A page for the actors would fit well here
- Oh and loading indicators when fetching data!

### Types

I put the types directly in the components, bacause it felt like it was to few types.  
If there where more types I would put them in a separate types file in the page directory.
