import SideBar from '@/lib/sidebar/SideBar'
import '../styles/app.css'
import ContentWindow from '@/lib/contentWindow/ContentWindow'

export default function App() {
  return [<SideBar />, <ContentWindow />]
}
