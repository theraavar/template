export { }

declare global {
    interface IComponent {
        children: React.ReactNode
        title: string
    }
}