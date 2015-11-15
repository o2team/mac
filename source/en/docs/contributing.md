title: Contribution
---

## Development

`Open Oriented` is the aims of [AOTU Labs](http://aotu.io). Welcome to join us in improving the document. 

### Before starting

The document site was powered by [hexo](https://hexo.io), so install hexo locally.

``` bash
npm i -g hexo-cli
```

### How to contribute

1. Fork [o2team/mac].
2. Clone the forked repo and install the dependencies

    {% code %}
    $ git clone https://github.com/<username>/mac.git
    $ cd mac
    $ npm install
    {% endcode %}

3. Create a feature branch

    {% code %}
    $ git checkout -b new_feature
    {% endcode %}

4. bootup hexo, preview the doc at localhost:4000

    ``` bash
    hexo s -watch
    ```

    关于hexo更多的用法，请参考hexo官网。More details about how to use hexo, please refer to [Hexo](http://hexo.io).
   
5. Make modifications to the documents with your favorite Editors
6. Push your changes

    {% code %}
    $ git push origin new_feature
    {% endcode %}
    
7. Create a PR (pull request), and describe the changes.


### Notifications

- Don't change the version number in  `package.json`.
- We will verify and merge your PR as soon as possible, do self-tests before making a PR.


## Reporting issues 

Reporting your issues at [GitHub](https://github.com/o2team/mac/issues).

[o2team/mac]: https://github.com/o2team/mac
