import HomeLayout from './components/Home'
import RandomImages from './components/RandomBack'
import Popup from './components/common/Popup'


export default function Home() {
  return (
    <>
      <RandomImages />
      <HomeLayout />
      <Popup />
    </>
  )
}
