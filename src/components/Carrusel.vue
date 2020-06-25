<template>
  <div>
    <sequential-entrance>
      <div class="carrusel">
        <div class="card-carousel-wrapper">
          <div class="card-carousel">
            <div class="card-carousel--overflow-container">
              <div
                class="card-carousel-cards"
                :style="{
                  transform: 'translateX' + '(' + currentOffset + 'px' + ')'
                }"
              >
                <div
                  :class="
                    currentItem == key
                      ? 'card-carousel--card active'
                      : 'card-carousel--card'
                  "
                  v-for="(item, key) in items"
                  :key="key"
                >
                  <img
                    :src="item.img"
                    :width="paginationFactor"
                    height="350px"
                    @click="changeImage(item.id, item)"
                  />
                  <div class="img_text">
                    <h4>{{ item.id }} - {{ item.subhead }}</h4>
                    <h2>{{ item.head }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="arrows">
          <div class="arrow_container">
            <div
              class="card-carousel--nav__left"
              @click="moveCarousel(-1)"
              :disabled="atHeadOfList"
            ></div>
          </div>
          <div class="arrow_container">
            <div
              class="card-carousel--nav__right"
              @click="moveCarousel(1)"
              :disabled="atEndOfList"
            ></div>
          </div>
          <div class="arrow_space"></div>
          <div class="arrow_item">{{ currentItem + 1 }}/{{ items.length }}</div>
        </div>
      </div>
    </sequential-entrance>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 275,
      currentItem: 0,
      items: [
        {
          id: 1,
          name: "Kin Khao",
          tag: ["Thai"],
          img: "http://images.eddremonts.dk/Spiderman/1.jpg",
          full_img: "http://images.eddremonts.dk/Spiderman/1_4k.jpg",
          head: "Spider-Man is a 'The Best'",
          subhead: "Spider-Man is a fictional superhero in the Marvel Comics"
        },
        {
          id: 2,
          name: "Jū-Ni",
          tag: ["Sushi", "Japanese", "$$$$"],
          img: "http://images.eddremonts.dk/Spiderman/2.jpg",
          full_img: "http://images.eddremonts.dk/Spiderman/2_4k.jpg",
          head: "Spider-Man is a 'The Best'",
          subhead: "Spider-Man is a fictional superhero in the Marvel Comics"
        },
        {
          id: 3,
          name: "Delfina",
          tag: ["Pizza", "Casual"],
          img: "http://images.eddremonts.dk/Spiderman/3.jpg",
          full_img: "http://images.eddremonts.dk/Spiderman/5_4k.jpg",
          head: "Spider-Man is a 'The Best'",
          subhead: "Spider-Man is a fictional superhero in the Marvel Comics"
        },
        {
          id: 4,
          name: "San Tung",
          tag: ["Chinese", "$$"],
          img: "http://images.eddremonts.dk/Spiderman/4.jpg",
          full_img: "http://images.eddremonts.dk/Spiderman/4_4k.jpg",
          head: "Spider-Man is a 'The Best'",
          subhead: "Spider-Man is a fictional superhero in the Marvel Comics"
        },
        {
          id: 5,
          name: "Anchor Oyster Bar",
          tag: ["Seafood", "Cioppino"],
          img: "http://images.eddremonts.dk/Spiderman/5.jpg",
          full_img: "http://images.eddremonts.dk/Spiderman/5_4k.jpg",
          head: "Spider-Man is a 'The Best'",
          subhead: "Spider-Man is a fictional superhero in the Marvel Comics"
        },
        {
          id: 6,
          name: "Locanda",
          tag: ["Italian"],
          img: "http://images.eddremonts.dk/Spiderman/6.jpg",
          full_img: "http://images.eddremonts.dk/Spiderman/1_4k.jpg",
          head: "Spider-Man is a 'The Best'",
          subhead: "Spider-Man is a fictional superhero in the Marvel Comics"
        },
        {
          id: 7,
          name: "Garden Creamery",
          tag: ["Ice cream"],
          img: "http://images.eddremonts.dk/Spiderman/7.jpg",
          full_img: "http://images.eddremonts.dk/Spiderman/2_4k.jpg",
          head: "Spider-Man is a 'The Best'",
          subhead: "Spider-Man is a fictional superhero in the Marvel Comics"
        },
        {
          id: 8,
          name: "Garden Creamery",
          tag: ["Ice cream"],
          img: "http://images.eddremonts.dk/Spiderman/8.jpg",
          full_img: "http://images.eddremonts.dk/Spiderman/4_4k.jpg",
          head: "Spider-Man is a 'The Best'",
          subhead: "Spider-Man is a fictional superhero in the Marvel Comics"
        }
      ]
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - 1)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  created() {
    this.playAnimation(true);
  },
  methods: {
    ...mapActions(["fetchImageObj"]),
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
        this.currentItem += 1;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
        this.currentItem -= 1;
      }
    },
    changeImage(key) {
      this.currentItem = key - 1;
      if (key != 0) {
        this.currentOffset = -(this.currentItem * this.paginationFactor);
      } else {
        this.currentOffset = 0;
      }
    },
    playAnimation(playIt) {
      let vue = this;
      if (playIt) {
        setInterval(function() {
          if (vue.currentItem != vue.items.length - 1) {
            vue.moveCarousel(1);
          } else {
            vue.changeImage(1, vue.items[1]);
          }
        }, 5000);
      }
    }
  },
  watch: {
    currentItem(ítemPosition) {
      this.fetchImageObj(this.items[ítemPosition]);
    }
  }
};
</script>
<style lang="scss" scoped>
body {
  background: #f8f8f8;
  color: #2c3e50;
  font-family: "Source Sans Pro", sans-serif;
}

