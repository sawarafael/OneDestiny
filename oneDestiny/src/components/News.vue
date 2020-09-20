<template id="body">

    <div id="container">

        <h1 class="headingTitle"> Notícias </h1>

        <div class="contentList">
            <div class="mainContent">
                <ul class="newsTab"></ul>
                <div class="newsContentParts">
                    <h2 class="headingPartOne"> Noticias Especiais </h2>
                    <ul class="listContentsOne">
                        <li class="content" v-for="titler in postOne" v-bind:key="titler"><a href="./details/">
                        <div><p> {{ titler.title }}  <span> ( {{ date }} ) </span></p> </div>
                        </a></li>
                        <li class="content" v-for="titler in postTwo" v-bind:key="titler"><a href="./details/">
                        <div ><p> {{ titler.title }}  <span> ( {{ date }} ) </span></p> </div>
                        </a>
                        </li>
                        <li class="content" v-for="titler in postThree" v-bind:key="titler"><a href="./details/" >
                         <div><p> {{ titler.title }} <span> ( {{ date }} ) </span> </p> </div>
                        </a>
                        </li>
                    </ul>
                    <h2 class="headingPartTwo"> Noticias           </h2>
                    <ul>
                         <li class="content" v-for="titler in postOne" v-bind:key="titler"><a href="./details/">
                        <div><p> {{ titler.title }}  <span> ( {{ date }} ) </span></p> </div>
                        </a></li>
                        <li class="content" v-for="titler in postTwo" v-bind:key="titler"><a href="./details/">
                        <div ><p> {{ titler.title }}  <span> ( {{ date }} ) </span></p> </div>
                        </a>
                        </li>
                        <li class="content" v-for="titler in postThree" v-bind:key="titler"><a href="./details/" >
                         <div><p> {{ titler.title }} <span> ( {{ date }} ) </span> </p> </div>
                        </a>
                        </li>
                    </ul>
                    <h2 class="headingPartThr"> Tópicos            </h2>
                    <ul>
                         <li class="content" v-for="titler in postOne" v-bind:key="titler"><a href="./details/">
                        <div><p> {{ titler.title }}  <span> ( {{ date }} ) </span></p> </div>
                        </a></li>
                        <li class="content" v-for="titler in postTwo" v-bind:key="titler"><a href="./details/">
                        <div ><p> {{ titler.title }}  <span> ( {{ date }} ) </span></p> </div>
                        </a>
                        </li>
                        <li class="content" v-for="titler in postThree" v-bind:key="titler"><a href="./details/" >
                         <div><p> {{ titler.title }} <span> ( {{ date }} ) </span> </p> </div>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- SEPARAÇÃO DE CONTEÚDO, O DIREITO CONTERÁ BARRAS DE STATUS DOS SERVIDORES; O ESQUERDO CONTERÁ A LISTA DE NOTICIAS -->
            <div class="sideContent">
                <div class="rside">
                </div>
                <div class="contentOne">
                    <a href=""><img src="" alt=""></a>
                </div>
                <div class="contentTwo">
                    <a href=""><img src="" alt=""></a>
                </div>
                <div class="contentThree">
                    <a href=""><img src="" alt=""></a>
                </div>
            </div>
        </div>


    </div>


</template>

<script>

const axios = require('axios');

export default {
    name: 'News',
    data () {
        return {
            postOne   : [],
            postTwo   : [],
            postThree : [],
            date : '20/20/20'

        }

    },
    created () {
        axios.get('https://my-json-server.typicode.com/typicode/demo/posts', { params: { id: 1 } })
            .then(response => { this.postOne      = response.data })
            .catch(e => { console.log("deu erro") })
        axios.get('https://my-json-server.typicode.com/typicode/demo/posts', { params: { id: 2 } })
            .then(response => { this.postTwo      = response.data })
            .catch(e => { console.log("deu erro") })
        axios.get('https://my-json-server.typicode.com/typicode/demo/posts', { params: { id: 3 } })
            .then(response => { this.postThree      = response.data })
            .catch(e => { console.log("deu erro") })
    }



}

</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#container {
    margin: 0% auto;
    width: 1200px;
}

.headingTitle {
    font-family: sans-serif;
    border-style: 2px solid black;
    border-radius: 5px;
    background-color: #1f2250;
    color: white;
    text-align: center;
}


.mainContent {
    font-family: 'Roboto', sans-serif;
    float: left;
    width: 680px;
}

.mainContent h2 {
    border-left: 4px solid #1f2250;
    border-bottom: 1px solid #1f2250;
}

a{
    color: black;
    text-decoration: none;
}

.sideContent {
    float: left;
    width: 520px;

}

.imgSideLeft {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.imgSideRight {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
}

</style>
