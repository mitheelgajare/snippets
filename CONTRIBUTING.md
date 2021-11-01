# Contributing to snippets:

We are glad to know that you are eager to contribute to snippets. Every commit is highly appreciated, be it a grammatical error fix or a new feature.

Before contributing please read our [CODE_OF_CONDUCT](https://github.com/mitheelgajare/snippets/blob/master/CODE_OF_CONDUCT.md).

## Raising issues:

Have you find a bug in our code? Do you have a new feature suggestion? Do you want to ask a question? Well, the best place to communicate with us is in the **issues** tab.
While raising an issue, use an issue template  *preferably*. If none of the issue templates fit your exact requirement, you are welcome to open a blank issue. 

**While raising an issue make sure to give as much information as possible. This would minimize further discussion and contributors will be able to focus on resolving the issue**

## Contributing:

Contributing is to be done throught pull requests. Here are some instructions to be adhered to while writing pull requests:

- [ ] Write descriptive pull requests explaining in detail what the changes you have done are.
- [ ] If the pull request fixes an issue, reference that issue. This will automatically close the issue once the pull request is accepted.
- [ ] Before you start working on a major pull request, raise an issue suggesting the feature enhancement that you are making. Otherwise if the pull request is not accepted, all of your hard work will be of no use.
- [ ] Write pull request that add small changes to the repository. For example instead of adding ten features in one pull request, write different pull requests for each feature. This will make it easy for code reviewers.
- [ ] Write all pull requests to the master branch. Do *not* create a new branch.

### All pull requests must have the following format:

```
prefix: message
description
```



The valid prefixes are:

1. fix: On fixing a bug
1. feat: On adding a new feature
1. docs: On changing documentation
1. chore: On adding something which is too small to be a feature but not a bug fix

**We request all contributors to follow this format. This will help in creating automated releases for our code.**
      


## What to contribute?

Well, what are we looking for in this repo?

You can help in a number of ways:

- By adding more snippets. There are always new algorithms and data structures. If you know any algorithm or data structure or just any code snippet in **any** language which can be useful for others, just create a pull request. First check through the pull requests (both open and closed) if that snippet exists, if not then create a pull request. Please mention the title, description, code and language in the pull request. You can add the new snippet in a file with the correct extension. Add that file in /codeSnippets/{nameOfLanguage}/ .

- By checking the pull requests. There are thousands of programming languages out there, most of which I do not know. An error could have crept into the code present which some of us might not notice. So, scroll through the pull requests, if you find a bug write a comment below the pull request mentioning the bug and on exactly which lines(s) it is on.
If you do not notice any bug type `LGTM`. Once a pull request has a certain number of LGTM's, it would be accepted.

- If you notice any bug in the frontend code or have a new feature which could be implemented. Raise an issue first, create a pull request once the issue is approved.


## Quick start guide.

1. First clone this repo.
1. The codeSnippets folder is where all the snippets are. If you wish to add a snippet do it in /codeSnippets/{nameOfLanguage}/. **Please read all guidelines before**
1. The client folder is where all the frontend code is. Once you go inside the folder, you will see the following files and folders: 
      ```
      components: All the react components to be reused,
      pages: all the nextJS pages,
      public: the public files
      styles: All the frontend styling
      ```


## Code guidelines: 

### Adding new snippets:
1. Use Prettier - Code Formatter whenever possible. If not, make sure the code is in a readable format.

### Contributing to Frontend Code:
*If you just want to add snippets, you can skip this part*

**Please create an issue before creating a pull request for frontend code**

1. Do *NOT* add new pages.
2. Use Prettier - Code Formatter for every file.
3. Use yarn
4. Type `yarn install` to install dependencies in the `node_modules` folder
5. To change the styling use Scss only. Add a new .scss file for every major component. Import every file in the `App.scss` file. It will be compiled to `App.css` .


## Conclusion:

Thank you for reading this document (It was very long, sorry 😬). We look forward to your contributions.


