---
layout: post
title: "The State of the Page"
description: ""
category:
tags: []
ui-view: ""
---
Here is an example of setting the state of the page using the angular-ui router. The map is bound to the
latitude and longitude specified in the url hash. Click on the following link, to
navigate between Portland and Crater Lake.

<ul>
    <li>
        <a ui-sref="main({ lat:45.52, lng:-122.68 })">Portland, Oregon</a>
    </li>
    <li>
        <a ui-sref="main({ lat:42.95, lng:-122.1 })">Crater Lake, Oregon</a>
    </li>
</ul>

Using the angular-ui router, the above links are written like

~~~ html
<a ui-sref="main({ lat:45.52, lng:-122.68 })">Portland, Oregon</a>
<a ui-sref="main({ lat:42.95, lng:-122.1 })">Crater Lake, Oregon</a>
~~~

if you have clicked a navigation link, you can see that the back button works to take you back to the last location. Note that the url fragment does not update, if you pan or zoom the map.  We're not listening for that event and relaying it back to the state.
