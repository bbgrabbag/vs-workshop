# VS Workshop

## Intro
This repo is a simple example of a project which contains a typical set of linting, testing, bundling, and compiling tools that are important for developing front-end applications effectively. They are chosen based on my own experience and do not necessarily represent what is 'best'. The goal of this workshop is simply to introduce new students to common web technologies and coding techniques used in the industry.

## Setup

1) Clone Repository `git clone <path-to-root> https://github.com/bbgrabbag/vs-workshop.git`
2) Install dependencies `npm install`
3) Start Development server `npm run dev`
4) If you're using VS Code, the debugging and test configurations already exist in the `.vscode` folder. I recommend installing the following VS Code extensions: 
- [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [Jest Test Runner](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [TSLint Plugin](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)


*Each of the following sections contains links to documentation and additional resources for that topic*

## Linting
A linter will enforce a consistent coding format across all files in a project. This is incredibly useful when a team of engineers are all making edits to the same codebase. It also will catch common bugs/syntactical mistakes that are often hard to fix.

Documentation:

- [TSLint](https://palantir.github.io/tslint/) (For Typescript)
- [ESLint](https://eslint.org/)

Further Reading:
- [Lint Driven Development](https://medium.com/@danielsternlicht/thoughts-about-javascript-linters-and-lint-driven-development-7c8f17e7e1a0)

## Bundlers
Bundlers take individual files and combine them together. A couple benefits of using a bundler are:
- Coding in discrete, independent files prevents namespace collisions.
- It is easier to manage large codebases if they're broken up.
- Optimizing code for production environments.
- They integrated nicely with transpilers such as Webpack and Babel.

Documentation:
- [Webpack](https://webpack.js.org/)

Further Reading:
- [Bundler Comparisons](https://medium.com/@ajmeyghani/javascript-bundlers-a-comparison-e63f01f2a364)

## Version Control
**New developers need to become comfortable with managing and documenting progress in a sensible way using version control software.** Version control is the fundamental tool that modern teams of software developers use to collaborate on a product. The commit history is often integrated into a manager's workflow for keeping track of progress on a particular feature/product. 

A couple tips:
- Always plan ahead what your next commit will be, and keep it SMALL and FOCUSED on a particular functionality. Don't commit 500 lines of code that contain changes to 15 unrelated files with a commit message that says 'Fixed some s***'. You will be fired.
- Use branching to manage larger features/functionalities. For example, if you need to build out an authentication system, create a branch first and then make small, incremental commits that are well documented and testable until the entire branch represents a fully functional and testable authentication system.

Competency in version control has a few other benefits as well:
- Allows you try new things without worrying about breaking the current build. Your attempted solution didn't work? Just delete the branch and start from where you left off.
- Improves efficiency and organization.
- Streamlines collaboration. 

Documentation:
- [Git](https://git-scm.com/book/en/v2)

Further Reading:
- [What is Version Control](https://www.perforce.com/blog/vcs/what-is-version-control)
## Testing
**Testing is not just for QA engineers!** All developers should be able to know how to test their code using at least one of the many testing libraries out there. Even just the ability to write unit tests is a highly attractive skill for an employer. The ability to write unit tests actually forces you to become a better programmer because it requires knowing how to write code that is testable! And in order to write testable code you actually have to practice all of the concepts mentioned in the last section.

Documentation:
- [Jest](https://jestjs.io/docs/en/getting-started.html)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

Further Reading:
- [Test Driven Development](https://hackernoon.com/introduction-to-test-driven-development-tdd-61a13bc92d92)

## Debugging
Knowing how to use the debugging tools that ship with whatever IDE and browser you use is key to efficiently solving problems and fixing bugs in your code. A debugger is really just a program that allows you to step through your code one instruction at a time:
- Don't use `console.log`. Use breakpoints instead.
- Use watchers to monitor variables of interest.
- Understand what a source map is.
- Know how to configure your IDE and browser debugger.

Documentation:
- [VS Code Debugger](https://code.visualstudio.com/docs/editor/debugging)
- [Chrome Debugger Extension for VS Code](https://github.com/Microsoft/vscode-chrome-debug)

## General Coding Techniques/Philosophies
Software engineers are rarely building a project from scratch. They are hired to work on an existing codebase that has been continuously updated over a period of years by dozens of developers. So, you're not the only one that sees your code. Here are some helpful tips for writing professional code:

- Document your code thoroughly. The less time someone else has to spend trying to understand what your code is actually doing and why it was written that way the easier it is for them to actually implement it. [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) and [JSDocs](https://jsdoc.app/about-getting-started.html) help immensely with managing complexity and writing maintainable, comprehensible code.
- Stay DRY (Don't Repeat Yourself).
- Avoid writing goliath-sized functions. Build small libraries of functions that do one small thing each and compose them together.
- Be explicit about what your function/component depends on as well as what it returns.
- Separate stateful functionality from non-stateful logic.
- Separate policy from implementation. A function is a black box, you can see what goes in and what comes out, but not what happens inside. 

Further Reading:
- [The UNIX philosophy](https://homepage.cs.uri.edu/~thenry/resources/unix_art/ch01s06.html)
- [The Front End Developer Handbook](https://frontendmasters.com/books/front-end-handbook/2019/)