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
  angularSvg,
  css3Svg,
  githubSvg,
  html5Svg,
  javaSvg,
  javascriptSvg,
  mongodbSvg,
  mysqlSvg,
  nextjsSvg,
  nodejsSvg,
  postgresqlSvg,
  pugSvg,
  pythonSvg,
  reactSvg,
  rxjsSvg,
  typescriptSvg,
  vueSvg,
  webpackSvg,
];

export const getTools = (container: HTMLDivElement) => {
  const fragment = document.createDocumentFragment();
  pauseAnimation(container);

  tools.forEach((tool) => {
    const div = document.createElement('div');
    div.className = 'tool';
    div.innerHTML = tool;
    fragment.appendChild(div);
  });

  container.appendChild(fragment.cloneNode(true));
};
