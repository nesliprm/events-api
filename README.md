<h2>Description</h2>

<p>This exercise's aim is to implement Prisma for the event management app that we built in our Express.js module.</p>

<p>You'll connect the app to a database, create schemas and use Prisma to query and modify data.</p>

<p>You can use your existing Events app or start with our boilerplate that contains all the Express code.</p>

<p>Start by looking at the instructions and requirements. The implementation details can be found in the requirements. This exercise will not be evaluated, but you can compare your code with the solution. In the next project, you will build an API with Express and Prisma from scratch, where you will get the opportunity to have a mentor evaluate your code.</p>

<p>You will be adding the following to your project:</p>

<ul>
  <li>Connect the app to a database</li>
  <li>Install Prisma to your project</li>
  <li>Initiate the Prisma client</li>
  <li>Create schemas of the data model (you can find the data model below)</li>
  <li>Create a seed file to seed your database with existing data</li>
  <li>Use Prisma for queries (CRUD) and querying relationships</li>
  <li>Migrate schema changes if needed</li>
</ul>

<p>Check out the Data model of the events API.</p>

<h2>Instructions</h2>

<p>Continue with your previous Express API project or start with the solution of that exercise. You can download it below – Set up the project on your local machine by unzipping it and using <code>npm install</code> in the corresponding folder.</p>

<p>Create a new database. You can use PlanetScale, or any other database provider. If you use PlanetScale, you might need to choose one of the following options:</p>

<ul>
  <li>Delete the one you created if you followed along with the Bookstore example.</li>
  <li>Create a database, and then create a new branch under it.</li>
</ul>

<p>Add <code>.env</code> keys for the database. If you are using PlanetScale, you can use the main branch as <code>DATABASE_URL</code> and the other branch as <code>SHADOW_DATABASE_URL</code>, but feel free to follow along with the <a href="#" target="_blank">official guidelines</a> for any database if you want to try another one.</p>

<p>If you are using the solution from the previous exercise as a basis, you will need to add keys for <code>AUTH_SECRET_KEY</code> and <code>SENTRY_DSN</code> as well (feel free to use the same values).</p>

<p>Create the Prisma Model based on the data in the JSON files. Consider the following principles:</p>

<ul>
  <li><strong>ID</strong> should be the unique identifiers of each model type.</li>
  <li>In the case of <strong>Users</strong>, the <code>username</code> should also be unique (but it is not an ID!). This is necessary because of the authentication.</li>
  <li>Each <strong>Event</strong> has one <strong>User</strong> who created it.</li>
  <li>Each <strong>Event</strong> can have multiple <strong>Categories</strong>, and each <strong>Category</strong> can have multiple <strong>Events</strong> (many-to-many). <strong>Recommendation:</strong> use an <a href="#" target="_blank">implicit many-to-many relation</a>.</li>
</ul>

<p>You can initialize the database based on the model using <code>npx prisma migrate dev</code> or <code>npx prisma db push</code> commands. If it is just a test run, we recommend <code>db push</code>. If you think your model is fine, <code>migrate dev</code> will create the migration file in your code base.</p>

<p>In our <code>prisma</code> folder, create a file called <code>seed.js</code>. In this file, we are going to implement a script that we will run with a special command provided by Prisma. The main functionality of this file should be to load the data from the JSON files into the database in an appropriate way. You can take the <code>seed.js</code> file of the Bookstore API as a reference, with the following differences:</p>

<ul>
  <li>I recommend you to create the <strong>Users</strong> and <strong>Categories</strong> sample data first, and only then the <strong>Events</strong>.</li>
  <li><strong>Categories</strong> and <strong>Events</strong> have a many-to-many relationship, which has to be considered when creating the Events. Please, refer to the <a href="#" target="_blank">corresponding guideline</a> for the proper syntax.</li>
</ul>

<p>Make sure that the <code>seed</code> command is properly configured in <code>package.json</code> file. You can check out your file from the Bookstore code or check here below.</p>
