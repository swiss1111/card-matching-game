export type Card = {
    typeId: number
    image: string
    condition: "hidden" | "selected" | "found",
}

export type CardProps = {
    onClick: (card: Card) => void
    card: Card
}

export type GameTableProps = {
    size: number
}