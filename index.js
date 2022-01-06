async function getAvatars() {
  let fetch, useWindowFetch = true
  try { window.fetch } catch(e) { useWindowFetch = false }
  if(useWindowFetch) fetch = window.fetch
  else fetch = (await import('node-fetch')).default
  let response
  try { response = await fetch('https://randomavatar.com/more.php') } catch(e) {
    response = await fetch('https://api.allorigins.win/raw?url=https://randomavatar.com/more.php')
  }
  const html = await response.text()
  const images = Array.from(html.matchAll(/(https:\/\/cdn\.cloudflare\.steamstatic\.com.*?)"/g)).map(img => img[1])
  // I match html with regex yes go fuck yourself
  return images
}

export default getAvatars
