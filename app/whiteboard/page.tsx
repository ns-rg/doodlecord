"use client";
import { Tldraw } from 'tldraw'
import { useSyncDemo } from '@tldraw/sync'
import 'tldraw/tldraw.css'

export default function App() {
    const store = useSyncDemo({ roomId: 'myapp-tempdoodle' })
    return (
        <div style={{ position: 'fixed', inset: 0 }}>
            <Tldraw store={store} />
        </div>
    )
}