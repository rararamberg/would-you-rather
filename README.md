# Project Overview

## Would You Rather?

[W-Y-R Link] ()

## Project Description

A simple game of 'Would You Rather?' A player goes through a list of questions and makes a decision on which scenario. Player can view poll results of each question and leave comments in a discussion board. There is a 'How-To' page for app's accessability. 

## Wireframes

[Desktop Play](https://wireframe.cc/72yWJC)
[Desktop Results](https://wireframe.cc/hmf89U)

[Tablet Play](https://wireframe.cc/G1OUCm)
[Tablet Results](https://wireframe.cc/U3wfAj)

[Smartphone Play](https://wireframe.cc/uMO4va)
[Smartphone Results](https://wireframe.cc/rO3LtR)



## Component Hierarchy
[Find Here](https://app.diagrams.net/#Hrararamberg%2Fwould-you-rather%2Fmain%2FWYR-Component-Hierarchy.drawio)

## API and Data Sample

Questions Data Sample
```json
{ "records": [
        {
            "id": "recYLDvSWBjqQIUuY",
            "fields": {
                "category": "deep",
                "optionA": "go into the past and meet your ancestors",
                "optionB": "go into the future and meet your great-great grandchildren",
                "voteA": "a",
                "voteB": 0
            },
            "createdTime": "2021-05-06T23:35:14.000Z"
        },
        {
            "id": "rec62uz8XdKAywPum",
            "fields": {
                "category": "funny",
                "optionA": "rather randomly time travel +/- 20 years every time you yawn",
                "optionB": "teleport to a different place on earth every time you sneeze",
                "voteA": "a",
                "voteB": 0
            },
            "createdTime": "2021-05-06T23:35:14.000Z"
        },
        {
            "id": "recnKZhf5LIqrZ9Ro",
            "fields": {
                "category": "hard",
                "optionA": "never use social media sites/apps again",
                "optionB": "never use social media sites/apps again",
                "voteA": "a",
                "voteB": 0
            },
            "createdTime": "2021-05-06T23:35:14.000Z"
        }
    ],
    "offset": "recnKZhf5LIqrZ9Ro"
}

```
Comment Data Sample

```json
{
    "records": [
        {
            "id": "recO6MLh71yhvCchj",
            "fields": {
                "author": "foodie32",
                "comment": "I would've labeled this one under gard category as these are my two favorite foods"
            },
            "createdTime": "2021-05-06T23:37:48.000Z"
        },
        {
            "id": "recvuufn1iCGLMjBl",
            "fields": {
                "author": "moviegeek007",
                "comment": "Easy. I could take a permanent social media break but don't take away my movies"
            },
            "createdTime": "2021-05-06T23:37:48.000Z"
        },
        {
            "id": "rec0JQ2KcuNhKuejo",
            "fields": {
                "author": "user456",
                "comment": "Allergy season would be a nightmare for me."
            },
            "createdTime": "2021-05-06T23:37:48.000Z"
        }
    ],
    "offset": "rec0JQ2KcuNhKuejo"
}


```



### MVP/PostMVP

MVPs are required for app functionality. PostMVPs are additional features that are not required, but will add more visual and interactive elements to my site.

#### MVP 

- Links that Route to components: Home, How to, Play, Results
- Get Questions for user to see and Post choices by players to Airtable
- Get and Post comments from Airtable
- Use form to for users to create comments
- Render poll results of questions
- Render comments

#### PostMVP  

- Render comments specifically to questions
- Delete button on comments
- Pie graph from React Bootstrap to show results 
- Gif collage themed to question categories
- Swipe left or right to answer questions
- Reach out on slack to collaborate with UX student

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|May 6-7| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|May 7| Project Approval | Incomplete
|May 7| Core Application Structure: .env, folders,  | Incomplete
|May 7| Pseudocode | Incomplete
|May 7| Skeletal Component structure / Get, Set Data | Incomplete
|May 8| Continue Component Structure| Incomplete
|May 8| Post | Incomplete
|May 9| Cont'd Post| Incomplete
|May 10|CSS Components| Incomplete
|May 11| MVP | Incomplete
|May 12| Deployed MVP | Incomplete
|May 13| PMVP and Advanced CSS | Incomplete
|May 14| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| AirTable Setup | H | 1hrs| .5hrs | .5hrs |
| Core Application Structure | H | 1.5hrs| Xhrs | Xhrs |
| Pseudocode | H | 2.5hrs| Xhrs | Xhrs |
| Nav and Footer | H | 2hrs| Xhrs | Xhrs |
| Play and Questions Structure | H | 3hrs| Xhrs | Xhrs |
| Results and Comments Structure | H | 3hrs| Xhrs | Xhrs |
| How to Structure | H | 2hrs| Xhrs | Xhrs |
| Play Get, Set Data | H | 6hrs| Xhrs | Xhrs | |
| Results Get, Set Data | H | 6hrs| Xhrs | Xhrs | |
| Link Route Components | H | 2hrs| Xhrs | Xhrs
| Play Q&A Post: Data Create and Update | H | 5hrs| Xhrs | Xhrs |
|Results & CommentPost: Data Create and Update | H | 5hrs| Xhrs | Xhrs |
| Nav and Footer CSS Components | H | 2hrs| Xhrs | Xhrs |
| How To Page CSS | H | 2hrs| Xhrs | Xhrs |
| Play and Questions CSS | H | 2hrs| Xhrs | Xhrs |
| Results CSS | H | 2hrs| Xhrs | Xhrs |
| Homepage CSS  | H | 2hrs| Xhrs | Xhrs |
| PMVP | H | 7hrs| Xhrs | Xhrs |
| Advanced CSS | H | 4hrs| Xhrs | Xhrs |
| Site Run-Through and Test | H | 1hrs| Xhrs | Xhrs |
| Clean Up Code and Comments | H | 1.5hrs| Xhrs | Xhrs |
| Total | H | Xhrs| Xhrs | Xhrs |

## SWOT Analysis

### Strengths:
I feel confident in my  understanding of concepts and styling , although I haven't applied logic to a game yet.

### Weaknesses: 

CSS can be a worm hole. Need to be mindful of how much time I spend in that area. Moving into this unit project, I'll need to be mindful of my time management.

### Opportunities:
I've never built a game before besides in homework. This will definitely test and grow my logic in order to add a great piece to portfolio. If I have stay on schedule, i can have time to really play with my PMVPS.


### Threats:
How to populate comment feed only specifc to that question.
