---
layout: post
title: "Let's make a bar chart with an angular directive and distribute it with npm."
description: ""
category:
tags: ["angular", "javascript", "d3", "npm", "browserify"]
---
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h2>Overview</h2>
      <p>Here is a simple barchart directive with awful css based on a blog post about <a href="http://bost.ocks.org/mike/bar/">d3</a> called <a href="http://bost.ocks.org/mike/bar/">Let’s Make a Bar Chart</a> by Mike Bostock.</p>
      <p>It is a basic excercise to demonstrate one way to distribute client side angular directives as node modules.</p>
      <p>This blog uses npm, the <a href="https://www.npmjs.com/">node package manager</a> to install and <a href="http://browserify.org/">browserify</a> to require the module into the local javascript.</p>
      <p>For a more thorough treatment, please see this blog post by Kyle Young on <a href="http://dontkry.com/posts/code/using-npm-on-the-client-side.html">Using npm on the client side.</a></p>
      <p>The code is available on github from this <a href="https://github.com/angular-reusable-components/chart-components">repository</a>.</p>
      <p>For for expediency's sake, the css is distributed inside the directive's template, which is not optimal.  There is no generally accepted method to bundling style with npm, but there are some options.</p>
    </div>
    <div class="col-md-6" ng-controller="BarChartCtrl">
      <h3>Portland neighborhoods by count of heritage trees</h3>
      <barchart data="[
        {value: 28, label: 'IRVINGTON'},
        {value: 16, label: 'SELLWOOD-MORELAND IMPROVEMENT LEAGUE'},
        {value: 13, label: 'NORTHWEST DISTRICT'},
        {value: 12, label: 'HILLSDALE'},
        {value: 12, label: 'GOOSE HOLLOW'},
        {value: 11, label: 'SOUTHWEST HILLS'},
        {value: 11, label: 'MT. TABOR'},
        {value: 10, label: 'LAURELHURST'},
        {value: 10, label: 'OVERLOOK'},
        {value: 10, label: 'HOSFORD-ABERNETHY'},
        {value: 9, label: 'WOODSTOCK'},
        {value: 8, label: 'RICHMOND'}
      ];"></barchart>
    </div>
  </div>
  <div class="row">
    <h2>Usage</h2>
    <p>Install using npm.</p>
    <div class="highlight">
      <pre>
        <code>
          npm install angular-chart-components --save
        </code>
      </pre>
    </div>
    <p>Require the module in your code and list it as a dependency.</p>
    <div class="highlight">
      <pre>
        <code>
          var chartComponents = require('angular-chart-components');
          var module = angular.module('myApp', [
            'ChartComponents.barchart'
          ]);
        </code>
      </pre>
    </div>
    <p>Use the barchart directive in your markup with some inline data.</p>
    <div class="highlight">
      <pre>
        <code>
          &lt;barchart data="[
             {value: 28, label: 'IRVINGTON'},
             {value: 16, label: 'SELLWOOD-MORELAND IMPROVEMENT LEAGUE'},
             {value: 13, label: 'NORTHWEST DISTRICT'},
             {value: 12, label: 'HILLSDALE'},
             {value: 12, label: 'GOOSE HOLLOW'},
             {value: 11, label: 'SOUTHWEST HILLS'},
             {value: 11, label: 'MT. TABOR'},
             {value: 10, label: 'LAURELHURST'},
             {value: 10, label: 'OVERLOOK'},
             {value: 10, label: 'HOSFORD-ABERNETHY'},
             {value: 9, label: 'WOODSTOCK'},
             {value: 8, label: 'RICHMOND'}
           ]"&gt;&lt;/barchart&gt;
        </code>
      </pre>
    </div>
    <p>Use the barchart directive in your markup with some data on a controller.</p>
    <div class="highlight">
      <pre>
        <code>
          &lt;barchart data="items"&gt;&lt;/barchart&gt;
        </code>
      </pre>
    </div>
    <div class="highlight">
      <pre>
        <code>
          $scope.items = [
            {value: 28, label: 'IRVINGTON'},
            {value: 16, label: 'SELLWOOD-MORELAND IMPROVEMENT LEAGUE'},
            {value: 13, label: 'NORTHWEST DISTRICT'},
            {value: 12, label: 'HILLSDALE'},
            {value: 12, label: 'GOOSE HOLLOW'},
            {value: 11, label: 'SOUTHWEST HILLS'},
            {value: 11, label: 'MT. TABOR'},
            {value: 10, label: 'LAURELHURST'},
            {value: 10, label: 'OVERLOOK'},
            {value: 10, label: 'HOSFORD-ABERNETHY'},
            {value: 9, label: 'WOODSTOCK'},
            {value: 8, label: 'RICHMOND'}
          ];
        </code>
      </pre>
    </div>
  </div>
</div>
