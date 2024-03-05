import React, {ReactNode} from "react";

export type Card = {
    typeId: number
    image: string
    condition: "hidden" | "selected" | "found",
}

export type CardType = {
    id: number
    image: string
}

export type CardProps = {
    onClick: (card: Card) => void
    card: Card
}

export type GameTableProps = {
    size: number
}

export type ButtonProps = {
    onClick: () => void
    title: string
}

export type DeckSizeDropDownProps = {
    onSelect: (size: number) => void
    size: number
}

export type LayoutProps = {
    children: React.ReactNode
    home?: boolean
    centerSection?: ReactNode
}