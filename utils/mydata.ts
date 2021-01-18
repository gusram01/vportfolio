const data = [
  {
    title: 'MoviesApi',
    abstract:
      'Apply API concepts, DOM-manipulation, Login, Form-validation, LocalStorage, InfiniteScrolling/Pagination, SPA',
    description:
      ' This app is usefull because it allowed me to apply many concepts, besides to practicing and solidifying the learning of frameworks, such as Vue, Angular and React. \n VanillaJS was the first implementation and it allows me to manage and preserve information trough the LocalStorage, it also presented me with the opportunity to build a very basic login implementation. The Intersection Observer API was implemented to apply the infinite scrolling technique to render the data provided by MovieDB restAPI.  \n ',
    techs: [
      {
        tech: 'javascript',
        live: 'https://gus-apimovies.web.app/',
        repo: 'https://github.com/gusram01/project-videos',
      },
      {
        tech: 'angular',
        live: 'http://videos-ng.gusramirez.vercel.app/',
        repo: 'https://github.com/gusram01/videos-ng',
      },
      {
        tech: 'vue',
        live: 'http://videos-vue.gusramirez.vercel.app/',
        repo: 'https://github.com/gusram01/videos-vue',
      },
    ],
    image: '',
  },
  {
    title: 'MyClients',
    abstract:
      'Backend/Frontend, Relational-DB, Authentication, Authorization, DOM-manipulation, Pagination, Documentation, Swagger, Postman',
    description:
      'I was able to focus my knowledge from many sources and get this app up and running. It all start with choosing the database (postgresql, mainly because the free host) and the integration with the psql & psql-promises library beyond any ORM. In this way, I built the backend inside a nodeJS server dividing the store implementation for the server. It was too much work but it allowed me to absorb the application of many concepts. The data was initially provided by webscrapping and organized in tables applying relational database concepts. In addition middlewares was implemented to handle the authorization and authentication of users.  \n The frontend choice was Angular because it is fun and provides all the tools that frameworks can offer. I created services for data handling, pipes to render information appropriately, use rxjs operators to transform data flow and used modules to reinforce application performance',
    techs: [
      {
        tech: 'node',
        live: 'https://gudh.herokuapp.com/',
        repo: 'https://github.com/gusram01/apiclients',
      },
      {
        tech: 'angular',
        live: '',
        repo: 'https://github.com/gusram01/front-clients',
      },
    ],
    image: '',
  },
  {
    title: 'Games',
    abstract: 'Algorithms, DOM-manipulation, LocalStorage, Animations',
    description:
      'With this application I had the opportunity to practice algorithms and DOM manipulation, in such a way that the execution of the game complies with a predefined path (Start, middle, how it ends), I was also able to practice with some CSS to achieve the user interface.',
    techs: [
      {
        tech: 'javascript',
        live: 'https://games-gus.web.app/',
        repo: 'https://github.com/gusram01/games',
      },
    ],
    image: '',
  },
];
export default data;
