The nodeList API project contains the following functions along with its respective unit tests written using JEST.

- add
- contains
- plainList
- remove
- reverse

![image](https://github.com/alexa-ngo/JESTProjects/assets/97919335/24eb1b5d-764b-4012-b4e4-1fcc976d4909)

---

# Postmortem #4 - nodeList API project

![Alt text](image-2.png)

I have finally implemented the nodeList API mini project!! I encountered too many snags along the way. I didn't think much of each snag, but each one of them started to add up and slowed me down.

## Here's the link to the nodeList API project for context!

https://github.com/alexa-ngo/JESTProjects/tree/main/nodeListImplementation

So what happened? I would attribute it to inexperience and being a novice (which isn't excusable). I had issues with **GitHub, import and exporting the methods, and forgetting to configure Babel.**

## GitHub Issues

- I got into a weird state when I tried to git add, commit, and push the files to GitHub. I did not create the .git file in the correct directory when I pushed to GitHub. I fiddled a little too much. I kept creating and deleting the repositories for the project in an attempt to upload the files. The solution was to use "git clone" up one file level. Then I needed to drop the files into that folder. I then continued with the git commit process. One thing to remember is to use `git pull` to ensure my local files are up-to-date with Github.

![Alt text](image.png)

## Class Data Structures

- I created the Node class and I tried to implement the LinkedList methods without creating the LinkedList class **first**. I was trying to manually create a linked list within the program itself which is incorrect! Silly me!! 😂🐭🪤

## Missing Babel Configuration Process

- I missed a step in the configuration process is the following for Babel:

```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Create a **_babel.config.js_** file in the root of the project:

```
// File: babel.config.js

module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

## Import/Export issues

- I had issues trying to import and export functions for two classes. There are many ways to import and export classes, methods, and functions, etc..
  Here's what I ended up doing:

```
// File: nodeList.js

export class Node {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  getValue() {
    return this._value;
  }

  // more methods/functions

}

export class LinkedList {
  constructor(head = null) {
    this._head = head;
  }
  // more methods/functions
 }
```

```
// File: nodeList.test.js

import { LinkedList, Node } from "./nodeList";

it("adds a node to a list.", () => {
  const node = new Node(1);
  const list = new LinkedList(node);
  const result = list.toPlainList(node);
  expect(result).toEqual([1]);
});
```

Overall, this nodeListAPI mini project was bumpy. I did not have much trouble writing the code itself, but the implementation was a bit of a _struggle_.🐭🪤 Writing unit tests exposed code that needed to be removed or rewritten. At the end of it all, I need to be organized for the project to be smooth.
