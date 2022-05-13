<template>
    <div class="memory-card-game">
        <div class="turn">&#x2f;&#x2f; Turn: {{ turn }}</div>
        <div class="board-game">
            <div
                v-for="(card, index) in deckOfCards"
                @click="onClick(card, index)"
                :class="['card', isFlippedClass(card)]"
                :key="card.id">
                <div class="front"></div>
                <div class="back">{{ card.content }}</div>
            </div>
        </div>
        <div class="action-toolbar">
            <button
                v-if="allPairsAreFound"
                @click="replay()"
                class="button-primary"
            >
                Play again
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MemoryCardGame',
    data() {
        return {
            timer: null,
            turn: 0,
            flippedCards: [],
            deckOfCards: [],
            allPairsAreFound: false,
            cards: ["🎮", "🚲", "📓", "⚡", "💻", "🎧"]
        };
    },
    methods: {
        isFlippedClass({ id, isPairFound }) {
            return {
                flipped: this.flippedCards.find((x) => x.id === id),
                matchingPair: isPairFound
            };
        },

        onClick(card, index) {
            if (!card.isPairFound) {
                clearTimeout(this.timer);
                this.flippedCards =
                    this.flippedCards.length === 2
                        ? [{ ...card, index }]
                        : [...this.flippedCards, { ...card, index }];
            }
        },

        shuffle(cards) {
            return cards.sort(() => Math.random() - 0.5);
        },

        replay() {
            clearTimeout(this.timer);
            this.turn = 0;
            this.flippedCards = [];
            this.cards = this.cards.map((x) => {
                return { ...x, isPairFound: false };
            });
            this.deckOfCards = this.shuffle(this.cards);
        }
    },

    watch: {
        flippedCards(cards) {
            if (cards.length === 2) {
                this.turn++;
                if (cards[0].content === cards[1].content) {
                    this.deckOfCards[cards[0].index].isPairFound = true;
                    this.deckOfCards[cards[1].index].isPairFound = true;
                } else if (cards[0].content !== cards[1].content) {
                    const self = this;
                    this.timer = setTimeout(() => {
                        self.flippedCards = [];
                    }, 1500);
                }
                this.allPairsAreFound = this.deckOfCards.every((x) => x.isPairFound);
            }
        }
    },

    mounted() {
        this.cards = this.cards.map((x, index) => {
            return { id: index, content: x, isPairFound: false };
        });

        this.cards = this.cards.concat(
            this.cards.slice().map(({ content, id }) => {
                return { id: this.cards.length + id, content };
            })
        );

        this.deckOfCards = this.shuffle(this.cards);
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.memory-card-game {
    .board-game {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
    }

    .turn {
        padding: 5px;
        background: rgba(1, 20, 35, 0.19);
        border-radius: 8px;
        margin-bottom: 10px;
        color: var.$secondary-white;
    }

    .card {
        width: 80px;
        height: 80px;
        font-size: 3rem;
        position: relative;
        transition: opacity 0.7s;

        .front {
            background: linear-gradient(-45deg, #43D9AD, #4D5BCE);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;

            @keyframes gradient {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }
        }

        .back {
            transform: rotateY(-180deg);
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var.$secondary-white-2;
        }

        &.matchingPair .front,
        &.flipped .front {
            transform: rotateY(180deg);
        }

        &.matchingPair .back,
        &.flipped .back {
            transform: rotateY(0deg);
        }

        &.matchingPair {
            opacity: 0.3;
        }
    }

    .back,
    .front {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        backface-visibility: hidden;
        transform: translateZ(0);
        transition: transform 0.8s;
        transform-style: preserve-3d;
        border-radius: 5px;
        background: white;
    }

    .button-primary {
        display: block;
        margin: 0 auto;
    }
}
</style>
