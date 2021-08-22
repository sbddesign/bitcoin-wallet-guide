# Alice

![Alice character](alice-hero-image.png)

Alice is your guide to bitcoin wallets. She's a cool person to know.

For [PlebFi Austin Hackathon](https://pleb.fi/austin/)

Keep Austin pleb.

[See Figma File](https://www.figma.com/file/Ba2hYmkPj7gS4Ej1k71hjv/Bitcoin-Wallet-Guide?node-id=0%3A1) (which is a work-in-progress, obviously)

## Goal

Create helpful tool to onboard people to bitcoin payments, either through their own exploration or through the guidance of an app.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Hackathon Notes

This was a train of thought note session from last night at the beginning of the hackathon.

### Goal of Project

Create helpful tool to onboard people to bitcoin payments, either through their own exploration or through the guidance of an app.


### Background

- Conversation started in Bitcoin Design slack about a week ago:
- https://bitcoindesign.slack.com/archives/C015856BDME/p1628895398045300
- The discussion involved inout from a lot of people and many different problems and solutions were discussed.
- By the end of the thread, the discussers were coalescing around two ideas:
    - A website that the app developer can direct the user towards so they can find a wallet
    - A developer tool which an app developer can bundle into their app and choose to recommend specific wallets to the user.
- Some people favored only one option.
- I favor both options -- I think they are both useful in different contexts.


### My approach right now

As of 19:26 CDT on 2021-08-21, I'd like to implement this as an open-source website which wallet information can be added to by the Bitcoin community. This website should have a "share feature" (similar to how you might click "share" under a YouTube video) which will generate an `<iframe>` code which an app developer can use within their app to easily include onboarding information to their user.


### User Personas



#### Nuni

##### Completely new to bitcoin
This person is new to bitcoin and does not own any yet. They are not familiar with any bitcoin terminology. They will need their hand held through the process of setting up their first wallet and obtaining their first bitcoin, which needs to be done in a way that looks out for their security and is honest about what they are getting into, while hopefully making the decision easy for them.


#### Boris

##### Bitcoin user looking for detailed information
This person already owns some bitcoin, but they want to learn more. Perhaps they are interested in learning the privacy implications of different wallets, or perhaps they want to find the best way to secure their bitcoin savings. This user is somewhat familiar with the terminology; they are not necessarily an expert, but they do not need the same hand holding. They would rather be given the opportunity to freely peruse information about different wallets and make their own informed decision.


#### Alexis

##### App Developer
The app developer wants to accept bitcoin payments from the user, or perhaps send bitcoin payments to the user. For a user that's new to bitcoin, they face the double challenge of onboarding people to their application while also onboarding the user to bitcoin. They are then faced with choices: do they offer no guidance to the user, letting the user find their own way in bitcoin? If so, they risk the user not being onboarded or perhaps making a mistake and feeling disenfranchised not only from the app but from the larger world of bitcoin.  Or do they choose to recommend a very specific wallet to the user? If so, does the user see that wallet as being a product managed by the app developer? Does the user then associate the wallet with the app developer's product, and do negative experiences in the recommended wallet translate to a feeling of negativity towards the app? Do they recommend several wallets to the user, and let them choose between them? If so, do they risk overwhelming the user with too much information? There is no universal answer to these problems; it depends on the app and its audience.

---

Ideally, this project will solve problems for each of these personas:
- Provide Nunita with a clear path for getting into bitcoin
- Provide Boris with more detailed wallet information
- Provide Alexis with a tool for onboarding users which is flexible for her needs


Alright, enough philosophizing for now. Let's hack. 19:45 CDT








