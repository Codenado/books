'use strict';

angular.module('booksApp.auth', [
  'booksApp.constants',
  'booksApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
