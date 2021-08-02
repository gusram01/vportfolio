import angularSvg from './html/angular.html';
import css3Svg from './html/css3.html';
import githubSvg from './html/github.html';
import html5Svg from './html/html5.html';
import javaSvg from './html/java.html';
import javascriptSvg from './html/javascript.html';
import mongodbSvg from './html/mongodb.html';
import mysqlSvg from './html/mysql.html';
import nextjsSvg from './html/nextjs.html';
import nodejsSvg from './html/nodejs.html';
import postgresqlSvg from './html/postgresql.html';
import pugSvg from './html/pug.html';
import pythonSvg from './html/python.html';
import reactSvg from './html/react.html';
import rxjsSvg from './html/rxjs.html';
import typescriptSvg from './html/typescript.html';
import vueSvg from './html/vue.html';
import webpackSvg from './html/webpack.html';

const tools = [
  { title: 'typescript', html: typescriptSvg },
  { title: 'javascript', html: javascriptSvg },
  { title: 'python', html: pythonSvg },
  { title: 'java', html: javaSvg },
  { title: 'github', html: githubSvg },
  { title: 'nodejs', html: nodejsSvg },
  { title: 'pug', html: pugSvg },
  { title: 'webpack', html: webpackSvg },
  { title: 'angular', html: angularSvg },
  { title: 'vue', html: vueSvg },
  { title: 'rxjs', html: rxjsSvg },
  { title: 'html5', html: html5Svg },
  { title: 'css3', html: css3Svg },
  { title: 'nextjs', html: nextjsSvg },
  { title: 'react', html: reactSvg },
  { title: 'mongodb', html: mongodbSvg },
  { title: 'mysql', html: mysqlSvg },
  { title: 'postgresql', html: postgresqlSvg },
];

export const getTools = (container: HTMLDivElement) => {
  const fragment = document.createDocumentFragment();

  tools.forEach((tool) => {
    const div = document.createElement('div');
    div.className = 'tool';
    div.innerHTML = tool.html;
    div.setAttribute('data-title', tool.title);
    fragment.appendChild(div);
  });

  container.appendChild(fragment.cloneNode(true));
};
