# jquery-eqheight


[Example (bootstrap)](https://rawgit.com/peec/jquery-eqheight/master/samples/bootstrap.html)


## What does it do?

It sets blocks beside each other to the same height, based on the selector you pass. It
also works responsively which is a must these days. Only applies equal height if columns are stacked horizontally within
the bounding box.


This is useful if:

- You have columns side by side and those have background and don't have the same content.


## Install


```
bower install jquery-eqheight
```

You can also manually download the jquery.eqheight.js file to your project.



## USAGE


### Example HTML

Example with bootstrap 3:

```html
<div class="container">
    <div class="row">
        <div class="col-xs-4" style="background: yellow;">
        Some text.
        </div>
        <div class="col-xs-4" style="background: red;">
        Some long text ..
        </div>
        <div class="col-xs-4" style="background: pink;">
        Some very long text ...
        </div>
    </div>
</div>
```

### via javascript:

```javascript
$(function () {
    $('.col-xs-4').eqHeight({
        bindResizeEvent: true,
        heightAdjuster: function ($self) {
            return $self;
        }
    });
});
```

### via data attributes:

You can also initialize by data attribute data-eqheight:

````html
    <div class="row" data-eqheight=".col-xs-4">
    .... .col-xs-4 inside here will have equal height ....
    </div>
```

Note that internally we use `$(this).find('...')` on the `data-eqheight` attribute so only children of the container will be found. This is useful so you don't apply the rules globally.



### Settings


| Settings             | Description   |
| -------------------- |:-------------:|
| bindResizeEvent      | Binds to resize event if true. This should probably be done, if you have a responsive site. if not disable it (better performance). |
| heightAdjuster       | "Advanced" callback, set height and check height on parent or child of the selector passed to the plugin.   |

