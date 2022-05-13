<template>
    <div class="home">
        <div class="info">
            <p class="greeting">Hi all. I am</p>
            <h1 class="name">Volodymyr Dashuk</h1>
            <h2 class="position">&#x3e; Front-end developer</h2>
            <p class="code">&#x2f;&#x2f; complete the game to continue</p>
            <p class="code">&#x2f;&#x2f; you can also see it on my Github page</p>
            <p class="expression">
                <span class="variables">const&nbsp;</span>
                <span class="value">githubLink&nbsp;</span>
                <span class="assignment">=&nbsp;</span>
                <a class="github-link" href="https://github.com/volodymyrDashuk">&#x201C;https://github.com/volodymyrDashuk&#x201D;</a>
            </p>
        </div>
        <div class="game">
            <MemoryCardGame />
            <span class="board-screw top left"/>
            <span class="board-screw top right"/>
            <span class="board-screw bottom left"/>
            <span class="board-screw bottom right"/>
        </div>
    </div>
</template>

<script>
import MemoryCardGame from "@/components/MemoryCardGame";
export default {
    name: 'HelloView',
    components: {MemoryCardGame}
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;
// Local Variables
$content-width: 1160px;

    .home {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        max-width: $content-width;
        width: 100%;
        margin: 0 auto;

        @media (max-width: $content-width) {
            padding-left: 20px;
            padding-right: 20px;
        }

        &:before {
            content: "";
            display: block;
            position: absolute;
            right: -35%;
            top: 0;
            background: var.$game-background no-repeat;
            width: 100%;
            height: 100%;
            z-index: -1;

            @media (max-width: var.$mobile__default) {
                right: unset;
                left: 0;
            }
        }


        .info {
            padding-right: 2%;

            .greeting {
                color: var.$secondary-white-2;
            }

            .name {
                color: var.$secondary-white-2;
            }

            .position {
                color: var.$secondary-blue;
                margin-bottom: 80px;
            }

            .code {
                font-size: 16px;
                line-height: 21px;
                margin-bottom: 10px;
            }

            .expression {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
            }

            .variables {
                color: var.$secondary-blue;
            }

            .value {
                color: var.$accent-shamrock;
            }

            .assignment {
                color: var.$secondary-white;
            }

            .github-link {
                color: var.$accent-sweet-pink;
            }
        }

        .game {
            max-width: 500px;
            width: 100%;
            padding: 35px 35px 35px 30px;
            position: relative;

            background: linear-gradient(150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%);
            border: 1px solid #0C1616;
            box-shadow: inset 0px 2px 0px rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(64px);
            /* Note: backdrop-filter has minimal browser support */

            border-radius: 8px;

            @media (max-width: var.$mobile__default) {
                display: none;
            }

            .board-screw {
                position: absolute;
                width: 13px;
                height: 13px;
                border-radius: 50%;

                &:after {
                    position: absolute;
                    display: inline-block;
                    content: '';
                    width: 26px;
                    height: 26px;
                    background: var.$board-screw-icon no-repeat;
                }

                &.top {
                    top: 13px;
                }

                &.bottom {
                    bottom: 13px;
                }

                &.left {
                    left: 13px;
                }

                &.right {
                    right: 13px;
                }
            }
        }
    }
</style>
