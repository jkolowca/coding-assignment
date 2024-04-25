import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
  <article>
    <header>
      <h1 class="text-primary">Coding assignment</h1>
      <p class="text-secondary">Write an application in Angular</p>
    </header>
    <p>The People and About tabs are separated pages (router outlets):</p>
    <ul>
      <li>
        <p>
          The people tab should display a random user from randomuser.me API (photo and name). If a user clicks the
          “New” button the data should be reloaded with new data from the API. Also, every 5 seconds data should be
          reloaded, but the timer should reset every time the user clicks the “New” button and the timer should stop
          counting if the user’s cursor is under photo, name, or button (prevents from reloading data when for
          example user trying to copy name).
        </p>
      </li>
      <li>
        <p>
          About is a static page with a text description of the recruitment task (you're currently reading it).
        </p>
      </li>
    </ul>
    <p>
      Both pages should look similar to the attached graphics. Please focus on code readability and
      application performance (imagine that these are only 2 subpages of a huge application).
    </p>
  </article>
  <footer>
    <p class="text-secondary">
      The application should use the randomuser.me API.<br/>
      See <a href="https://randomuser.me/documentation">https://randomuser.me/documentation</a> for more information.
    </p>
  </footer>
  `,
  styles: `
    :host {
      display: flex;
      flex-grow: 1;
      width: fit-content;
      flex-flow: column;
      padding: 24px;
      margin: 0 auto;
    }
    header {
      margin-bottom: 1rem;
    }
    article {
      max-width: 80ch;
      margin: auto 0;
    }
    ul {
      margin: 1rem 0;
    }
  `
})
export class AboutComponent {}
