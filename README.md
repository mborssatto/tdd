# Coyotiv - School of Software Engineering

## Express + MongoDB + Docker + Jest starter Template

&nbsp;

## This project is meant for Mariana to practice automated testing and test driven development as part of the Software Engineering course for Coyotiv school. Things may not be working and might be breaking... It will be deprecated as soon as learning goals are met. ;-)

&nbsp;

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

&nbsp;

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/coyotiv/sose-express-mongo-docker-jest)
&nbsp;

Now you can directly work in your browser!  
&nbsp;

## Getting started

&nbsp;

### NODE - EXPRESS - MONGODB - DOCKER - JEST

&nbsp;

Install dependencies

```sh
npm install
```

&nbsp;

Start development server:

- with _Node.js_:

  ```sh
  npm start
  ```

- with _nodemon_:

  ```sh
  npm run dev
  ```

- with _Docker_:

  ```sh
  docker-compose up --build
  ```

Run the tests with Jest:

- without _coverage_:

  ```sh
  npm test
  ```

- with _coverage_:

  ```sh
  npm test-coverage
  ```

  <p>&nbsp;</p>

### Working with **env variables** and **.env** files

&nbsp;

> Note:
>
> - We have automated for you the following step to make the copy from the **.env.example**:
>
> ```sh
> cp .env.example .env
> ```
>
> - Please before starting the server update the **.env** file values accordingly if necessary  
>   &nbsp;

  <p>&nbsp;</p>

To add new _env variables_:

- Add them directly in the **.env** file
- Add a copy of this _env variables_ with an example value (not the real one) in the **.env.example** file
  &nbsp;

To modify a _env variables_:

- Modify them directly in the **.env** file
<p>&nbsp;</p>

### PLANTUML

&nbsp;

> **Note:**
>
> - There is a **class.puml** example file located in the **_architecture_** folder.  
>   &nbsp;

  <p>&nbsp;</p>

To start working **_\*.puml_** files:

- You can continue by editing the **class.puml** file
- Add additional **_\*.puml_** files on that folder too.  
  &nbsp;

If you what to visualize a preview of the **class.puml** file or another **_\*.puml_** file on the project, please select the file and on your keyboard press the following keys:

  <p>&nbsp;</p>

- _MacOS_: **Option + D**

- _Linux/Windows_: **Alt + D**
<p>&nbsp;</p>
The above commands will automatically open a window that will show you live any updates that you make on the file.

&nbsp;

---

&nbsp;  
_Now that we are ready, let's have some coding fun!_

---

&nbsp;

## MIT License

Copyright (c) 2022 Coyotiv

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
