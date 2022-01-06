# Random Steam Avatar

Async function that returns 100 steam avatars from [randomavatar.com](https://randomavatar.com/more.php). I don't know how to request single avatar, do not ask me. May break because Cloudflare.

```
npm i random-steam-avatar
```

```javascript
import getAvatars from 'random-steam-avatar'

const avatars = await getAvatars()
console.log(avatars.length) // 100
```
