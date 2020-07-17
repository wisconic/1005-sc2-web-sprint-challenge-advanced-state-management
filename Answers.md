1. What problem does the context API help solve?
   - simplifies state management and allows us to avoid prop dilling
   - allows us to have global data that many components in different parts of the app can use
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions
  minimal representation of the change in the data/application
- reducers
  PURE functions that take in current state + what changes are happening and returns a new copy of state
- store
  holds the state for the app

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is global
  - uses when you want multiple components in different areas of app to use state
- Component state is local and can only be passed down to children

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- it is a middleware that allows us to extend the functionally of Redux so that we can use promises (make things asynchronous)

5. What is your favorite state management system you've learned and this sprint? Please explain why!

- Context API is so much simpler from where I am sitting
- I do really like redux though -- the toolkit makes things so much more simple!
