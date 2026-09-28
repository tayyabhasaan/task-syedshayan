// Downloads every image the page uses into /public so nothing is hotlinked.
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'

const SITE = 'https://syedshayan.com/'
const files = [
  "Images/3a98515c43ee07dd391938d6953825f97806f224.png",
  "Images/Group.png",
  "Images/blue-logo.jpg",
  "Images/camera_14611311.png",
  "Images/consumer_policy.png",
  "Images/corruption%20and%20integrity.png",
  "Images/facebook_4423621.png",
  "Images/files.png",
  "Images/footer-end-img-2.png",
  "Images/governance_&_public_policy.png",
  "Images/header-bg-20.jpeg",
  "Images/header.png",
  "Images/home-bg-17.jpg",
  "Images/home-bg-desktop-4.jpeg",
  "Images/home-bg-icons.png",
  "Images/insights.png",
  "Images/islamabad-1.png",
  "Images/laptop.png",
  "Images/linkedin_4926491.png",
  "Images/logo-9.png",
  "Images/minrals.png",
  "Images/modal-bg-1.png",
  "Images/modal-town-13.png",
  "Images/natural_resources.png",
  "Images/news-desktop.png",
  "Images/news-room.png",
  "Images/news.png",
  "Images/on-this-date.png",
  "Images/otd-calender.png",
  "Images/pakistan-map.png",
  "Images/people.png",
  "Images/podcast1.png",
  "Images/real_estate.jpeg",
  "Images/refinancing2.png",
  "Images/remort.png",
  "Images/reports1.png",
  "Images/research-report.png",
  "Images/screen.png",
  "Images/search2.png",
  "Images/sir-shayan.jpeg",
  "Images/ss-main-logo.png",
  "Images/survey%20image.png",
  "Images/think2.png",
  "Images/threads_12105331.png",
  "Images/tower-new.png",
  "Images/tv1.png",
  "Images/twitter_5968951.png",
  "Images/updated%20logo.png",
  "Images/urban_regional_development.png",
  "Images/video_15047571.png",
  "Images/web2.png",
  "Images/youtube_253781.png",
  "Images/zameen-haqaiq.png"
]

for (const f of files) {
  const dest = `public/${f}`
  try {
    const res = await fetch(SITE + f.split('/').map(encodeURIComponent).join('/'))
    if (!res.ok) throw new Error(res.status)
    await mkdir(dirname(dest), { recursive: true })
    await writeFile(dest, Buffer.from(await res.arrayBuffer()))
    console.log('ok  ', f)
  } catch (e) {
    console.log('FAIL', f, String(e))
  }
}
