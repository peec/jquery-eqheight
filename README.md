# jquery-eqheight


## What does it do?

It sets blocks beside each other to the same height, based on the selector you pass. It
also works responsively which is a must these days. Only applies equal height if columns are stacked horizontally within
the bounding box.


This is useful if:

- You have columns side by side and those have background and don't have the same content.



## USAGE



**HTML:**

Example with bootstrap:

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
$('.col-xs-4').eqHeight({  });
});
```

### via data attributes:

You can also initialize by data attribute data-eqheight:

````html
    <div class="row" data-eqheight=".col-xs-4">
    .... .col-xs-4 inside here will have equal height ....
    </div>
```


