import $ from 'jquery';
import 'bootstrap-sass';

import angular from 'angular';


//import sub-module
import './app-core/index';

let app = angular
.module('app', ['app.core'])
;

