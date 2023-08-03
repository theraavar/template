export { }

declare global {
    interface IComponent {
        children: React.ReactNode
        image: string
        link: string
        title: string
    }
}