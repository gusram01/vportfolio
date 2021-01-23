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
import { pauseAnimation } from '.';

const tools = [
  { title: 'angular', html: angularSvg },
  { title: 'css3', html: css3Svg },
  { title: 'github', html: githubSvg },
  { title: 'html5', html: html5Svg },
  { title: 'java', html: javaSvg },
  { title: 'javascript', html: javascriptSvg },
  { title: 'mongodb', html: mongodbSvg },
  { title: 'mysql', html: mysqlSvg },
  { title: 'nextjs', html: nextjsSvg },
  { title: 'nodejs', html: nodejsSvg },
  { title: 'postgresql', html: postgresqlSvg },
  { title: 'pug', html: pugSvg },
  { title: 'python', html: pythonSvg },
  { title: 'react', html: reactSvg },
  { title: 'rxjs', html: rxjsSvg },
  { title: 'typescript', html: typescriptSvg },
  { title: 'vue', html: vueSvg },
  { title: 'webpack', html: webpackSvg },
];

export const getTools = (container: HTMLDivElement) => {
  const fragment = document.createDocumentFragment();
  // pauseAnimation(container);

  tools.forEach((tool) => {
    const div = document.createElement('div');
    div.className = 'tool';
    div.innerHTML = tool.html;
    div.setAttribute('data-title', tool.title);
    fragment.appendChild(div);
  });

  container.appendChild(fragment.cloneNode(true));
};
