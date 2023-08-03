export { }

declare global {
    interface IComponent {
        children: React.ReactNode
        display: string
        image: string
        link: string
        target: 'internal' | 'external' | undefined
        title: string
        type: 'button' | 'submit' | 'reset' | undefined
    }
}