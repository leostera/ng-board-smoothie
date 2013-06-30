# [smoothie](http://smoothiecharts.org) graphs
## ng-board widget

A graph widget that uses the [smoothie](http://smoothiecharts.org) library to visualize data.

### Installation

Can be installed using `$ bower i ng-board-smoothie`

### Examples of use
```html
<dash-smoothie
        listen-to="volume"
        height="400px"
        width="800px"
        stroke-style="#ff0000"
        fill-style="rgba(255, 0, 0, 0.4)">
    </dash-smoothie>
```
![](http://content.screencast.com/users/leostera/folders/Jing/media/9e623161-7776-4f72-ac0c-9d2ee812aab8/00000003.png)

```html
<dash-smoothie
    listen-to="tone"
    height="200px"
    width="800px"
    speed="47"
    interpolation="linear"
    line-width="2"
    fill-style="rgba(0, 200, 0, 0.2)"
    >
</dash-smoothie>
```
![](http://content.screencast.com/users/leostera/folders/Jing/media/a8a5f4e9-1a16-428f-ad6e-a93016257d4e/00000004.png)

