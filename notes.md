# Wyldstyle

~~~bash
$ ws directory1 file1.html directory2 --watch --output _utilities.scss
~~~

~~~
{
    "breakpoints": {
        "m":  "breakpoint(mobile)",
        "l":  "breakpoint(tablet)",
        "xl":  "breakpoint(retina)"
    },
    "directory": ["file1.html"],
    "output": "_utilities.scss",
    "emmet": {
        "syntax": "scss",
        "preferences": {
            "caniuse.enabled": false,
            "css.autoInsertVendorPrefixes": false
        },
        "snippets": {
            "m:0a": "margin: 0 auto"
        }
    }
}
~~~

# Todo
- [ ] Logo?
- [ ] Documentation?
- [x] Create a config file reference to remove the dependency from the cli arguments.[x]
- [x] Refactor the caching algorithm to remove classes that were erased in the given file.
- [x] Add compatibility with task runners.
- [x] Structure the application better.
- [x] Add support for dot classes.
- [x] Extract the caching into it's own module for testability.
- [x] Refactor out to ES6.
- [x] Add responsive selectors.
- [x] Add breakpoints on the config file.
- [x] Expand more on the configurability through a JSON file.
- [x] Add defaults for the config.
- [x] Add dynamic breakpoints for the whole watcher.
- [x] Use the config object as an injection rather than the json object.
- [ ] Refactor out the caching logic since the wrapper solution is just a quick hack.
- [ ] Create a wrapper class to handle the responsive content strings.
- [x] Create a config for emmet for both preferences and snippets.
- [x] Create custom snippets on the json config.
- [ ] Add an option to set hover states with `@h`.
- [x] Add an option to ignore certain directories.
- [x] Add the feature to select directories with the CLI and merge the preferences from the json file.
- [x] Add the flag for the output rather than just the last parameter.
- [ ] Refactor out the flag logic to it's own class.
