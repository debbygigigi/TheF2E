<template lang="pug">
    .container
        header
            small CCCLOTHES
            h1 MEN’S TOPS
        .item.item-1
            .border
            .img
            h2.title(data-text="LINEN BLAZER") LINEN BLAZER
            .subtitle
                p Men's outfit
            .pattern
                .order 01
                .pattern-img
        .item.item-2
            .border
            h2.order 02
            .block
            .subtitle
                p Men’s basics
            .img
            h2.title(data-text="FREELIFT") FREELIFT

        .item.item-3
            .border
            .block
            .img
            h2.title(data-text="SUPER SKINNY") SUPER SKINNY
            h2.order 03
            .subtitle
                p Men’s pattern shirts
        .item.item-4
            .border
            .img
            h2.title(data-text="DENIM") DENIM
            h2.order 04
            .subtitle
                p Men’s cadual
            .pattern
        .item.item-5
            .border
            .img
            h2.title(data-text="SWEATSHIRTS") SWEATSHIRTS
            h2.order 05
            .subtitle
                p Men’s jacket
            .pattern
        .item.item-6
            .border
            .block
            .img
            h2.title(data-text="VINTAGE DENIM") VINTAGE DENIM
            h2.order 06
            .subtitle
                p Men’s classic
        .item.item-7
            .border
            .img
            .block
            h2.title(data-text="EDITION") EDITION
            h2.order 07
            .subtitle
                p Men’s shirts
</template>

<style lang="sass">
@import '@/pages/productGallery/main.sass'

.container
    height: 100vh
    display: grid
    +gridTemplate(8, 20)
    margin: 32px

    header
        grid-column: 3 / span 4
        justify-self: center
        text-align: center
        small
            font-size: 20px
            background: black
            color: white
            padding: 0 10px
        h1
            font-size: 72px
            margin: 0
    .item
        display: grid
    .item-1
        display: grid
        +gridArea(2,1,6,5)
        +gridTemplate(4, 5)
        .title
            grid-area: 1 / 1 / 3 / 4
            align-self: center

        .subtitle
            +gridArea(5,5,2,1)
            writing-mode: vertical-lr;
        .border
            grid-area: 1 / 3 / 4 / 6
            margin: 50px 60px
        .img
            grid-area: 2 / 1 / 6 / 5
            +image($image-01)
        .pattern
            grid-area: 5 / 1 / 7 / 4
            z-index: 2
            display: flex
            padding: 48px 48px 48px 0
            align-items: flex-end
            .order
                font-size: 48px
                font-weight: bold
            .pattern-img
                background: url(https://hexschool.github.io/THE_F2E_Design/week4-product%20gallery/assets/pattern%20unit.png)
                height: 100%;
                width: 100%;
    .item-2
        display: grid
        grid-area: 3 / 5 / 7 / 9
        +gridTemplate(4, 5)
        .img
            +image($image-02)
            +gridArea(2,2,2,2)
        .border
            +gridArea(1,3,2,2)
        .block
            margin: 50px 60px
            +gridArea(1,2,3,3)
        .subtitle
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            +gridArea(1,1,1,2)
        .title
            +gridArea(4,3,1,2)
        .order
            +gridArea(1,4,1,1)
            display: flex
            justify-content: flex-end
    .item-3
        +gridArea(8,1,4,5)
        +gridTemplate(5, 4)
        .border
            +gridArea(2,3,3,3)
            margin: $margin-row $margin-column
        .img
            +image($image-03)
            +gridArea(2,1,2,4)
        .title
            +gridArea(1,2,1,3)
            display: flex
            align-self: flex-end
        .order
            +gridArea(4,5,1,1)
        .subtitle
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            +gridArea(4,1,1,2)
        .block
            +gridArea(1,1,2,2)
            margin: $margin-row 0
    .item-4
        +gridArea(7,6,7,3)
        +gridTemplate(3, 6)
        .border
            +gridArea(2,1,2,3)
            margin: 0 $margin-column
        .img
            +image($image-04)
            +gridArea(3,2,4,2)
        .title
            +gridArea(3,1,2,1)
            display: flex
            writing-mode: vertical-lr
            transform: rotate(180deg)
            justify-self: flex-end
            align-self: flex-start
            &:before
                left: 15px
                top: 0
                height: auto
            &:after
                left: 24px
                top: 0
                height: auto
        .order
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            +gridArea(6,1,1,1)
        .subtitle
            display: flex;
            align-items: center;
            justify-content: flex-end;
            writing-mode: vertical-lr;
            +gridArea(1,3,2,1)
        .pattern
            +gridArea(6,2,2,2)
            background: url($image-pattern)
            width: 100%;
            margin: $margin-row 0
    .item-5
        +gridArea(12,1,4,6)
        +gridTemplate(4, 6)
        .border
            +gridArea(3,2,2,2)
            margin: $margin-row 0
        .img
            +image($image-05)
            +gridArea(2,3,2,2)
        .title
            +gridArea(2,1,1,3)
            display: flex
            align-self: end
        .order
            display: flex;
            align-items: flex-end;
            +gridArea(3,2,1,1)
        .subtitle
            display: flex;
            +gridArea(2,5,1,2)
        .pattern
            +gridArea(1,1,2,3)
            +image($image-pattern)
            margin: $margin-row $margin-column
            background-size: contain;
    .item-6
        +gridArea(14,4,6,5)
        +gridTemplate(5, 6)
        .border
            +gridArea(5,2,2,4)
            margin: $margin-row 0
        .img
            +image($image-06)
            +gridArea(2,2,4,4)
        .title
            grid-column: 2 / span 4
            +gridArea(1,3,1,3)
            display: flex;
            align-self: flex-end;
        .order
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            +gridArea(3,1,1,1)
        .subtitle
            display: flex;
            justify-content: center;
            +gridArea(6,3,1,2)
        .block
            +gridArea(4,1,2,2)
            margin: 0 $margin-column
    .item-7
        +gridArea(16,1,5,3)
        +gridTemplate(3, 6)
        .border
            +gridArea(1,1,4,3)
            margin: $margin-row $margin-column
        .img
            +image($image-07)
            +gridArea(2,1,4,2)
        .title
            +gridArea(2,3,2,1)
            writing-mode: vertical-lr
            display: flex
            align-items: self-start
            justify-self: self-start
            &:before
                left: 25px
                top: 0
                height: auto
            &:after
                left: 40px
                top: 0
                height: auto
        .order
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            +gridArea(5,3,1,1)
        .subtitle
            display: flex;
            align-items: flex-end
            +gridArea(1,1,1,2)
        .block
            +gridArea(4,3,2,1)
</style>