.carrusel {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 50px;
  margin-right: 50px;
}

.card-carousel-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}

.card-carousel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: calc(275px * 2);
}

.card-carousel--overflow-container {
  overflow: hidden;
}

.card-carousel--nav__left,
.card-carousel--nav__right {
  display: inline-block;
  width: 8px;
  height: 8px;
  padding: 8px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-top: 2px solid #42b883;
  border-right: 2px solid #42b883;
  cursor: pointer;
  margin: 0 20px;
  -webkit-transition: -webkit-transform 150ms linear;
  transition: -webkit-transform 150ms linear;
  transition: transform 150ms linear;
  transition: transform 150ms linear, -webkit-transform 150ms linear;
}

.card-carousel--nav__left[disabled],
.card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}

.card-carousel--nav__left {
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

.card-carousel--nav__left:active {
  -webkit-transform: rotate(-135deg) scale(0.9);
  transform: rotate(-135deg) scale(0.9);
}

.card-carousel--nav__right {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.card-carousel--nav__right:active {
  -webkit-transform: rotate(45deg) scale(0.9);
  transform: rotate(45deg) scale(0.9);
}

.card-carousel-cards {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: -webkit-transform 150ms ease-out;
  transition: -webkit-transform 150ms ease-out;
  transition: transform 150ms ease-out;
  transition: transform 150ms ease-out, -webkit-transform 150ms ease-out;
  -webkit-transform: translatex(0px);
  transform: translatex(0px);
}

.card-carousel-cards .card-carousel--card {
  margin: 0 10px;
  cursor: pointer;
  -webkit-box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  border-radius: 10px;
  z-index: 3;
  margin-bottom: 2px;
}

.card-carousel-cards .card-carousel--card:first-child {
  margin-left: 0;
}

.card-carousel-cards .card-carousel--card:last-child {
  margin-right: 0;
}

.card-carousel-cards .card-carousel--card img {
  vertical-align: bottom;
  border-radius: 10px;
  -webkit-transition: opacity 150ms linear;
  transition: opacity 150ms linear;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.card-carousel-cards .card-carousel--card img:hover {
  opacity: 1;
}

.card-carousel-cards .card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}

.card-carousel-cards .card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 19px;
  font-weight: 500;
  color: #2c3e50;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.card-carousel-cards .card-carousel--card--footer p.tag {
  font-size: 11px;
  font-weight: 300;
  padding: 4px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}

.card-carousel-cards .card-carousel--card--footer p.tag:before {
  content: "";
  float: left;
  position: absolute;
  top: 0;
  left: -12px;
  width: 0;
  height: 0;
  border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
  border-style: solid;
  border-width: 8px 12px 12px 0;
}

.card-carousel-cards .card-carousel--card--footer p.tag.secondary {
  margin-left: 0;
  border-left: 1.45px dashed white;
}

.card-carousel-cards .card-carousel--card--footer p.tag.secondary:before {
  display: none !important;
}

.card-carousel-cards .card-carousel--card--footer p.tag:after {
  content: "";
  position: absolute;
  top: 8px;
  left: -3px;
  float: left;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: white;
  -webkit-box-shadow: -0px -0px 0px #004977;
  box-shadow: -0px -0px 0px #004977;
}

h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: #42b883;
}

.active {
}

.img_text {
  position: absolute;
  z-index: 10;
  bottom: 0;
  color: white;
  width: 225px;
  height: 180px;
  text-align: left;
  padding-left: 25px;
  h2 {
    font-size: 1.5rem;
  }
}
.arrows {
  margin: 0 25px;
  text-align: center;
  display: flex;
  align-items: center;
  align-content: center;
  .arrow_container {
    width: 56px;
    border-radius: 100%;
    padding: 19px 0px;
    background: #ffffff80;
    text-align: center;
    display: inline;
    margin: 15px;
  }
  .arrow_item {
    font-size: 3rem;
    font-weight: 600;
    color: #ffffff80;
    padding: 15px;
  }
  .arrow_space {
    width: 50%;
    height: 5px;
    margin: 25px 0;
    border-bottom: 2px solid #ffffff80;
  }
}

.popup {
  width: 100vw;
  height: 100vh;
  content: "";
  background: black;
  margin-top: -200px;
  margin-bottom: -200px;
}


@media (max-width: 1440px) {
  .card-carousel {
    width: calc(275px * 5);
  }
}
@media (max-width: 1980px) {
  .card-carousel {
    width: calc(275px * 4);
  }
}
@media (max-width: 1024px) {
  .card-carousel {
    width: calc(275px * 3);
  }
} 
@media (max-width: 768px) {
  .card-carousel {
    width: calc(275px * 2);
  }
}
@media (max-width: 411px) {
  .card-carousel {
    width: calc(275px * 1);
  }
}
/*# sourceMappingURL=carrusel.css.map */
</style>
