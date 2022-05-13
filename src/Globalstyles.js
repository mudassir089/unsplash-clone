import {createGlobalStyle} from 'styled-components'

export const Globalstyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
}

body{
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
    background-color: #fff;
}

body::-webkit-scrollbar {
  width: 7px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: #fff;        /* color of the tracking area */
}
body::-webkit-scrollbar-thumb {
  background-color: #3d3d3d;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}

html{
    font-size: 62.5%;
}

.my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;

  
    @media screen and (min-width: 900px) {
    .my-masonry-grid_column { width: 33%; }
    }
    @media screen and (min-width: 750px) {
    .my-masonry-grid_column { width: 50%; }
    }
    @media screen and (min-width: 350px) {
    .my-masonry-grid_column { width: 100%; }
    }

}
.my-masonry-grid_column {
  padding-left: 30px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  margin-bottom: 30px;
}

.add{
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
position: fixed;
transition: all 0.5s ease;
background-color: #fff !important;
top: 0;
left: 0;
}

.loader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 6em;
  height: 6em;
  border-radius: 50%;
  background: #151414;
  background: -moz-linear-gradient(left, #151414 10%, rgba(21,20,20, 0) 42%);
  background: -webkit-linear-gradient(left, #151414 10%, rgba(21,20,20, 0) 42%);
  background: -o-linear-gradient(left, #151414 10%, rgba(21,20,20, 0) 42%);
  background: -ms-linear-gradient(left, #151414 10%, rgba(21,20,20, 0) 42%);
  background: linear-gradient(to right, #151414 10%, rgba(21,20,20, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #151414;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.loader:after {
  background: #ffffff;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.loaded,
.loaded:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loaded {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load9 1.1s infinite linear;
  animation: load9 1.1s infinite linear;
}
@-webkit-keyframes load9 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load9 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}



`