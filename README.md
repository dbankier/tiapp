tiapp
=====

Locates and reads the tiapp.xml

Install
-------

```
sudo npm install -g tiapp
```


CLI Commamnds
-------------

### tiapp

Returns a JSON representation of the tiapp.xml file if found

Public API
----------

### find

`getCurrentVersion(path, callback);`

* `path` to begin search for tiapp.xml
* `callback` returns to arguments
  1. `err` - error message
  2. `res` - object with:
    `path` - path where `tiapp.xml` was found
    `obj` - tiapp.xml as a javascript object

