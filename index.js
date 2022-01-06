import nodefetch from 'node-fetch'

async function getAvatars() {
  const fetch = window?.fetch ?? nodefetch
  const response = await fetch('https://randomavatar.com/more.php')
  const html = await response.text()
  const images = Array.from(html.matchAll(/(https:\/\/cdn\.cloudflare\.steamstatic\.com.*?)"/g)).map(img => img[1])
  // I match html with regex yes go fuck yourself
  return images
}

export default getAvatars