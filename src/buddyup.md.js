export default `

# BuddyUp

Ever wanted your friends to go on a trip together, but you just can’t get people to commit? Same. This app allows groups of people to contribute to a collaborative fund over time, and then cash out in time to pay for that airbnb in Aspen. It makes people put their money where their mouth is, just a little at a time. 

This app uses the Stripe API to make payments. The current implementation doesn’t accept real credit cards (as this was a class project), but instead it is hooked up to the sandbox version of Stripe. This way we could test it, set up a functional data store, and write our full front-end. That front-end was written with JavaScript/JQuery, and utilized the Bulma css library for styling. Finally, we used Node.js to write our server-side data store of accounts, trips, and savings.

Here's a (very, very silly) video my team and I made to demo our product:
`