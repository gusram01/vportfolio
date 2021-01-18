module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@App/(.*)$': './src/$1',
    '^lib/(.*)$': './common/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
