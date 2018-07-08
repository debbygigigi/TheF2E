<template lang="pug">
main
    .home
        .left
            img(src="https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/comic%20cover.png")
        .right
            h1.topic MY HEXSCHOOL
            .intro
                .item
                    .title Genres
                    | Fusce/vehicula/dolor
                .item
                    .title Author
                    | Namae Shiranai
                .item
                    .title Author
                    | Namae Shiranai
                .item
                    .title Rate
                    .star 星星
                .item.summary
                    .title Summary
                    .content
                        | If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die.
                        br
                        | Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals.

    .chooseChapter
        h2.title All Chapters
        ul
            li
                router-link(to="chapter/1") Chapter 1: The F2E Challenge Start!
            li
                router-link(to="chapter/2") Chapter 2: Todo List is Going Crazy!
                    span.tag NEW

</template>

<style lang="sass" scoped>
@import '@/pages/comicViewer/main.sass'

$sm: 576px
*
    // border: 1px solid #000

main
    background: $grayTrans
    min-height: 100vh;
    padding: 24px

.home
    display: flex;
    justify-content: center;
    @media screen and (max-width: $sm)
        flex-direction: column;
        align-items: center;

    .left
        width: 100%
        max-width: 292px
        background: #FFFFFF;
        border: 4px solid #000000;
        img
            width: 100%;
            height: 100%;
            object-fit: cover;

    .right
        width: 100%
        max-width: 317px
        .topic
            margin: 0;
            text-align: center;
            background: #000;
            color: #fff;
        .intro
            margin: 16px 20px;
            .item
                display: flex;
                line-height: 24px;
                .title
                    width: 30%
                    font-weight: bold
                    margin-bottom: 8px
                &.summary
                    margin-top: 24px
                    display: block;
                    .title
                    .content br
                        line-height: 48px;

.chooseChapter
    max-width: 620px;
    margin: 24px auto 0;
    width: 100%;
    .title
        margin: 0;
        display: inline-block;
        padding: 8px 24px;
        background: #000;
        color: #fff;
    ul
        margin: 0;
        padding: 11px 0;
        list-style: none;
        background: #FFFFFF;
        border: 4px solid #000000;
        a
            height: 42px;
            display: block;
            line-height: 42px;
            padding: 0 24px;
            color: #000;
            text-decoration: none;
            font-weight: bold;
            &:hover
                background: #000000
                color: #ffffff
            .tag
                margin-left: 16px
                background: $green
                line-height: 18px;
                width: 55px;
                display: inline-block;
                text-align: center;
                color: #000000

</style>
