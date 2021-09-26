![GitHub Repo stars](https://img.shields.io/github/stars/nabilhayet/fetch_rewards) ![GitHub forks](https://img.shields.io/github/forks/nabilhayet/fetch_rewards) ![GitHub followers](https://img.shields.io/github/followers/fetch_rewards) ![Bitbucket open issues](https://img.shields.io/bitbucket/issues/nabilhayet/fetch_rewards)                                          
                                        <h1>:bomb: Fetch Rewards :bomb: </h1>
                                                      
This project lets a user fetch data from an API. After fetching the data, it groups the data by listId. Then it sorts the data first by listId and then by list name. Finally it displays the items on the DOM.

<a href="https://www.youtube.com/watch?v=Nsy_Bno1IMc">Demo</a>

Table of Contents
- [Features](#features)
- [Tech-Stack](#tech-stack)
- [Installing](#installing)
- [Challenges](#challenges)
- [Future-Implementation](#future-implementation)
- [Code-Snippet](#code-snippet)
                               
## Features
<ul>
 <li>Fetch data from an API</li>
 <li>Group them by listId</li>
 <li>Sort items by listId and listName</li>
 <li>Display data on DOM using table</li>
</ul>

## Add Book
![fetch_rewards](https://user-images.githubusercontent.com/33500404/134789484-98ef001f-1abe-41ed-af34-d5e92a6ee18f.gif)

## Tech-Stack
<p>This web app makes use of the following:</p>

* React
*	HTML
*	CSS



## Installing
<ul>
<li> Clone this repo to your local machine git clone <this-repo-url></li>
<li> run "yarn create react-app . "</li>
<li> run yarn start to start the browser.</li>
</ul>
        
## Challenges
<ul>
<li> Fetch the data properly</li>
<li> Group the data by listId</li>
<li> Sort the data by list Name</li>
</ul>

## Future-Implementation
<ul>
<li> Add bootstrap to make the UI more appealing</li>
</ul> 

## Code-Snippet 

```
 componentDidMount() {
    fetch("https://fetch-hiring.s3.amazonaws.com/hiring.json")
      .then(response => response.json())
      .then(items => {
        items.forEach(element => {
          if (element.name != "" && element.name != null) {
            this.setState({
              items: [...this.state.items, element]
            })
          }
        });
      })

  }

```

```
 renderTableData() {
        const object = this.state.items.map(obj => {
            const keyValuePair = Object.entries(obj)
            const values = keyValuePair.map((entries) => {
                const v = entries.map((e) => {
                    let newArray = [];
                    if (e.length > 1) {
                        const a = e.map((arr) => {
                            const splitArray = arr.split(" ")
                            newArray.push(splitArray[1])
                        })
                        newArray = newArray.map(Number).sort(this.compare)
                        const s = newArray.map((b) => {
                            return (
                                <tr>
                                    <td><li>{`Item ${b}`}</li></td>
                                </tr>

                            )
                        })
                        return s;
                    }
                    else {
                        return (
                            <tr>{e}</tr>


                        )
                    }
                })
                return v;
            })
            return values
        })
        return object
    }
```


