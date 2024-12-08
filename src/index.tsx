import {createRoot} from 'react-dom/client'
import { App } from './components/App'

const rootEl = document.getElementById('root') as HTMLElement

const root = createRoot(rootEl)

root.render(<App></App>)