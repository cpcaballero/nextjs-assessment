#RareCircles Take Home Coding Assessments
##Task 1: Real-time search feature
This can be located inside the task1-search folder, which is a standalone NextJS Application

- Run npm install before running npm run dev.
- Tests can be seen by running the npm run test command. The test can be located inside the tests folder
- Implemented a debounce on the search bar to avoid consecutive rendering while the user is typing. This is unnecessary and should only be rendered after a certain debounce time after the user finished typing.
- This search bar is searching on the title and body of each JSON entry, case insensitive.
- Used Lodash to help on some small matters in the code
- Used useCallback and memo on certain functions/components for memoization and to prevent too much rerendering.
- The styling was not fully focused as the focus is on the functionality.
- Due to time constraints (done within 12 hours both task 1 and 2), some things can be improved here are
  - Added more tests
  - Simulated an API call instead of a mock JSON file
  - Improved the UI/design
  - Add a dropdown on the search bar for suggestions
  - Accommodate multiple search terms using a delimiter (comma, maybe?)
  - Choose between infinite scrolling or pagination - which one would be better
 
##Tas 2: Photo Gallery
This can be located inside the task2-photo-gallery folder, which is another standalone NextJS Application
- Run npm install before running npm run dev.
- Tests can be seen by running the npm run test command. The test can be located inside the tests folder
- Uses NextJS Image component which has built in Optimization and lazy loading
- Uses dynamic loading from NextJS for lazy Loading of the PhotoAlbum component
- Due to time constraints (done within 12 hours both task 1 and 2), some things can be improved here are
  - Finish testing
  - Separate the PhotoAlbum component so each Photo card will load one by one
  - Pagination or infinite scrolling (lazy)
